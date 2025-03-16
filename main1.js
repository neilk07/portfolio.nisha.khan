document.addEventListener("DOMContentLoaded", function () {
    /*==================== PORTFOLIO SWIPER ====================*/
    let portfolioSwiper = new Swiper(".portfolio__container", {
        loop: true,
        grabCursor: true,
        spaceBetween: 30,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        slidesPerView: 1,
        breakpoints: {
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
        },
    });

    /*==================== TESTIMONIAL SWIPER ====================*/
    let testimonialSwiper = new Swiper(".testimonial__container", {
        loop: true,
        grabCursor: true,
        spaceBetween: 30,
        navigation: {
            nextEl: ".swiper-testimonial-next",
            prevEl: ".swiper-testimonial-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
    });

    /*==================== SMOOTH SCROLL FOR NAVIGATION ====================*/
    document.querySelectorAll('.nav__menu a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });
});

/*==================== MENU SHOW & HIDE ====================*/
const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close");

if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
}

if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}

const navLink = document.querySelectorAll(".nav__link");
navLink.forEach(n => n.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
}));

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName("skills__content"),
    skillsHeader = document.querySelectorAll(".skills__header");

skillsHeader.forEach(el => {
    el.addEventListener("click", function () {
        let itemClass = this.parentNode.className;
        for (let i = 0; i < skillsContent.length; i++) {
            skillsContent[i].className = "skills__content skills__close";
        }
        if (itemClass === "skills__content skills__close") {
            this.parentNode.className = "skills__content skills__open";
        }
    });
});

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll("[data-target]"),
    tabContents = document.querySelectorAll("[data-content]");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target);
        tabContents.forEach(tc => tc.classList.remove("qualification__active"));
        target.classList.add("qualification__active");
        tabs.forEach(t => t.classList.remove("qualification__active"));
        tab.classList.add("qualification__active");
    });
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
    const scrollY = window.scrollY;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        let sectionId = current.getAttribute("id");
        const link = document.querySelector(`.nav__menu a[href*="${sectionId}"]`);
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            link.classList.add("active-link");
        } else {
            link.classList.remove("active-link");
        }
    });
}
window.addEventListener("scroll", scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const header = document.getElementById("header");
    if (this.scrollY >= 50) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
    const scrollUp = document.getElementById("scroll-up");
    if (this.scrollY >= 200) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*==================== SMOOTH SCROLL TO TOP ====================*/
document.getElementById("scroll-up").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

themeButton.classList.toggle(iconTheme, selectedIcon === "uil-moon");

themeButton.addEventListener("click", () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    localStorage.setItem("selected-theme", document.body.classList.contains(darkTheme) ? "dark" : "light");
    localStorage.setItem("selected-icon", themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun");
});
