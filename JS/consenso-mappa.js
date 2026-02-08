document.addEventListener("DOMContentLoaded", () => {
    const consent = localStorage.getItem("mapsConsent");
    const consentBox = document.getElementById("map-consent");
    const map = document.getElementById("map-container");
    const iframe =  map.querySelector("iframe");

    function showMap() {
        consentBox.style.display = "none";
        map.style.display = "block";

        const src = iframe.src;
        iframe.src = "";
        iframe.src = src;
    }

    if (consent === "accepted") {
        showMap();
    }

    document.getElementById("accept-maps").addEventListener("click", () => {
        localStorage.setItem("mapsConsent", "accepted");
        showMap();
    });
});