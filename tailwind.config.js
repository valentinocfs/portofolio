module.exports = {
    mode: "jit",
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                green: {
                    500: "#1DB954",
                },
                black: {
                    400: "#222020",
                    500: "#121212",
                    600: "#1b1a1a",
                    700: "#070606",
                },
                white: {
                    500: "#F0F0F0",
                    700: "#7A7777",
                },
            },
            textColor: {
                white: {
                    500: "#F0F0F0",
                    700: "#a3a0a0",
                },
                green: {
                    500: "#1DB954",
                },
                purple: {
                    700: "#8e5bd6",
                },
                black: {
                    500: "#121212",
                    700: "#070606",
                },
            },
            fontSize: {
                "10xl": "9rem",
                "11xl": "9.5rem",
                "12xl": "10rem",
            },
            inset: {
                100: "30rem",
            },
            boxShadow: {
                light: ".5px .5px 10px .5px rgba(129, 125, 125, 0.3)",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
