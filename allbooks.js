let books = JSON.parse(localStorage.getItem("books")) ||
    [
        { name: "Harry Potter", price: 450, img: "BOOK_1.jpg", hidden: false },
        { name: "Surrounded by Idiots", price: 300, img: "BOOK2.jpg", hidden: false },
        { name: "Atomic Habits", price: 170, img: "book3.jpg", hidden: false },
        { name: "الدحيح", price: 200, img: "book4.jpg", hidden: false },
        { name: "فن اللامبالاة", price: 170, img: "book5.jpg", hidden: false },
        { name: "نظرية الفستق", price: 170, img: "book6.jpg", hidden: false },
        { name: "Who Moved My Cheese", price: 170, img: "book7.jpg", hidden: false },
        { name: "Peter Pan", price: 180, img: "peterPan.jpg", hidden: false },
        { name: "عزيزي المستبد", price: 190, img: "img11.webp", hidden: false },
        { name: "201 Great Ideas", price: 250, img: "img10.jpg", hidden: false },
        { name: "Your Next Five Moves", price: 250, img: "im9.jpg", hidden: false }
    ];

function saveBooks() {
    localStorage.setItem("books", JSON.stringify(books));
}
