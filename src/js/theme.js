export function initThemeToggle() {
    const body = document.body;
    const savedTheme = localStorage.getItem("theme");
    const toggleBtns = document.querySelectorAll("#theme-toggle-mobile, #theme-toggle-desktop");

    if (savedTheme) {
        body.classList.add(savedTheme);
    } else {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        body.classList.add(prefersDark ? "dark-theme" : "light-theme");
    }

    toggleBtns.forEach(btn => {
        btn?.addEventListener("click", () => {
            if (body.classList.contains("light-theme")) {
                body.classList.replace("light-theme", "dark-theme");
                localStorage.setItem("theme", "dark-theme");
            } else {
                body.classList.replace("dark-theme", "light-theme");
                localStorage.setItem("theme", "light-theme");
            }
        });
    });
}
