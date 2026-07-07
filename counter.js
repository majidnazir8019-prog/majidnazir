// ============================================
// counter.js
// Animated Counter
// ============================================

document.addEventListener("DOMContentLoaded", () => {

    const counters = document.querySelectorAll(".counter");

    const speed = 40;

    const startCounter = (counter) => {

        const target = +counter.getAttribute("data-target");

        let count = 0;

        const update = () => {

            const increment = Math.ceil(target / speed);

            if (count < target) {

                count += increment;

                if (count > target) count = target;

                counter.innerText = count + "+";

                requestAnimationFrame(update);

            } else {

                counter.innerText = target + "+";

            }

        };

        update();

    };

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                startCounter(entry.target);

                observer.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.5
    });

    counters.forEach(counter => {

        counter.innerText = "0+";

        observer.observe(counter);

    });

});