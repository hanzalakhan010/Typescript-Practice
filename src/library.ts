class Book {
  title: string;
  author: string;
  ISBN: string;
  frequency: number;
  constructor(title: string, author: string, ISBN: string, frequency: number) {
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
  fileSize?: string;
  constructor(title: string, author: string, ISBN: string, fileSize?: string) {
    super(title, author, ISBN, 0);
    this.fileSize = fileSize;
  }
  getDetails() {
    return `${super.getDetails()}, File Size = ${this.fileSize}`;
  }
}

class Library {
  private books: (Book & EBook)[];
  private selectedBooks: (Book & EBook)[];
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
  addBook(book: Book | EBook) {
    this.books.push(book);
    this.renderBooks();
    this.saveState();
  }
  removeBook(ISBN: string) {
    this.books = this.books.filter((book) => book.ISBN != ISBN);
    this.selectedBooks = this.books;
    console.log(this.books)
    this.saveState();
    this.renderBooks();
  }
  findBook(title: string) {
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
      this.selectedBooks.forEach((book: Book & EBook) => {
        tbody.insertAdjacentHTML(
          "beforeend",
          `
          <tr>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.ISBN}</td>
            <td>${book.frequency ? book.frequency : "N/A"}</td>
            <td>${book.fileSize ? book.fileSize : "N/A"}</td>
            <td><button>Edit</button></td>
            <td><button onClick = 'library.removeBook("${
              book.ISBN
            }")'>Delete</button></td>
          </tr>
          `
        );
      });
    }
  }
}

var library = new Library();
library.loadBooks();
library.getBookList();

(document.getElementById("addBookForm") as HTMLFormElement).addEventListener(
  "submit",
  (event) => {
    event.preventDefault();
    let form = event.target as HTMLFormElement;
    let toggleButton = document.getElementById(
      "toggleFormBtn"
    ) as HTMLButtonElement;
    let title = (form.elements.namedItem("title") as HTMLInputElement)?.value;
    let author = (form.elements.namedItem("author") as HTMLInputElement)?.value;
    let ISBN = (form.elements.namedItem("isbn") as HTMLInputElement)?.value;
    let frequency = (form.elements.namedItem("frequency") as HTMLInputElement)
      ?.value;
    let fileSize = (form.elements.namedItem("fileSize") as HTMLInputElement)
      ?.value;
    let isEbook = (form.elements.namedItem("isEbook") as HTMLInputElement)
      ?.checked;
    // if (titl)
    if (isEbook) {
      let newEbook = new EBook(title, author, ISBN, fileSize);
      library.addBook(newEbook);
    } else {
      let newBook = new Book(title, author, ISBN, parseInt(frequency));
      library.addBook(newBook);
    }
    form.reset();
    toggleButton.click();
  }
);
