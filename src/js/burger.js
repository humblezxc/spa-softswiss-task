export function initBurgerMenu() {
    const burgerMenu = document.getElementById("burger-menu");
    const nav = document.querySelector(".header__navigation");
    const burgerIcon = document.querySelector(".burger-menu__icon");
    const body = document.body;

    if (!burgerMenu || !nav || !burgerIcon) return;

    const onDocClick = (e) => {
        if (!nav.classList.contains("open")) return;
        const target = e.target;
        if (target.closest(".header__navigation") || target.closest("#burger-menu")) return;
        closeMenu();
    };

    const onKeyDown = (e) => {
        if (e.key === "Escape") closeMenu();
    };

    const onResize = () => {
        if (nav.classList.contains("open")) closeMenu();
    };

    function openMenu() {
        nav.classList.add("open");
        body.classList.add("fixed");
        burgerIcon.classList.add("open");
        burgerMenu.setAttribute("aria-expanded", "true");
        document.addEventListener("click", onDocClick);
        document.addEventListener("keydown", onKeyDown);
        window.addEventListener("resize", onResize);
    }

    function closeMenu() {
        nav.classList.remove("open");
        body.classList.remove("fixed");
        burgerIcon.classList.remove("open");
        burgerMenu.setAttribute("aria-expanded", "false");
        document.removeEventListener("click", onDocClick);
        document.removeEventListener("keydown", onKeyDown);
        window.removeEventListener("resize", onResize);
    }

    burgerMenu.addEventListener("click", (e) => {
        e.stopPropagation();
        if (nav.classList.contains("open")) {
            closeMenu();
        } else {
            openMenu();
        }
    });
}
