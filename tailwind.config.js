/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                gold: {
                    400: '#E5C558',
                    500: '#D4AF37',
                    600: '#B59428',
                },
                black: {
                    900: '#0a0a0a',
                    800: '#121212',
                    700: '#1c1c1c',
                },
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
            },
        },
    },
    plugins: [],
};
