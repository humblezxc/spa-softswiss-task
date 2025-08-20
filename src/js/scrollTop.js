export function initScrollTop() {
    const btn = document.querySelector(".footer__move-top");
    if (!btn) return;

    btn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
}
