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

import Swiper from "swiper";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

document.addEventListener("DOMContentLoaded", () => {
    const sliderEl = document.querySelector(".countries-slider");
    const currentEl = sliderEl.querySelector(".countries-slider__current");
    const totalEl = sliderEl.querySelector(".countries-slider__total");
    const progressEl = sliderEl.querySelector(".countries-slider__progress-bar");

    const getRealSlidesCount = (swiper) =>
        swiper.slidesEl.querySelectorAll(".swiper-slide:not(.swiper-slide-duplicate)").length;

    let totalSlides = 0;

    const updateUI = (swiper) => {
        const current = swiper.realIndex + 1;
        currentEl.textContent = current;
        const pct = (current / totalSlides) * 100;
        progressEl.style.width = `${pct}%`;
    };

    const swiper = new Swiper(sliderEl, {
        modules: [Navigation, Autoplay],
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: ".countries-slider__next",
            prevEl: ".countries-slider__prev",
        },
        slidesPerView: 1, // default for small screens
        breakpoints: {
            576: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1400: { slidesPerView: 4 },
        },

        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },

        on: {
            init(sw) {
                totalSlides = getRealSlidesCount(sw);
                totalEl.textContent = totalSlides;
                updateUI(sw);
            },
            slideChange(sw) {
                updateUI(sw);
            },
            loopFix(sw) {
                updateUI(sw);
            },
        },
    });
});


