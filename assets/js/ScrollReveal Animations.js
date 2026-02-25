// ============================
// ScrollReveal Animations (for index.html)
// ============================

const sr = ScrollReveal({
    distance: "100px",
    duration: 1600,
    delay: 300,
    easing: "cubic-bezier(0.2, 0.8, 0.2, 1)",
    reset: true,
    mobile: true
});

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

// Gallery marquee
sr.reveal(".gallery-marquee", { origin: "bottom", distance: "40px", delay: 100 });

// Works section
sr.reveal("#works .works-title", { origin: "bottom", distance: "50px" });
sr.reveal("#works .works-group", { origin: "bottom", interval: 140 });

// works subtitle
sr.reveal("#works .section-sub", {
    origin: "bottom",
    distance: "50px",
    interval: 40
});

// works items
sr.reveal("#works .work-item", { origin: "bottom", interval: 80 });

// partners logos
sr.reveal("#works .partners-grid img", { origin: "bottom", interval: 60 });

// Works decorations
sr.reveal("#works .works-deco", { origin: "right", delay: 140 });
sr.reveal("#works .deco-clapper", { origin: "left", delay: 140 });

// works-note
sr.reveal(".works-note", {
    origin: "bottom",
    distance: "40px",
    interval: 120
});

// Recruit
sr.reveal("#recruit .recruit__title", { origin: "bottom", distance: "50px" });
sr.reveal("#recruit .recruit-card--driver", { origin: "left", delay: 120 });
sr.reveal("#recruit .recruit-card--actor", { origin: "right", delay: 120 });

// Contact
sr.reveal("#contact .contact-card", { origin: "bottom" });
sr.reveal("#contact .contact-row", { origin: "bottom", interval: 120 });

// Footer
sr.reveal(".footer", { origin: "bottom", distance: "40px", delay: 120 });





// ============================
// ScrollReveal Animations (for job_car.html)
// ============================


// ============================
// Header
// ============================

sr.reveal(".header", {
    origin: "top",
    distance: "40px",
    delay: 80
});


// ============================
// Job Hero
// ============================

sr.reveal(".job-hero__title", {
    origin: "bottom",
    delay: 150
});

sr.reveal(".job-hero__sub", {
    origin: "bottom",
    delay: 260
});


// ============================
// Job Card Content
// ============================

// card firstly appear
sr.reveal(".job-card", {
    origin: "bottom",
    distance: "60px",
    delay: 200
});

// card content appear with interval
sr.reveal(".job-card__content p", {
    origin: "bottom",
    distance: "40px",
    interval: 340
});


// ============================
// car decoration
// ============================

sr.reveal(".job-car", {
    origin: "right",
    distance: "120px",
    duration: 1600,
    delay: 1800
});


// ============================
// Footer
// ============================

sr.reveal(".footer", {
    origin: "bottom",
    distance: "40px",
    delay: 400
});