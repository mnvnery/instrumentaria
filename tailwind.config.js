module.exports = {
    content: [
        './_includes/**/*.html',
        './_layouts/**/*.html',
        './*.md',
        './*.html',
    ],
    theme: {
        theme: {
            extend: {
                fontFamily: {
                    agrandir: ["Agrandir Regular", "sans-serif"],
                    apoc: ["Apoc Normal", "serif"],
                },
            },
        },
    },
    plugins: []
}