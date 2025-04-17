class Book {
  title: string;
  author: string;
  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }
  getDetails() {
    return `${this.title} is written by ${this.author}`;
  }
}

class EBook extends Book {
  fileSize: string;
  constructor(title: string, author: string, fileSize: string) {
    super(title, author);
    this.fileSize = fileSize;
  }
  getDetails() {
    return `${super.getDetails()}, File Size = ${this.fileSize}`;
  }
}
