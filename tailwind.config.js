module.exports = {
    content: [
        './_drafts/**/*.html',
        './_includes/**/*.html',
        './_layouts/**/*.html',
        './_posts/*.md',
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