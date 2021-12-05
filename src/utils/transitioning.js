const attachAnimation = (target, style) => {
    if (!target || !style) {
        console.warn("attachAnimation: target or style is null");
        return;
    }

    target.classList.add(style);
    target.addEventListener("transitionend", cleanupAnimation.bind(this, target, style, event), false);
};

const cleanupAnimation = (target, style) => {
    if (!target || !style) {
        console.warn("attachAnimation: target or style is null");
        return;
    }

    target.classList.remove(style);
    target.removeEventListener("transitionend", cleanupAnimation.bind(this, target, style, event), false);
};

export default attachAnimation;
