function Book (title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;

}

Book.prototype.info = function() {
    return this.title + " by " + this.author + ", " + this.pages + " pages, " + this.isRead;
}

const bookOne = new Book("Name of the Wind", "Patrick Rothfus", 491, "not read yet");
console.log(bookOne.info());