// ============================
// Wait until page fully loaded
// ============================

window.addEventListener("load", () => {

    // 等 loading 动画完全结束
    setTimeout(() => {

        const sr = ScrollReveal({
            distance: "100px",
            duration: 1800,
            delay: 300,
            easing: "cubic-bezier(0.2, 0.8, 0.2, 1)",
            reset: true,
            mobile: true
        });

        // ============================
        // index.html
        // ============================

        // Header / Hero
        sr.reveal(".header", { origin: "top", distance: "40px", delay: 80 });
        sr.reveal(".hero-content h1", { origin: "bottom", delay: 150 });
        sr.reveal(".hero-content p", { origin: "bottom", delay: 240 });

        // About
        sr.reveal("#about .about-text", { origin: "left" });
        sr.reveal("#about .about-image-wrap", { origin: "right", delay: 160 });

        // Company
        sr.reveal("#company .company-left", { origin: "left" });
        sr.reveal("#company .company-right", { origin: "right", delay: 160 });

        // Gallery
        sr.reveal(".gallery-marquee", { origin: "bottom", distance: "40px", delay: 100 });

        // Works
        sr.reveal("#works .works-title", { origin: "bottom", distance: "50px" });
        sr.reveal("#works .works-group", { origin: "bottom", interval: 140 });
        sr.reveal("#works .section-sub", { origin: "bottom", distance: "50px", interval: 40 });
        sr.reveal("#works .work-item", { origin: "bottom", interval: 80 });
        sr.reveal("#works .partners-grid img", { origin: "bottom", interval: 60 });
        sr.reveal("#works .works-deco", { origin: "right", delay: 140 });
        sr.reveal("#works .deco-clapper", { origin: "left", delay: 140 });
        sr.reveal(".works-note", { origin: "bottom", distance: "40px", interval: 120 });

        // Recruit
        sr.reveal("#recruit .recruit__title", { origin: "bottom", distance: "50px" });
        sr.reveal("#recruit .recruit-card--driver", { origin: "left", delay: 120 });
        sr.reveal("#recruit .recruit-card--actor", { origin: "right", delay: 120 });

        // Contact
        sr.reveal("#contact .contact-card", { origin: "bottom" });
        sr.reveal("#contact .contact-row", { origin: "bottom", interval: 120 });

        // Footer
        sr.reveal(".footer", { origin: "bottom", distance: "40px", delay: 120 });


    }, 2300); // 

});



// ============================
// job_car.html
// ============================


const sr = ScrollReveal({
    distance: "100px",
    duration: 1800,
    delay: 300,
    easing: "cubic-bezier(0.2, 0.8, 0.2, 1)",
    reset: true,
    mobile: true
});

sr.reveal(".job-hero__title", { origin: "bottom", delay: 150 });
sr.reveal(".job-hero__sub", { origin: "bottom", delay: 260 });

sr.reveal(".job-card", { origin: "bottom", distance: "60px", delay: 200 });

sr.reveal(".job-card__content p", {
    origin: "bottom",
    distance: "40px",
    interval: 340
});

sr.reveal(".job-car", {
    origin: "right",
    distance: "120px",
    duration: 1800,
    delay: 1200
});
