const menuToggle = document.querySelector('.menu-toggle');
const menuOverlay = document.querySelector('.menu-overlay');

const langButton = document.querySelector(".current-lang");
const langDropdown = document.querySelector(".language-dropdown");

let langOpen = false;

menuToggle.addEventListener("click", (e) => {
    menuOverlay.classList.toggle("show");
    menuToggle.classList.toggle("open");
    e.stopPropagation();

    langDropdown.classList.remove("show");
    langButton.classList.remove("active");
    langOpen = false;
});

document.addEventListener("click", (e) => {
    if (menuOverlay.classList.contains("show")) {
        if (!menuOverlay.contains(e.target) && !menuToggle.contains(e.target)) {
            menuOverlay.classList.remove("show");
            menuToggle.classList.remove("open");
            langDropdown.classList.remove("show");
            langButton.classList.remove("active");
            langOpen = false;
        }
    }
});

menuOverlay.addEventListener("click", (e) => {
    e.stopPropagation();
});

langButton.addEventListener("click", (e) => {
    e.stopPropagation();

    if (langOpen) {
        langDropdown.classList.remove("show");
        langButton.classList.remove("active");
        langOpen = false;
    } else {
        langDropdown.classList.add("show");
        langButton.classList.add("active");
        langOpen = true;
    }
});

langDropdown.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        langDropdown.classList.remove("show");
        langButton.classList.remove("active");
        langOpen = false;
    });
});

menuOverlay.addEventListener("click", (e) => {
    if (!e.target.closest(".current-lang") && !e.target.closest(".language-dropdown")) {
        langDropdown.classList.remove("show");
        langButton.classList.remove("active");
        langOpen = false;
    }
});

