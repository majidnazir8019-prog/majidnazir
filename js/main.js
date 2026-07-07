document.addEventListener("DOMContentLoaded", function () {

    // ==========================
    // Smooth Scroll
    // ==========================
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    // ==========================
    // Active Navigation
    // ==========================

    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll("nav a").forEach(link => {

        if (link.getAttribute("href") === currentPage) {

            link.classList.add("active");

        }

    });

    // ==========================
    // Scroll To Top Button
    // ==========================

    let topButton = document.createElement("button");

    topButton.id = "topBtn";

    topButton.innerHTML = "↑";

    topButton.style.position = "fixed";
    topButton.style.bottom = "25px";
    topButton.style.right = "25px";
    topButton.style.width = "50px";
    topButton.style.height = "50px";
    topButton.style.border = "none";
    topButton.style.borderRadius = "50%";
    topButton.style.background = "#0b3d91";
    topButton.style.color = "#ffffff";
    topButton.style.fontSize = "20px";
    topButton.style.cursor = "pointer";
    topButton.style.display = "none";
    topButton.style.boxShadow = "0 5px 15px rgba(0,0,0,.3)";
    topButton.style.transition = ".3s";
    topButton.style.zIndex = "9999";

    document.body.appendChild(topButton);

    window.addEventListener("scroll", function () {

        if (window.scrollY > 300) {

            topButton.style.display = "block";

        } else {

            topButton.style.display = "none";

        }

    });

    topButton.addEventListener("click", function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

    // ==========================
    // Hero Fade Animation
    // ==========================

    const hero = document.querySelector(".hero");

    if (hero) {

        hero.style.opacity = "0";

        setTimeout(() => {

            hero.style.transition = "opacity 1.2s ease";

            hero.style.opacity = "1";

        }, 300);

    }

    // ==========================
    // Reveal on Scroll
    // ==========================

    const revealItems = document.querySelectorAll(".card, .gallery-item, section");

    function reveal() {

        revealItems.forEach(item => {

            const windowHeight = window.innerHeight;

            const elementTop = item.getBoundingClientRect().top;

            if (elementTop < windowHeight - 100) {

                item.classList.add("slide-up");

            }

        });

    }

    reveal();

    window.addEventListener("scroll", reveal);

    // ==========================
    // Contact Form
    // ==========================

    const form = document.querySelector("form");

    if (form) {

        form.addEventListener("submit", function (e) {

            e.preventDefault();

            const name = form.querySelector('input[type="text"]');

            const email = form.querySelector('input[type="email"]');

            const message = form.querySelector("textarea");

            if (!name.value.trim()) {

                alert("Please enter your name.");

                name.focus();

                return;

            }

            if (!email.value.trim()) {

                alert("Please enter your email.");

                email.focus();

                return;

            }

            if (!message.value.trim()) {

                alert("Please enter your message.");

                message.focus();

                return;

            }

            alert("Thank you! Your message has been recorded.");

            form.reset();

        });

    }

    // ==========================
    // Navbar Shadow
    // ==========================

    const header = document.querySelector("header");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 50) {

            header.style.boxShadow = "0 5px 20px rgba(0,0,0,.15)";

        } else {

            header.style.boxShadow = "none";

        }

    });

    // ==========================
    // Image Hover Zoom
    // ==========================

    document.querySelectorAll(".gallery-item img").forEach(img => {

        img.addEventListener("mouseenter", () => {

            img.style.transform = "scale(1.05)";

            img.style.transition = ".4s";

        });

        img.addEventListener("mouseleave", () => {

            img.style.transform = "scale(1)";

        });

    });

    // ==========================
    // Button Hover
    // ==========================

    document.querySelectorAll("button, .btn").forEach(btn => {

        btn.addEventListener("mouseenter", () => {

            btn.style.transform = "translateY(-3px)";

        });

        btn.addEventListener("mouseleave", () => {

            btn.style.transform = "translateY(0px)";

        });

    });

});