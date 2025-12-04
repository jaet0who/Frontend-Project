/* -------------------------------------------
   LOAD CART
------------------------------------------- */
function loadCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const container = document.getElementById("cartContainer");
    const totalBox = document.getElementById("total");

    container.innerHTML = "";
    let totalPrice = 0;

    cart.forEach((item, index) => {
        if (item.type === "buy") totalPrice += item.price;

        container.innerHTML += `
            <div class="cart-item">
                <img src="${item.img}">
                <div class="info">
                    <h3>${item.name}</h3>
                    <p>Type: <b>${item.type}</b></p>
                    ${item.type === "buy" ? `<p>Price: ${item.price} EGP</p>` : ""}
                </div>
                <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
            </div>
        `;
    });

    totalBox.innerHTML = `Total Price: ${totalPrice} EGP`;

    updateCartVisibility();
}

/* -------------------------------------------
   REMOVE ITEM
------------------------------------------- */
function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));

    loadCart();
}

/* -------------------------------------------
   CLEAR CART
------------------------------------------- */
document.getElementById("clearCart").addEventListener("click", () => {
    localStorage.removeItem("cart");
    loadCart();
});

/* -------------------------------------------
   SHOW/HIDE BUTTONS + TOTAL
------------------------------------------- */
function updateCartVisibility() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const checkoutBtn = document.getElementById("checkoutBtn");
    const clearCartBtn = document.getElementById("clearCart");
    const emptyMessage = document.getElementById("emptyMessage");
    const totalBox = document.getElementById("total");

    if (cart.length === 0) {
        checkoutBtn.style.display = "none";
        clearCartBtn.style.display = "none";
        totalBox.style.display = "none";
        emptyMessage.innerHTML = "Your cart is empty 🛒";
    } else {
        checkoutBtn.style.display = "block";
        clearCartBtn.style.display = "block";
        totalBox.style.display = "block";
        emptyMessage.innerHTML = "";
    }
}

/* -------------------------------------------
   PAYMENT METHOD SCREENS
------------------------------------------- */
function selectCard() {
    showPaymentScreen("cardForm");
}

function selectWallet() {
    showPaymentScreen("walletForm");
}

function selectCash() {
    showPaymentScreen("cashForm");
}

function backToOptions() {
    document.getElementById("paymentOptions").style.display = "block";
    document.getElementById("cardForm").style.display = "none";
    document.getElementById("walletForm").style.display = "none";
    document.getElementById("cashForm").style.display = "none";
}

// Helper function to switch screens
function showPaymentScreen(screenId) {
    document.getElementById("paymentOptions").style.display = "none";
    document.getElementById("cardForm").style.display = "none";
    document.getElementById("walletForm").style.display = "none";
    document.getElementById("cashForm").style.display = "none";

    document.getElementById(screenId).style.display = "block";
}
function cardPayNow() {
    const name = document.getElementById("cardName").value.trim();
    const number = document.getElementById("cardNumber").value.trim();
    const expiry = document.getElementById("cardExpiry").value.trim();
    const cvv = document.getElementById("cardCVV").value.trim();

    if (!name || !number || !expiry || !cvv) {
        alert("Please fill all card details.");
        return;
    }

    alert("Card Payment Successful!");

    // Clear inputs
    document.getElementById("cardName").value = "";
    document.getElementById("cardNumber").value = "";
    document.getElementById("cardExpiry").value = "";
    document.getElementById("cardCVV").value = "";

    // Clear cart
    localStorage.removeItem("cart");

    // Refresh UI
    loadCart();

    // Close modal
    document.getElementById("paymentModal").style.display = "none";
}

function walletPayNow() {
    const provider = document.getElementById("walletProvider").value.trim();
    const phone = document.getElementById("walletPhone").value.trim();

    if (!provider || !phone) {
        alert("Please fill all wallet details.");
        return;
    }

    alert("Wallet Payment Successful!");

    // Clear inputs
    document.getElementById("walletProvider").value = "";
    document.getElementById("walletPhone").value = "";

    // Clear cart
    localStorage.removeItem("cart");

    // Refresh UI
    loadCart();

    // Close modal
    document.getElementById("paymentModal").style.display = "none";
}
function cashConfirm() {
    alert("Order confirmed! Pay on delivery.");

    // Clear cart
    localStorage.removeItem("cart");

    // Refresh UI
    loadCart();

    // Close modal
    document.getElementById("paymentModal").style.display = "none";
}
function checkLoginStatusForCheckout() {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const checkoutBtn = document.getElementById("checkoutBtn");

    if (isLoggedIn !== "true") {

        // Make the button look disabled but still clickable
        checkoutBtn.style.opacity = "0.5";
        checkoutBtn.style.cursor = "not-allowed";

        // Override click behavior
        checkoutBtn.onclick = function () {
            alert("Please login first to complete your order.");
            window.location.href = "signin.html";
        };

    } else {

        // Restore normal button look
        checkoutBtn.style.opacity = "1";
        checkoutBtn.style.cursor = "pointer";

        // Open payment modal
        checkoutBtn.onclick = function () {
            document.getElementById("paymentModal").style.display = "flex";
        };
    }
}



/* -------------------------------------------
   INITIAL LOAD
------------------------------------------- */
loadCart();
checkLoginStatusForCheckout(); 