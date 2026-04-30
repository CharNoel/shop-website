// Mobile menu toggle
const menuBtn = document.getElementById("menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
});

 function searchSite() {
    let input = document.getElementById("searchInput").value.toLowerCase();

    if (input.includes("home")) {
        window.location.href = "index.html";
    }
    else if (input.includes("about")) {
        window.location.href = "about.html";
    }
    else if (input.includes("booking") || input.includes("book")) {
        window.location.href = "booking.html";
    }
    else if (input.includes("gallery") || input.includes("photos")) {
        window.location.href = "gallery.html";
    }
    else if (input.includes("contact")) {
        window.location.href = "contact.html";
    }
    else {
        alert("No results found.");
    }
}

document.addEventListener("keydown", function(event) {
    const nav = document.querySelector("nav");
     
    // ESC closes mobile menu
    if (event.key === "Escape") {
        nav.classList.remove("active");
    }

    // Press M to open menu quickly
    if (event.key.toLowerCase() === "m") {
        nav.classList.toggle("active");
    }

});
