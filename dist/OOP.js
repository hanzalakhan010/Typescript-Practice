"use strict";
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    getDetails() {
        return `${this.title} is written by ${this.author}`;
    }
}
class EBook extends Book {
    constructor(title, author, fileSize) {
        super(title, author);
        this.fileSize = fileSize;
    }
    getDetails() {
        return `${super.getDetails()}, File Size = ${this.fileSize}`;
    }
}
class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    removeBook(title) {
        this.books.filter((book) => book.title != title);
    }
    findBook(title) {
        return this.books.find((book) => book.title == title);
    }
    getBookList() {
        return this.books;
    }
}
