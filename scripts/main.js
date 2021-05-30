const bookContainer = document.querySelector('#book-location');
let myLibrary = [];

// constructor for the Book object
function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

// function that creates book objects and stores it in the myLibrary array
function addBookToLibrary(title, author, pages, isRead) {
    let newBook = new Book(title, author, pages, isRead);
    myLibrary.push(newBook);
}

// display all current books
function addBookToPage() {
    myLibrary.forEach(function (book) {
        const singleBook = document.createElement('div');
        singleBook.setAttribute('style', 'white-space: pre;');
        singleBook.textContent =  book.title + "\r\n";
        singleBook.textContent += "By: " + book.author + "\r\n";
        singleBook.textContent += "Number of pages: " +book.pages + "\r\n";
        singleBook.classList.add('books');
        bookContainer.appendChild(singleBook);

        /* add delete button to book */
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add('delete-button');

        /* create data attribute that saves index of current book so we can delete it later */
        deleteBtn.setAttribute('data-index', myLibrary.indexOf(book));

        singleBook.appendChild(deleteBtn);
        bookContainer.appendChild(singleBook);
    });
}

// removes all existing books in the display
function removeAllBooks(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

//remove a book object in the array
function removeBookInArray(index) {
    myLibrary.splice(index, 1);
}

// add book to library on button click
const addBookBtn = document.querySelector('#submit-book');
addBookBtn.addEventListener('click', function () {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    addBookToLibrary(title, author, pages, "read");
    removeAllBooks(bookContainer);  // remove all books in the node
    addBookToPage();  // re-display all books
});

// delete book on button click
bookContainer.addEventListener('click', function(e) {
    let bookToDelete = e.target.getAttribute('data-index');
    removeBookInArray(bookToDelete);    // remove the book we want to delete in the array
    removeAllBooks(bookContainer);      // remove all books in the node
    addBookToPage();    // re-display all books
});

