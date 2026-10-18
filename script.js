
// ==============================
// MOBILE NAVIGATION
// ==============================

const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

menuToggle.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close mobile menu when a navigation link is clicked.

navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navigation.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});

// ==============================
// AUTOMATIC COPYRIGHT YEAR
// ==============================

const yearElement = document.getElementById("year");

yearElement.textContent = new Date().getFullYear();

// ==============================
// BACK TO TOP BUTTON
// ==============================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        backToTop.classList.add("visible");
    } else {
        backToTop.classList.remove("visible");
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// ==============================
// CLOSE MOBILE MENU ON RESIZE
// ==============================

window.addEventListener("resize", () => {
    if (window.innerWidth > 800) {
        navigation.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    }
});

// ==============================
// REVEAL SECTIONS ON SCROLL
// ==============================

const revealElements = document.querySelectorAll(
    ".section-heading, " +
    ".about-copy, " +
    ".about-highlight, " +
    ".timeline-item, " +
    ".experience-card, " +
    ".skill-card, " +
    ".project-card, " +
    ".interest-list span, " +
    ".contact-box"
);

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
        (entries, currentObserver) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("revealed");

                    currentObserver.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach((element) => {
        element.classList.add("reveal");
        observer.observe(element);
    });

} else {

    revealElements.forEach((element) => {
        element.classList.add("revealed");
    });

}

console.log("Divij Rana Portfolio Loaded Successfully.");
