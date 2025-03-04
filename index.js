document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".explore-link").addEventListener("click", function(event) {
        event.preventDefault(); 

        const container = document.getElementById("container");

        container.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".about1").addEventListener("click", function(event) {
        event.preventDefault(); 

        const container = document.getElementById("ks");

        container.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    });
});