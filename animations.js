// ========================================
// animations.js
// Premium Scroll & Animation Effects
// ========================================

document.addEventListener("DOMContentLoaded", () => {

    // ===========================
    // Fade Elements on Scroll
    // ===========================

    const elements = document.querySelectorAll(
        ".card, .gallery-item, .hero, section, .blog-header, .gallery-header"
    );

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0px)";
                entry.target.style.transition =
                    "all 0.8s ease";

            }

        });

    }, {
        threshold: 0.15
    });

    elements.forEach(el => {

        el.style.opacity = "0";
        el.style.transform = "translateY(60px)";

        observer.observe(el);

    });

    // ===========================
    // Floating Animation
    // ===========================

    document.querySelectorAll(".float").forEach(item => {

        let direction = 1;

        setInterval(() => {

            item.style.transform =
                `translateY(${direction * 8}px)`;

            direction *= -1;

        }, 1500);

    });

    // ===========================
    // Image Zoom Animation
    // ===========================

    document.querySelectorAll(".gallery-item img").forEach(img => {

        img.addEventListener("mouseover", () => {

            img.style.transform = "scale(1.08)";
            img.style.transition = ".5s";

        });

        img.addEventListener("mouseout", () => {

            img.style.transform = "scale(1)";

        });

    });

    // ===========================
    // Button Ripple Effect
    // ===========================

    document.querySelectorAll("button,.btn").forEach(btn => {

        btn.addEventListener("click", function(e){

            const ripple = document.createElement("span");

            ripple.style.position = "absolute";
            ripple.style.width = "15px";
            ripple.style.height = "15px";
            ripple.style.borderRadius = "50%";
            ripple.style.background = "rgba(255,255,255,.5)";
            ripple.style.left =
                (e.offsetX - 7) + "px";

            ripple.style.top =
                (e.offsetY - 7) + "px";

            ripple.style.animation =
                "ripple .6s linear";

            this.style.position = "relative";
            this.style.overflow = "hidden";

            this.appendChild(ripple);

            setTimeout(() => {

                ripple.remove();

            }, 600);

        });

    });

});

// ========================================
// Inject Ripple CSS
// ========================================

const style = document.createElement("style");

style.innerHTML = `

@keyframes ripple{

0%{

transform:scale(0);

opacity:1;

}

100%{

transform:scale(18);

opacity:0;

}

}

`;

document.head.appendChild(style);