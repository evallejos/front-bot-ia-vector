module.exports = {
    content: ["./src/**/*.{html,ts}"],
    darkMode: 'class',
    plugins: [
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms')
    ],
}