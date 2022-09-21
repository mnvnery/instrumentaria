module.exports = {
    content: [
        './_includes/**/*.html',
        './_layouts/**/*.html',
        './*.md',
        './*.html',
    ],
    theme: {
        extend: {
            fontFamily: {
                agrandir: ["Agrandir Regular", "sans-serif"],
                apoc: ["Apoc Normal", "serif"],
            },
            fontSize: {
                'xxs': ['0.7rem', '1.35'], 
            },
            screens: {
                '3xl': '2200px'
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}