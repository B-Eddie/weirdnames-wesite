document.addEventListener("DOMContentLoaded", () => {
    const text = document.querySelector(".sec-text");

    if (!text) {
        console.error("Element with class 'sec-text' not found.");
        return;
    }

    const textLoad = () => {
        setTimeout(() => {
            text.textContent = "Developer";
        }, 0);
        setTimeout(() => {
            text.textContent = "Student";
        }, 2000);
        setTimeout(() => {
            text.textContent = "Open Source Contributor";
        }, 4000);
        setTimeout(() => {
            text.textContent = "Learner";
        }, 6000);
    }

    textLoad();
    setInterval(textLoad, 8000);
});
