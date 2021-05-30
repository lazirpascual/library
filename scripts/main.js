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

// functions that adds each book to book-container
const bookContainer = document.querySelector('#book-location');
function addBook () {
    /* add last added item from array to display */
    const lastItem = myLibrary.slice(-1)[0]; // get the value of last item in array
    const singleBook = document.createElement('div');
    singleBook.setAttribute('style', 'white-space: pre;');
    singleBook.textContent =  lastItem.title + "\r\n";
    singleBook.textContent += "By: " + lastItem.author + "\r\n";
    singleBook.textContent += "Number of pages: " +lastItem.pages + "\r\n";
    singleBook.classList.add('books');
    /* add delete button to book */
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.style.height = '40px';
    deleteBtn.style.backgroundColor = 'lightpink';
    deleteBtn.style.borderRadius = '5px';
    
    singleBook.appendChild(deleteBtn);
    bookContainer.appendChild(singleBook);
}

// add book to library on button click
const addBookBtn = document.querySelector('#submit-book');
addBookBtn.addEventListener('click', function () {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    addBookToLibrary(title, author, pages, "read");
    addBook();
});

//addBookToLibrary("A Game of Thrones", "George R. R. Martin", 694, "read");
//addBookToLibrary("Lost", "Mark", 550, "not read");
//addBook();
// const bookContainer = document.querySelector('#book-location');
// function addBookTest() {
//     myLibrary.forEach(function (book) {
//         const singleBook = document.createElement('div');
//         singleBook.setAttribute('style', 'white-space: pre;');
//         singleBook.textContent =  book.title + "\r\n";
//         singleBook.textContent += "By: " + book.author + "\r\n";
//         singleBook.textContent += "Number of pages: " +book.pages + "\r\n";
//         singleBook.classList.add('books');
//         bookContainer.appendChild(singleBook);
//     });
// }