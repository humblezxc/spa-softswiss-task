import "./styles/main.scss";


document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const savedTheme = localStorage.getItem("theme");
    const toggleBtn = document.getElementById("theme-toggle");

    if (savedTheme) {
        body.classList.add(savedTheme);
    } else {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        body.classList.add(prefersDark ? "dark-theme" : "light-theme");
    }

    toggleBtn.addEventListener("click", () => {
        console.log('here')
        if (body.classList.contains("light-theme")) {
            body.classList.replace("light-theme", "dark-theme");
            localStorage.setItem("theme", "dark-theme");
        } else {
            body.classList.replace("dark-theme", "light-theme");
            localStorage.setItem("theme", "light-theme");
        }
    });

    const burgerMenu = document.getElementById("burger-menu");
    const nav = document.querySelector(".header__navigation");
    const burgerIcon = document.querySelector(".burger-menu__icon");

    burgerMenu.addEventListener("click", () => {
        nav.classList.toggle("open");
        body.classList.toggle("fixed");
        burgerIcon.classList.toggle("open");
    });
});
