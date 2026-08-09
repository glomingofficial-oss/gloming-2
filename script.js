// ===============================
// GLOMING WEBSITE JAVASCRIPT
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    // ===============================
    // SERVICE BUTTON PLACEHOLDER CHECK
    // ===============================

    const serviceButtons = document.querySelectorAll(".service-button");

    serviceButtons.forEach(function (button) {

        button.addEventListener("click", function (event) {

            const link = button.getAttribute("href");

            if (
                !link ||
                link === "#" ||
                link.includes("_FORM_URL")
            ) {
                event.preventDefault();

                alert(
                    "GLOMING Project Form will be connected soon."
                );
            }

        });

    });


    // ===============================
    // NOTICE SLIDER
    // ===============================

    const noticeTrack =
        document.querySelector(".notice-track");

    if (noticeTrack) {

        noticeTrack.addEventListener(
            "mouseenter",
            function () {
                noticeTrack.style.animationPlayState = "paused";
            }
        );

        noticeTrack.addEventListener(
            "mouseleave",
            function () {
                noticeTrack.style.animationPlayState = "running";
            }
        );

        noticeTrack.addEventListener(
            "touchstart",
            function () {
                noticeTrack.style.animationPlayState = "paused";
            }
        );

        noticeTrack.addEventListener(
            "touchend",
            function () {
                setTimeout(function () {
                    noticeTrack.style.animationPlayState = "running";
                }, 1500);
            }
        );

    }


    // ===============================
    // NAVBAR SCROLL EFFECT
    // ===============================

    const navbar =
        document.querySelector(".navbar");

    window.addEventListener(
        "scroll",
        function () {

            if (window.scrollY > 30) {

                navbar.style.boxShadow =
                    "0 5px 25px rgba(16, 24, 40, 0.08)";

            } else {

                navbar.style.boxShadow = "none";

            }

        }
    );


    // ===============================
    // SMOOTH NAVIGATION
    // ===============================

    const navLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );

    navLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const targetId =
                    link.getAttribute("href");

                if (
                    targetId &&
                    targetId !== "#"
                ) {

                    const target =
                        document.querySelector(
                            targetId
                        );

                    if (target) {

                        event.preventDefault();

                        target.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });

                    }

                }

            }
        );

    });


    // ===============================
    // SIMPLE FADE-IN ANIMATION
    // ===============================

    const animatedElements =
        document.querySelectorAll(
            ".service-card, .why-card, .process-card, .payment-card"
        );


    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (entry.isIntersecting) {

                            entry.target.style.opacity =
                                "1";

                            entry.target.style.transform =
                                "translateY(0)";

                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.12
            }
        );


    animatedElements.forEach(
        function (element) {

            element.style.opacity = "0";

            element.style.transform =
                "translateY(25px)";

            element.style.transition =
                "opacity 0.6s ease, transform 0.6s ease";

            observer.observe(element);

        }
    );


    // ===============================
    // CONSOLE MESSAGE
    // ===============================

    console.log(
        "GLOMING Website Loaded Successfully 🚀"
    );

});