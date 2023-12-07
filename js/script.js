const cardContainer = document.querySelector('.container')

// ---------------------modal js-------------------

const titleText = document.querySelector('#title-text');
const authorText = document.querySelector('#author-text');
const genreText = document.querySelector('#genre-text');
const noOfPages = document.querySelector('#page-no');
const readStatus = document.querySelector('#read-status');
const submitButton = document.querySelector('#submit-btn');

submitButton.addEventListener('click',() => {
    event.preventDefault();
    if(!validityCheck() )
    {
       
        addBook(titleText.value,authorText.value,genreText.value,noOfPages.value)

        addBookToLibrary(myLibrary[myLibrary.length -1]);
        fieldReset();
        dialog.close();
    }

    else {
        alert('Fill the form please ');
    }
   
})
// read_status
const myLibrary = [];
function Book(title,author,pages,genre) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.genre = genre;
    // this.read_status = read_status;
}

function addBook (title,author,pages,genre) {
    const newBook = new Book(title,author,pages,genre);
    myLibrary.push(newBook);
}

// addBook('Harry Potter','J.k Rowling',456,'fantasy',true);
// addBook('Harry Potter','J.k Rowling',456,'fantasy',true);
// addBook('Harry Potter','J.k Rowling',456,'fantasy',true);
// addBook('Harry Potter','J.k Rowling',456,'fantasy',true);
// addBook('helloWorld','us',44,'mystery',false);
// addBook('java','not able',904,'tragedy',true);
// console.table(myLibrary);

function addBookToLibrary(book, index) {
    const card = document.createElement('div');
    card.classList.add('card')
    const title = document.createElement('h3');
    const author = document.createElement('p');
    const  pages = document.createElement('p');
    const genre = document.createElement('p');
    const removeButton = document.createElement('button');
    removeButton.textContent = "Remove Book"
    removeButton.classList.add('remove')
    removeButton.classList.add('btn')
    
    removeButton.addEventListener('click',() => {
        removeBook(index);
        updateLibraryDisplay();
    })
    // const read_status = document.createElement('p');


    title.textContent = book.title;
    author.textContent = book.author;
    genre.textContent = book.genre;
    pages.textContent = book.pages;
    // read_status.textContent = `${book.read_status ? 'Read' : 'Not Read' }`;

    card.appendChild(title)
    card.appendChild(author)
    card.appendChild(genre)
    card.appendChild(pages)
    // card.appendChild(read_status)
    card.appendChild(removeButton)

    cardContainer.appendChild(card);
    

}
function validityCheck () {
    if (titleText.value === "" ) {
        alert("Title can't be empty")
        return true;
    }
    else if (authorText.value === "" ) {
        alert("Name of Author can't be empty")
        return true;
    }
    if (genreText.value === "" ) {
        alert("Genre can't be empty")
        return true;
    }
    if (noOfPages.value === "" ) {
        alert("Number of Pages can't be empty")
        return true;
    }
    else return false;
}
function fieldReset () {
    titleText.value = "";
    authorText.value = "";
    genreText.value = "";
    noOfPages.value = "";
}

function removeBook(index) {
    myLibrary.splice(index, 1);
}

function updateLibraryDisplay() {
    //clear the current display
    cardContainer.innerHTML = '';

    //re render the updated display
    myLibrary.forEach((book,index) => {
        addBookToLibrary(book,index);
    })
}






// -----------------modal js-----------------------
const addBooks = document.querySelector('.add-btn')
const wrapper = document.querySelector('.wrapper')
const dialog = document.querySelector('#add-details');
const cancelButton = document.querySelector('.cancel-btn');
// dialog.showModal();

addBooks.addEventListener('click',() => dialog.showModal());
cancelButton.addEventListener('click',() =>  dialog.close());
cancelButton.addEventListener('click',() =>  dialog.close());
dialog.addEventListener('click',(e) => { 
    if (!wrapper.contains(e.target))
    {
        dialog.close()
    }});