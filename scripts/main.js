let myLibrary = [];

// constructor for the Book object
function Book (title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

// function that creates book objects and stores it in the myLibrary array
function addBookToLibrary (title, author, pages, isRead) {
    let newBook = new Book(title, author, pages, isRead);
    myLibrary.push(newBook);
}

Book.prototype.info = () => this.title + " by " + this.author + ", " + this.pages + " pages, " + this.isRead;


addBookToLibrary("IT", "Stephen", 500, "read");
addBookToLibrary("Lost", "Mark", 550, "not read");