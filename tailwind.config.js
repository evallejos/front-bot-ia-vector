module.exports = {
    content: ["./src/**/*.{html,ts}"],
    theme: {

    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms')
    ],
}