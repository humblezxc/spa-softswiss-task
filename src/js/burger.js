export function initBurgerMenu() {
    const burgerMenu = document.getElementById("burger-menu");
    const nav = document.querySelector(".header__navigation");
    const burgerIcon = document.querySelector(".burger-menu__icon");
    const body = document.body;

    if (burgerMenu && nav && burgerIcon) {
        burgerMenu.addEventListener("click", () => {
            nav.classList.toggle("open");
            body.classList.toggle("fixed");
            burgerIcon.classList.toggle("open");
        });
    }
}
