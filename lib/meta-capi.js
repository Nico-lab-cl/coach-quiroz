import crypto from 'crypto';

/**
 * Normaliza y hashea un string usando SHA-256 según requerimientos de Meta.
 */
function hashData(data) {
    if (!data) return undefined;
    const normalized = data.trim().toLowerCase();
    return crypto.createHash('sha256').update(normalized).digest('hex');
}

/**
 * Normaliza un número de teléfono (remueve caracteres no numéricos excepto el + inicial).
 */
function hashPhone(phone) {
    if (!phone) return undefined;
    // Remueve todo excepto números y el signo +
    const normalized = phone.replace(/[^\d+]/g, '');
    return crypto.createHash('sha256').update(normalized).digest('hex');
}

/**
 * Envía un evento a Meta Conversions API
 * 
 * @param {Object} params
 * @param {string} params.eventName - ej: 'Lead', 'Contact', 'Subscribe', 'ViewContent'
 * @param {string} params.eventId - ID único para deduplicación (debe coincidir con el del Pixel client-side)
 * @param {string} params.eventSourceUrl - URL donde ocurrió el evento
 * @param {Object} params.userData - { email, phone, clientIp, clientUserAgent, fbp, fbc, country, city, externalId }
 * @param {Object} params.customData - Datos adicionales del evento (value, currency, content_name, etc.)
 */
export async function sendMetaEvent({ eventName, eventId, eventSourceUrl, userData, customData = {} }) {
    const PIXEL_ID = process.env.META_PIXEL_ID;
    const ACCESS_TOKEN = process.env.META_CAPI_TOKEN;

    if (!PIXEL_ID || !ACCESS_TOKEN) {
        console.warn('Meta CAPI: Faltan credenciales META_PIXEL_ID o META_CAPI_TOKEN en el .env');
        return;
    }

    // Preparar raw user data
    const { email, phone, clientIp, clientUserAgent, fbp, fbc, country, city, externalId } = userData;

    // Hashear PII si están presentes
    const em = email ? [hashData(email)] : undefined;
    const ph = phone ? [hashPhone(phone)] : undefined;
    
    // El país debe ser ISO 3166-1 alpha-2 minúscula (ej: 'cl', 'mx')
    const normalizedCountry = country ? hashData(country.substring(0, 2)) : undefined;
    const normalizedCity = city ? hashData(city) : undefined;
    const external_id = externalId ? [hashData(externalId)] : undefined;

    const payload = {
        data: [
            {
                event_name: eventName,
                event_time: Math.floor(Date.now() / 1000),
                event_id: eventId,
                event_source_url: eventSourceUrl,
                action_source: 'website',
                user_data: {
                    client_ip_address: clientIp,
                    client_user_agent: clientUserAgent,
                    em,
                    ph,
                    country: normalizedCountry ? [normalizedCountry] : undefined,
                    ct: normalizedCity ? [normalizedCity] : undefined,
                    fbp,
                    fbc,
                    external_id
                },
                custom_data: customData
            }
        ]
    };

    // Remover keys undefined para evitar problemas con la API de Meta
    if (!payload.data[0].user_data.em) delete payload.data[0].user_data.em;
    if (!payload.data[0].user_data.ph) delete payload.data[0].user_data.ph;
    if (!payload.data[0].user_data.country) delete payload.data[0].user_data.country;
    if (!payload.data[0].user_data.ct) delete payload.data[0].user_data.ct;
    if (!payload.data[0].user_data.fbp) delete payload.data[0].user_data.fbp;
    if (!payload.data[0].user_data.fbc) delete payload.data[0].user_data.fbc;
    if (!payload.data[0].user_data.external_id) delete payload.data[0].user_data.external_id;

    try {
        const response = await fetch(`https://graph.facebook.com/v21.0/${PIXEL_ID}/events`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                data: payload.data,
                access_token: ACCESS_TOKEN
            })
        });

        const result = await response.json();
        
        if (!response.ok) {
            console.error('Meta CAPI Error:', result);
        } else {
            console.log(`[Meta CAPI] Evento ${eventName} enviado correctamente. Event ID: ${eventId}`);
        }
        
    } catch (error) {
        console.error('Meta CAPI Request Failed:', error);
    }
}
