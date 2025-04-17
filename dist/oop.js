class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
  toString() {
    // retrun
  }
  speak() {
    console.log(`${this.name} says ${this.sound}`);
  }
}

// let dog = new Animal("Dog", "Woof");
// dog.speak();
// console.log(dog);

// let cat = new Animal("Cat", "meow");
// cat.speak();

class Book {
  constructor(title, atuhor) {
    this.title = title;
    this.atuhor = atuhor;
  }
  getDetails() {
    return `this ${this.title} is wrritten by ${this.atuhor}`;
  }
}

class Library {
  constructor() {
    this.books = [];
  }
  addBook(book) {
    this.books.push(book)
  }

}



class Ebook extends Book {
  constructor(title, atuhor, fileSize) {
    super(title, atuhor);
    this.fileSize = fileSize;
  }
  getDetails() {
    return `${super.getDetails()}, Filesize:${this.fileSize}`;
  }
}

// let b1 = new Book('Book1','Hanzala')
// console.log(b1.getDetails())
// let b2 = new Book('Book2','Hammad')
// console.log(b2.getDetails())

let eb1 = new Ebook("Ebook1", "Hanzaa", "100kb");

console.log(eb1.getDetails());
