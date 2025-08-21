import leftImg from "../assets/images/hero-left-bg.png";
import rightImg from "../assets/images/hero-right-bg.png";

export function initParallax() {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
    }

    const container = document.querySelector(".hero-section__container");
    if (!container) return;

    container.style.position = container.style.position || "relative";

    let leftEl = container.querySelector(".bg-left");
    let rightEl = container.querySelector(".bg-right");

    if (!leftEl) {
        leftEl = document.createElement("div");
        leftEl.className = "bg-left";
        container.prepend(leftEl);
    }
    if (!rightEl) {
        rightEl = document.createElement("div");
        rightEl.className = "bg-right";
        container.appendChild(rightEl);
    }

    leftEl.style.backgroundImage  = `url(${leftImg})`;
    rightEl.style.backgroundImage = `url(${rightImg})`;

    let visible = false;
    const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            visible = entry.isIntersecting;
            if (visible) requestTick();
        });
    }, { threshold: 0.05 });
    io.observe(container);

    let ticking = false;

    function calcFactor() {
        const rect = container.getBoundingClientRect();
        const winH = window.innerHeight;
        const sectionCenter = rect.top + rect.height / 2;
        const viewportCenter = winH / 2;
        const raw = (viewportCenter - sectionCenter) / (winH / 2);
        return Math.max(-1, Math.min(1, raw));
    }

    function update() {
        ticking = false;
        if (!visible) return;

        const factor = calcFactor();
        const vw = window.innerWidth;

        const unifiedMaxScale = vw >= 1200 ? 1.18 : vw >= 768 ? 1.12 : 1.06;
        const unifiedMaxTranslate = vw >= 1200 ? 24 : vw >= 768 ? 16 : 8;

        const scale = 1 + Math.abs(factor) * (unifiedMaxScale - 1);
        const translateY = factor * unifiedMaxTranslate;

        leftEl.style.transform  = `translate3d(0, ${translateY}px, 0) scale(${scale})`;
        rightEl.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale})`;
    }

    function requestTick() {
        if (!ticking) {
            ticking = true;
            requestAnimationFrame(update);
        }
    }

    window.addEventListener("scroll", requestTick, { passive: true });
    window.addEventListener("resize", requestTick);

    requestTick();
}
