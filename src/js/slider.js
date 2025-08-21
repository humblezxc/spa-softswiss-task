import Swiper from "swiper";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export function initSlider() {
    const sliderEl = document.querySelector(".countries-slider");
    if (!sliderEl) return;

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
        requestAnimationFrame(() => {
            progressEl.style.width = `${pct}%`;
        });
    };

    const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const autoplay = reduceMotion
        ? false
        : {
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        };

    new Swiper(sliderEl, {
        modules: [Navigation, Autoplay],
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: ".countries-slider__next",
            prevEl: ".countries-slider__prev",
        },
        slidesPerView: 1,
        breakpoints: {
            576: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1400: { slidesPerView: 4 },
        },
        autoplay,
        on: {
            init(sw) {
                totalSlides = getRealSlidesCount(sw);
                totalEl.textContent = totalSlides;
                updateUI(sw);
            },
            slideChange: updateUI,
        },
    });
}
