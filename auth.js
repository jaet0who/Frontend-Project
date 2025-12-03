
document.addEventListener("DOMContentLoaded", () => {
    const loginBtn = document.getElementById("Login-btn");
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    console.log("Login status:", isLoggedIn);

    if (isLoggedIn === "true") {
        loginBtn.textContent = "Logout";
        loginBtn.onclick = function () {
            localStorage.removeItem("isLoggedIn");
            localStorage.removeItem("userRole");
            window.location.href = "index.html";
        };
    } else {
        loginBtn.textContent = "Login";
        loginBtn.onclick = function () {
            window.location.href = "signin.html";
        };
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const role = localStorage.getItem("userRole");
    if (role === "admin") {
        document.getElementById("cart-link").style.display = "none";
        document.getElementById("feedback-link").style.display = "none";
    }
});
function setRole(role) {
    localStorage.setItem("userRole", role);
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "index.html";
}
function goToBooks() {
    const role = localStorage.getItem("userRole");
    if (role === "admin") {
        window.location.href = "admin-Book.html";
    } else {
        window.location.href = "Offer.html";
    }
}