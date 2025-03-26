document.addEventListener("DOMContentLoaded", () => {
    console.log("Website Loaded");

    const downloadBtn = document.querySelector("#download");
    downloadBtn?.addEventListener("click", () => {
        alert("Downloading resume...");
    });
});
