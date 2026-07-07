// =======================================
// typing.js
// Hero Typing Animation
// =======================================

document.addEventListener("DOMContentLoaded", () => {

    const element = document.getElementById("typing-text");

    if (!element) return;

    const texts = [
        "Public Servant",
        "Community Leader",
        "Voice of the People",
        "Working for a Better Pakistan",
        "Serving Lahore with Commitment"
    ];

    let textIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let speed = 90;

    function type() {

        const current = texts[textIndex];

        if (!deleting) {

            element.textContent = current.substring(0, charIndex++);
            
            if (charIndex > current.length) {
                deleting = true;
                setTimeout(type, 1800);
                return;
            }

        } else {

            element.textContent = current.substring(0, charIndex--);

            if (charIndex < 0) {
                deleting = false;
                textIndex = (textIndex + 1) % texts.length;
            }

        }

        setTimeout(type, deleting ? 45 : speed);

    }

    type();

});