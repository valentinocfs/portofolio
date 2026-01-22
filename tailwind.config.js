module.exports = {
    mode: 'jit',
    purge: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                green: {
                    500: '#1DB954',
                },
                black: {
                    100: 'var(--bg-tertiary)',
                    400: 'var(--bg-tertiary)',
                    500: 'var(--bg-primary)',
                    600: 'var(--bg-tertiary)',
                    700: 'var(--bg-secondary)',
                },
                white: {
                    500: 'var(--text-primary)',
                    700: 'var(--text-secondary)',
                },
            },
            textColor: {
                white: {
                    500: 'var(--text-primary)',
                    700: 'var(--text-secondary)',
                },
                green: {
                    500: '#1DB954',
                },
                purple: {
                    700: '#8e5bd6',
                },
                black: {
                    500: 'var(--text-primary)',
                    700: 'var(--text-secondary)',
                },
            },
            backgroundColor: {
                black: {
                    500: 'var(--bg-primary)',
                    600: 'var(--bg-tertiary)',
                    700: 'var(--bg-secondary)',
                },
                white: {
                    500: 'var(--bg-primary)',
                    700: 'var(--bg-tertiary)',
                },
            },
            borderColor: {
                white: {
                    500: 'var(--border-color)',
                    700: 'var(--border-color)',
                },
                black: {
                    500: 'var(--border-color)',
                    700: 'var(--border-color)',
                },
            },
            fontSize: {
                '10xl': '9rem',
                '11xl': '9.5rem',
                '12xl': '10rem',
            },
            inset: {
                100: '30rem',
            },
            boxShadow: {
                light: '.5px .5px 10px .5px rgba(129, 125, 125, 0.3)',
            },
        },
    },
    variants: {
        extend: {
            backgroundColor: ['dark'],
            textColor: ['dark'],
            borderColor: ['dark'],
        },
    },
    plugins: [],
};
