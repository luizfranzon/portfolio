/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
        fontFamily: {
            'kanit' : ["Kanit", "system-ui"],
            'sora' : ["Sora", "sans-serif"]
        }
    },
    plugins: [],
};

