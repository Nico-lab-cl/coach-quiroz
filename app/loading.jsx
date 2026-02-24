export default function Loading() {
    return (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black-900 overflow-hidden">
            <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gold-500/20 blur-xl rounded-full"></div>
                {/* Spinning logo */}
                <img
                    src="/images/logo.jpeg"
                    alt="Cargando..."
                    className="relative w-32 h-32 rounded-full border-2 border-gold-500/50 object-cover animate-[spin_3s_linear_infinite] shadow-[0_0_30px_rgba(212,175,55,0.3)]"
                />
            </div>
            <p className="mt-8 text-gold-500 text-sm font-bold tracking-widest uppercase animate-pulse">
                Cargando...
            </p>
        </div>
    );
}
