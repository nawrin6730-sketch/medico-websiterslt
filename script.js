
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("actionBtn");
    if (btn) {
        btn.addEventListener("click", () => {
            alert("Button clicked! JS file is working correctly.");
        });
    }
});
