"use strict";
class Book {
    constructor(title, author, ISBN, frequency) {
        this.title = title;
        this.ISBN = ISBN;
        this.frequency = frequency;
        this.author = author;
    }
    getDetails() {
        return `${this.title} is written by ${this.author}`;
    }
}
class EBook extends Book {
    constructor(title, author, ISBN, fileSize) {
        super(title, author, ISBN, 0);
        this.fileSize = fileSize;
    }
    getDetails() {
        return `${super.getDetails()}, File Size = ${this.fileSize}`;
    }
}
class Library {
    constructor() {
        this.books = [];
        this.selectedBooks = [];
    }
    loadBooks() {
        let books = localStorage.getItem("books");
        if (books) {
            this.books = JSON.parse(books);
        }
    }
    addBook(book) {
        this.books.push(book);
        this.renderBooks();
        this.saveState();
    }
    removeBook(ISBN) {
        this.books = this.books.filter((book) => book.ISBN != ISBN);
        this.selectedBooks = this.books;
        console.log(this.books);
        this.saveState();
        this.renderBooks();
    }
    findBook(title) {
        let book = this.books.find((book) => book.title == title);
        if (book) {
            this.selectedBooks = [book];
            this.renderBooks();
        }
    }
    getBookList() {
        this.selectedBooks = this.books;
        this.renderBooks();
    }
    saveState() {
        localStorage.setItem("books", JSON.stringify(this.books));
    }
    renderBooks() {
        let tbody = document.getElementById("tbody");
        if (tbody) {
            this.selectedBooks.forEach((book) => {
                tbody.insertAdjacentHTML("beforeend", `
          <tr>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.ISBN}</td>
            <td>${book.frequency ? book.frequency : "N/A"}</td>
            <td>${book.fileSize ? book.fileSize : "N/A"}</td>
            <td><button>Edit</button></td>
            <td><button onClick = 'library.removeBook("${book.ISBN}")'>Delete</button></td>
          </tr>
          `);
            });
        }
    }
}
var library = new Library();
library.loadBooks();
library.getBookList();
document.getElementById("addBookForm").addEventListener("submit", (event) => {
    var _a, _b, _c, _d, _e, _f;
    event.preventDefault();
    let form = event.target;
    let toggleButton = document.getElementById("toggleFormBtn");
    let title = (_a = form.elements.namedItem("title")) === null || _a === void 0 ? void 0 : _a.value;
    let author = (_b = form.elements.namedItem("author")) === null || _b === void 0 ? void 0 : _b.value;
    let ISBN = (_c = form.elements.namedItem("isbn")) === null || _c === void 0 ? void 0 : _c.value;
    let frequency = (_d = form.elements.namedItem("frequency")) === null || _d === void 0 ? void 0 : _d.value;
    let fileSize = (_e = form.elements.namedItem("fileSize")) === null || _e === void 0 ? void 0 : _e.value;
    let isEbook = (_f = form.elements.namedItem("isEbook")) === null || _f === void 0 ? void 0 : _f.checked;
    // if (titl)
    if (isEbook) {
        let newEbook = new EBook(title, author, ISBN, fileSize);
        library.addBook(newEbook);
    }
    else {
        let newBook = new Book(title, author, ISBN, parseInt(frequency));
        library.addBook(newBook);
    }
    form.reset();
    toggleButton.click();
});
