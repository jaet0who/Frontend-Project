// document.addEventListener("DOMContentLoaded", () => {

//     let currentCard = null; // لتحديد الكتاب اللي هيتم تعديله

//     const popup = document.getElementById("bookPopup");
//     const popupTitle = document.getElementById("popupTitle");
//     const nameInput = document.getElementById("bookName");
//     const priceInput = document.getElementById("bookPrice");
//     const imgInput = document.getElementById("bookImg");
//     const saveBtn = document.getElementById("saveBtn");
//     const cancelBtn = document.getElementById("cancelBtn");

//     // ====== Eye Button ======
//     function handleEye(eye) {
//         eye.addEventListener("click", () => {
//             const card = eye.closest(".book");
//             card.classList.toggle("unavailable");
//             if (card.classList.contains("unavailable")) {
//                 eye.textContent = "🚫";
//                 card.style.opacity = "0.5";
//             } else {
//                 eye.textContent = "👁";
//                 card.style.opacity = "1";
//             }
//         });
//     }

//     // ====== Edit Button ======
//     function handleEdit(btn) {
//         btn.addEventListener("click", () => {
//             currentCard = btn.closest(".book");
//             popupTitle.textContent = "Edit Book";
//             nameInput.value = currentCard.querySelector(".name").textContent;
//             priceInput.value = currentCard.querySelector(".Price").textContent.replace("$", "");
//             imgInput.value = currentCard.querySelector("img").src;
//             popup.style.display = "flex";
//         });
//     }

//     // ====== Delete Button ======
//     function handleDelete(btn) {
//         btn.addEventListener("click", () => {
//             const card = btn.closest(".book");
//             card.remove();
//         });
//     }

//     // ====== Add Book Button ======
//     const addBtn = document.getElementById("addBookBtn");
//     addBtn.addEventListener("click", () => {
//         currentCard = null;
//         popupTitle.textContent = "Add New Book";
//         nameInput.value = "";
//         priceInput.value = "";
//         imgInput.value = "";
//         popup.style.display = "flex";
//     });

//     // ====== Cancel Button ======
//     cancelBtn.addEventListener("click", () => {
//         popup.style.display = "none";
//     });

//     // ====== Save Button ======
//     saveBtn.addEventListener("click", () => {
//         const name = nameInput.value.trim();
//         const price = priceInput.value.trim();
//         const img = imgInput.value.trim();

//         if (!name || !price || !img) {
//             alert("Please fill all fields!");
//             return;
//         }

//         if (currentCard) {
//             // تعديل كتاب موجود
//             currentCard.querySelector(".name").textContent = name;
//             currentCard.querySelector(".Price").textContent = "$" + price;
//             currentCard.querySelector("img").src = img;
//         } else {
//             // إضافة كتاب جديد
//             const card = document.createElement("div");
//             card.classList.add("book");
//             card.innerHTML = `
//                 <img src="${img}">
//                 <div class="name">${name}</div>
//                 <div class="Price">$${price}</div>
//                 <div class="book-buttons">
//                     <button class="edit-btn">Edit</button>
//                     <span class="eye-btn">👁</span>
//                     <button class="delete-btn">Delete</button>
//                 </div>
//             `;
//             handleEdit(card.querySelector(".edit-btn"));
//             handleEye(card.querySelector(".eye-btn"));
//             handleDelete(card.querySelector(".delete-btn"));
//             document.querySelector(".shelf .row").appendChild(card);
//         }

//         popup.style.display = "none";
//     });

//     // تفعيل الأحداث على كل العناصر الموجودة عند تحميل الصفحة
//     document.querySelectorAll(".edit-btn").forEach(handleEdit);
//     document.querySelectorAll(".eye-btn").forEach(handleEye);
//     document.querySelectorAll(".delete-btn").forEach(handleDelete);

// });
document.addEventListener("DOMContentLoaded", () => {

    let currentIndex = null; // رقم الكتاب داخل المصفوفة

    const popup = document.getElementById("bookPopup");
    const popupTitle = document.getElementById("popupTitle");
    const nameInput = document.getElementById("bookName");
    const priceInput = document.getElementById("bookPrice");
    const imgInput = document.getElementById("bookImg");
    const saveBtn = document.getElementById("saveBtn");
    const cancelBtn = document.getElementById("cancelBtn");

    const container = document.querySelector(".shelf .row");

    // =====================================
    // Render Books
    // =====================================
    function renderBooks() {
        container.innerHTML = "";
        books.forEach((book, index) => {
            const card = document.createElement("div");
            card.classList.add("book");

            card.innerHTML = `
                <img src="${book.img}">
                <div class="name">${book.name}</div>
                <div class="Price">$${book.price}</div>
                <div class="book-buttons">
                    <button class="edit-btn" data-index="${index}">Edit</button>
                    <span class="eye-btn" data-index="${index}">${book.hidden ? "🚫" : "👁"}</span>
                    <button class="delete-btn" data-index="${index}">Delete</button>
                </div>
            `;

            if (book.hidden) {
                card.style.opacity = "0.5";
                card.classList.add("unavailable");
            }

            container.appendChild(card);
        });

        attachEvents();  // نفعّل الأحداث من جديد
    }

    // =====================================
    // Events
    // =====================================

    function attachEvents() {
        document.querySelectorAll(".edit-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                currentIndex = btn.dataset.index;
                openEditPopup(currentIndex);
            });
        });

        document.querySelectorAll(".delete-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                const i = btn.dataset.index;
                books.splice(i, 1);
                saveBooks();
                renderBooks();
            });
        });

        document.querySelectorAll(".eye-btn").forEach(eye => {
            eye.addEventListener("click", () => {
                const i = eye.dataset.index;
                books[i].hidden = !books[i].hidden;
                saveBooks();
                renderBooks();
            });
        });
    }

    // =====================================
    // Edit Popup
    // =====================================
    function openEditPopup(i) {
        popupTitle.textContent = "Edit Book";
        nameInput.value = books[i].name;
        priceInput.value = books[i].price;
        imgInput.value = books[i].img;
        popup.style.display = "flex";
    }

    // =====================================
    // Add New Book
    // =====================================
    document.getElementById("addBookBtn").addEventListener("click", () => {
        popupTitle.textContent = "Add New Book";
        currentIndex = null;
        nameInput.value = "";
        priceInput.value = "";
        imgInput.value = "";
        popup.style.display = "flex";
    });

    cancelBtn.addEventListener("click", () => {
        popup.style.display = "none";
    });

    saveBtn.addEventListener("click", () => {
        const name = nameInput.value.trim();
        const price = priceInput.value.trim();
        const img = imgInput.value.trim();

        if (!name || !price || !img) {
            alert("Please fill all fields!");
            return;
        }

        if (currentIndex === null) {
            // إضافة كتاب جديد
            books.push({
                name,
                price,
                img,
                hidden: false
            });
        } else {
            // تعديل كتاب موجود
            books[currentIndex].name = name;
            books[currentIndex].price = price;
            books[currentIndex].img = img;
        }

        saveBooks();
        popup.style.display = "none";
        renderBooks();
    });

    // أول مرة تحميل الصفحة
    renderBooks();
});
