document.addEventListener("scroll", function() {
    const footer = document.querySelector("footer");
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        footer.style.bottom = "0"; // Show footer
    } else {
        footer.style.bottom = "-50px"; // Hide footer
    }
});
