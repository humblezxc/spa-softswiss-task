import "./styles/main.scss";
import { initThemeToggle } from "./js/theme";
import { initBurgerMenu } from "./js/burger";
import { initSlider } from "./js/slider";
import { initScrollTop } from "./js/scrollTop";
import {initParallax} from "./js/parallax";

document.addEventListener("DOMContentLoaded", () => {
    initThemeToggle();
    initBurgerMenu();
    initSlider();
    initScrollTop();
    initParallax();
});
