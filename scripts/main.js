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
function addBooksToPage() {
    myLibrary.forEach(function (book) {
        const singleBook = document.createElement('div');
        singleBook.setAttribute('style', 'white-space: pre;');
        singleBook.textContent =  book.title + "\r\n";
        singleBook.textContent += "By: " + book.author + "\r\n";
        singleBook.textContent += "Number of pages: " +book.pages + "\r\n";
        singleBook.classList.add((book.isRead == 'Read' ? 'books' : 'books-unread'));

        /* add delete button */
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add('delete-button');

        /* add a status button */
        const statusBtn = document.createElement('button');
        statusBtn.textContent = book.isRead;
        statusBtn.classList.add('status-button');

        /* create data attributes that saves index of current book so we can delete and update it later */
        deleteBtn.setAttribute('data-index', myLibrary.indexOf(book));
        statusBtn.setAttribute('data-status', myLibrary.indexOf(book));

        singleBook.appendChild(statusBtn); // add status button to book
        singleBook.appendChild(deleteBtn); // add delete button to book
        bookContainer.appendChild(singleBook); // add book to the container

        console.log(localStorage);
    });
}

// removes all existing books in the display
function removeAllBooks(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// remove a book object in the array
function removeBookInArray(index) {
    myLibrary.splice(index, 1);
}

// toggle read status
function toggleStatus(index) {
    myLibrary[index].isRead = (myLibrary[index].isRead == "Read" ? 'Unread' : 'Read');
}

// add book to library on button click
const addBookBtn = document.querySelector('#submit-book');
addBookBtn.addEventListener('click', function () {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let status = document.getElementById("status-input").value;

    if (title && author && pages && status) {
        addBookToLibrary(title, author, pages, status);
        myLibrary.reverse();
        removeAllBooks(bookContainer);   // remove all books in the node
        addBooksToPage();                // re-display all books
    }
    else {
        alert("Must provide an input for all fields!");
    }
});

// delete book on button click
bookContainer.addEventListener('click', function(e) {
    let bookToDelete = e.target.getAttribute('data-index');
    /* delete book only if we are clicking the 'delete button' */
    if (e.target.classList == 'delete-button') {  
        removeBookInArray(bookToDelete);          // remove the book we want to delete in the array
        removeAllBooks(bookContainer);            // remove all books in the node
        addBooksToPage();                         // re-display all books
    }
});

// update read status on button click
bookContainer.addEventListener('click', function(e) {
    let bookToUpdate = e.target.getAttribute('data-status');
    if (e.target.classList == 'status-button') {  
        toggleStatus(bookToUpdate);
        removeAllBooks(bookContainer);            // remove all books in the node
        addBooksToPage();                         // re-display all books
    }
});

