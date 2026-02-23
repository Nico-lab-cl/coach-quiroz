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
        },
    },
    plugins: [],
};
