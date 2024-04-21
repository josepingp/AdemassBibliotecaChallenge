const libros = [
    {
        "name": "La Odisea",
        "author": "Fyodor Dostoevsky",
        "ref": "00001"
    },
    {
        "name": "La Odisea",
        "author": "Mark Twain",
        "ref": "00002"
    },
    {
        "name": "La Odisea",
        "author": "J.K. Rowling",
        "ref": "00003"
    },
    {
        "name": "Cien años de soledad",
        "author": "Herman Melville",
        "ref": "00004"
    },
    {
        "name": "La Odisea",
        "author": "J.K. Rowling",
        "ref": "00005"
    },
    {
        "name": "Don Quijote de la Mancha",
        "author": "Jane Austen",
        "ref": "00006"
    },
    {
        "name": "1984",
        "author": "Jane Austen",
        "ref": "00007"
    },
    {
        "name": "El señor de los anillos",
        "author": "J.R.R. Tolkien",
        "ref": "00008"
    },
    {
        "name": "El señor de los anillos",
        "author": "Miguel de Cervantes",
        "ref": "00009"
    },
    {
        "name": "La Odisea",
        "author": "Homero",
        "ref": "00010"
    },
    {
        "name": "Cien años de soledad",
        "author": "J.K. Rowling",
        "ref": "00011"
    },
    {
        "name": "El señor de los anillos",
        "author": "J.K. Rowling",
        "ref": "00012"
    },
    {
        "name": "Orgullo y prejuicio",
        "author": "Homero",
        "ref": "00013"
    },
    {
        "name": "Moby Dick",
        "author": "Fyodor Dostoevsky",
        "ref": "00014"
    },
    {
        "name": "Don Quijote de la Mancha",
        "author": "Gabriel García Márquez",
        "ref": "00015"
    },
    {
        "name": "Don Quijote de la Mancha",
        "author": "Herman Melville",
        "ref": "00016"
    },
    {
        "name": "Las aventuras de Tom Sawyer",
        "author": "Homero",
        "ref": "00017"
    },
    {
        "name": "1984",
        "author": "Mark Twain",
        "ref": "00018"
    },
    {
        "name": "La Odisea",
        "author": "Jane Austen",
        "ref": "00019"
    },
    {
        "name": "Don Quijote de la Mancha",
        "author": "George Orwell",
        "ref": "00020"
    },
    {
        "name": "Cien años de soledad",
        "author": "George Orwell",
        "ref": "00021"
    },
    {
        "name": "Harry Potter",
        "author": "Gabriel García Márquez",
        "ref": "00022"
    },
    {
        "name": "Orgullo y prejuicio",
        "author": "Homero",
        "ref": "00023"
    },
    {
        "name": "Cien años de soledad",
        "author": "Herman Melville",
        "ref": "00024"
    },
    {
        "name": "Cien años de soledad",
        "author": "J.K. Rowling",
        "ref": "00025"
    },
    {
        "name": "El señor de los anillos",
        "author": "George Orwell",
        "ref": "00026"
    },
    {
        "name": "Orgullo y prejuicio",
        "author": "Homero",
        "ref": "00027"
    },
    {
        "name": "Don Quijote de la Mancha",
        "author": "George Orwell",
        "ref": "00028"
    },
    {
        "name": "Crimen y castigo",
        "author": "Jane Austen",
        "ref": "00029"
    },
    {
        "name": "El señor de los anillos",
        "author": "Homero",
        "ref": "00030"
    },
    {
        "name": "El señor de los anillos",
        "author": "J.R.R. Tolkien",
        "ref": "00031"
    },
    {
        "name": "Cien años de soledad",
        "author": "Miguel de Cervantes",
        "ref": "00032"
    },
    {
        "name": "Moby Dick",
        "author": "Miguel de Cervantes",
        "ref": "00033"
    },
    {
        "name": "Crimen y castigo",
        "author": "Jane Austen",
        "ref": "00034"
    },
    {
        "name": "Orgullo y prejuicio",
        "author": "Gabriel García Márquez",
        "ref": "00035"
    },
    {
        "name": "Moby Dick",
        "author": "Mark Twain",
        "ref": "00036"
    },
    {
        "name": "1984",
        "author": "Gabriel García Márquez",
        "ref": "00037"
    },
    {
        "name": "Moby Dick",
        "author": "Mark Twain",
        "ref": "00038"
    },
    {
        "name": "Las aventuras de Tom Sawyer",
        "author": "George Orwell",
        "ref": "00039"
    },
    {
        "name": "Las aventuras de Tom Sawyer",
        "author": "Miguel de Cervantes",
        "ref": "00040"
    },
    {
        "name": "Harry Potter",
        "author": "Jane Austen",
        "ref": "00041"
    },
    {
        "name": "La Odisea",
        "author": "Herman Melville",
        "ref": "00042"
    },
    {
        "name": "Don Quijote de la Mancha",
        "author": "Homero",
        "ref": "00043"
    },
    {
        "name": "Moby Dick",
        "author": "Homero",
        "ref": "00044"
    },
    {
        "name": "Cien años de soledad",
        "author": "J.K. Rowling",
        "ref": "00045"
    },
    {
        "name": "Harry Potter",
        "author": "Mark Twain",
        "ref": "00046"
    },
    {
        "name": "Don Quijote de la Mancha",
        "author": "Jane Austen",
        "ref": "00047"
    },
    {
        "name": "Orgullo y prejuicio",
        "author": "Herman Melville",
        "ref": "00048"
    },
    {
        "name": "1984",
        "author": "Homero",
        "ref": "00049"
    },
    {
        "name": "Moby Dick",
        "author": "Fyodor Dostoevsky",
        "ref": "00050"
    },
    {
        "name": "Don Quijote de la Mancha",
        "author": "Gabriel García Márquez",
        "ref": "00051"
    },
    {
        "name": "Las aventuras de Tom Sawyer",
        "author": "Miguel de Cervantes",
        "ref": "00052"
    },
    {
        "name": "Moby Dick",
        "author": "J.K. Rowling",
        "ref": "00053"
    },
    {
        "name": "Don Quijote de la Mancha",
        "author": "Herman Melville",
        "ref": "00054"
    },
    {
        "name": "Cien años de soledad",
        "author": "Homero",
        "ref": "00055"
    },
    {
        "name": "Cien años de soledad",
        "author": "Jane Austen",
        "ref": "00056"
    },
    {
        "name": "1984",
        "author": "Mark Twain",
        "ref": "00057"
    },
    {
        "name": "1984",
        "author": "J.K. Rowling",
        "ref": "00058"
    },
    {
        "name": "Orgullo y prejuicio",
        "author": "Miguel de Cervantes",
        "ref": "00059"
    },
    {
        "name": "Harry Potter",
        "author": "Fyodor Dostoevsky",
        "ref": "00060"
    },
    {
        "name": "Harry Potter",
        "author": "Homero",
        "ref": "00061"
    },
    {
        "name": "Orgullo y prejuicio",
        "author": "J.K. Rowling",
        "ref": "00062"
    },
    {
        "name": "Orgullo y prejuicio",
        "author": "Miguel de Cervantes",
        "ref": "00063"
    },
    {
        "name": "Moby Dick",
        "author": "Homero",
        "ref": "00064"
    },
    {
        "name": "Las aventuras de Tom Sawyer",
        "author": "Fyodor Dostoevsky",
        "ref": "00065"
    },
    {
        "name": "Orgullo y prejuicio",
        "author": "Miguel de Cervantes",
        "ref": "00066"
    },
    {
        "name": "Crimen y castigo",
        "author": "Gabriel García Márquez",
        "ref": "00067"
    },
    {
        "name": "Moby Dick",
        "author": "Mark Twain",
        "ref": "00068"
    },
    {
        "name": "Moby Dick",
        "author": "George Orwell",
        "ref": "00069"
    },
    {
        "name": "Don Quijote de la Mancha",
        "author": "Miguel de Cervantes",
        "ref": "00070"
    },
    {
        "name": "1984",
        "author": "J.K. Rowling",
        "ref": "00071"
    },
    {
        "name": "Moby Dick",
        "author": "Mark Twain",
        "ref": "00072"
    },
    {
        "name": "Cien años de soledad",
        "author": "J.K. Rowling",
        "ref": "00073"
    },
    {
        "name": "Orgullo y prejuicio",
        "author": "Mark Twain",
        "ref": "00074"
    },
    {
        "name": "Orgullo y prejuicio",
        "author": "Jane Austen",
        "ref": "00075"
    },
    {
        "name": "Crimen y castigo",
        "author": "Herman Melville",
        "ref": "00076"
    },
    {
        "name": "Moby Dick",
        "author": "Gabriel García Márquez",
        "ref": "00077"
    },
    {
        "name": "Don Quijote de la Mancha",
        "author": "Jane Austen",
        "ref": "00078"
    },
    {
        "name": "Moby Dick",
        "author": "J.K. Rowling",
        "ref": "00079"
    },
    {
        "name": "Las aventuras de Tom Sawyer",
        "author": "Fyodor Dostoevsky",
        "ref": "00080"
    },
    {
        "name": "Don Quijote de la Mancha",
        "author": "Jane Austen",
        "ref": "00081"
    },
    {
        "name": "Orgullo y prejuicio",
        "author": "Herman Melville",
        "ref": "00082"
    },
    {
        "name": "Moby Dick",
        "author": "Homero",
        "ref": "00083"
    },
    {
        "name": "1984",
        "author": "J.R.R. Tolkien",
        "ref": "00084"
    },
    {
        "name": "Cien años de soledad",
        "author": "George Orwell",
        "ref": "00085"
    },
    {
        "name": "1984",
        "author": "J.R.R. Tolkien",
        "ref": "00086"
    },
    {
        "name": "Las aventuras de Tom Sawyer",
        "author": "Gabriel García Márquez",
        "ref": "00087"
    },
    {
        "name": "La Odisea",
        "author": "Fyodor Dostoevsky",
        "ref": "00088"
    },
    {
        "name": "Las aventuras de Tom Sawyer",
        "author": "Fyodor Dostoevsky",
        "ref": "00089"
    },
    {
        "name": "El señor de los anillos",
        "author": "Miguel de Cervantes",
        "ref": "00090"
    },
    {
        "name": "Crimen y castigo",
        "author": "Herman Melville",
        "ref": "00091"
    },
    {
        "name": "La Odisea",
        "author": "George Orwell",
        "ref": "00092"
    },
    {
        "name": "1984",
        "author": "Miguel de Cervantes",
        "ref": "00093"
    },
    {
        "name": "Orgullo y prejuicio",
        "author": "Miguel de Cervantes",
        "ref": "00094"
    },
    {
        "name": "1984",
        "author": "J.K. Rowling",
        "ref": "00095"
    },
    {
        "name": "Don Quijote de la Mancha",
        "author": "Herman Melville",
        "ref": "00096"
    },
    {
        "name": "Don Quijote de la Mancha",
        "author": "Gabriel García Márquez",
        "ref": "00097"
    },
    {
        "name": "Moby Dick",
        "author": "Homero",
        "ref": "00098"
    },
    {
        "name": "La Odisea",
        "author": "Gabriel García Márquez",
        "ref": "00099"
    },
    {
        "name": "La Odisea",
        "author": "Mark Twain",
        "ref": "00100"
    }
]

let backgroundColor = 'tr-green';

document.addEventListener('DOMContentLoaded', function () {
    const table = document.getElementById('table-info');
    const searchInput = document.getElementById('search-input');
    const borrowBookBtn = document.getElementById('borrow');
    const returnBookBtn = document.getElementById('return');
    const cancelBtn = document.getElementById('cancel-btn');
    const addBook = document.getElementById('add-dialog-btn');
    const addBookcancelBtn = document.getElementById('add-book-cancel-btn');
    const dialog = document.getElementById('menu-dialog');
    const addBookDialog = document.getElementById('add-book-dialog');
    const addBookBtnDialog = document.getElementById('add-book-btn')
    const myBiblbioteca = new Biblioteca([], []);

    for (const libro of libros) {
        myBiblbioteca.addBook(libro.name, libro.author);
    }
    myBiblbioteca.showBooks(table)

    searchInput.addEventListener('change', () => {
        myBiblbioteca.showBooks(table)
    })

    borrowBookBtn.addEventListener('click', () => {
        const userInput = document.getElementById('user-input');
        const dataDialog = document.querySelectorAll('#menu-dialog p');
        const book = myBiblbioteca.bookList.filter( book => book.ref === parseInt(dataDialog[0].innerHTML.slice(4) ) )[0];
        
        console.log(book)

        myBiblbioteca.borrowBook(book, userInput.value);
        dialog.close();
        myBiblbioteca.showBooks(table);
        
        userInput.value = '';
    })
    
    returnBookBtn.addEventListener('click', () => {
        const dataDialog = document.querySelectorAll('#menu-dialog p');
        const book = myBiblbioteca.bookList.filter( book => book.ref === parseInt(dataDialog[0].innerHTML.slice(4) ))[0];
        
        myBiblbioteca.returnBook(book);
        dialog.close();
        myBiblbioteca.showBooks(table);
    })

    cancelBtn.addEventListener('click', () => dialog.close());
    
    addBookBtnDialog.addEventListener('click', () => addBookDialog.showModal())
    
    addBook.addEventListener('click', () =>{
        const bookName = document.getElementById('add-book-name');
        const bookAuthor = document.getElementById('add-book-author');

        if (bookName.value && bookAuthor.value) {
            myBiblbioteca.addBook(bookName.value, bookAuthor.value);
            myBiblbioteca.showBooks(table);
            addBookDialog.close();

            bookName.value = '';
            bookAuthor.value = '';
        }
    })
    
    addBookcancelBtn.addEventListener('click', () => addBookDialog.close());


})



class Biblioteca {
    constructor(bookList, usersList) {
        this.bookList = bookList;
        this.usesrs = usersList;
    }

    borrowBook(book, user) {
        book.user = user;
        book.outDate = new Date().toLocaleDateString('en-us', { year: "numeric", month: "short", day: "numeric" });
        book.inDate = new Date(new Date(book.outDate).getTime() + 8.64e+8).toLocaleDateString('en-us', { year: "numeric", month: "short", day: "numeric" });
        book.state = 'No Disponible';
    }

    returnBook(book) {
        book.user = '';
        book.outDate = '';
        book.inDate = '';
        book.state = 'Disponible';
    }

    filterBooks() {
        const filterSelector = document.getElementById('value-selector').value;
        const valueToFilter = document.getElementById('search-input').value;

        if (!valueToFilter) return this.bookList;
        else if (filterSelector === 'book-name' && valueToFilter) return this.bookList.filter(book => book.name.toLowerCase().includes(valueToFilter.toLowerCase()))
        else if (filterSelector === 'author' && valueToFilter) return this.bookList.filter(book => book.author.toLowerCase().includes(valueToFilter.toLowerCase()));
    }

    showBooks(table) {
        table.innerHTML = '';
        backgroundColor = 'tr-green';

        for (const book of this.filterBooks()) {
            table.appendChild(createTableRow(book));
        }

        addEvenListenerToRows(this.bookList);
    };

    addBook(nameOfBook, author) {
        let newBook = new Book(nameOfBook, author);
        newBook.ref = this.bookList.length + 1;
        newBook.user = '';
        newBook.outDate = '';
        newBook.inDate = '';
        newBook.state = 'Disponible';

        this.bookList.push(newBook);
    };
};

class Book {
    constructor(name, author) {
        this.name = name;
        this.author = author;
        this.ref = null;
    }
};



function changeBackground() {
    if (backgroundColor === 'tr-green') {
        backgroundColor = 'tr-pink';
        return backgroundColor;
    }
    else {
        backgroundColor = 'tr-green';
        return backgroundColor;
    }
}



function addEvenListenerToRows(bookList) {
    const rows = document.querySelectorAll('#table-info tr');

        for (const row of rows) {
            row.addEventListener('click', () => {
                const dialog = document.getElementById('menu-dialog');
                const dataDialog = document.querySelectorAll('#menu-dialog p');
                const book = bookList.filter(book => book.ref === parseInt(row.firstChild.innerHTML))[0];
                const userInput = document.getElementById('user-input');
                const borrowBookBtn = document.getElementById('borrow');
                const returnBookBtn = document.getElementById('return');

                dataDialog[0].innerHTML = 'Ref: ' + book.ref;
                dataDialog[1].innerHTML = 'Nombre: ' + book.name;
                dataDialog[2].innerHTML = 'Autor: ' + book.author;
                dataDialog[3].innerHTML = 'Estado: ' + book.state;
                dataDialog[4].innerHTML = 'Usuario: ' + book.user;
                dataDialog[5].innerHTML = 'Prestado a: ' + book.outDate;
                dataDialog[6].innerHTML = 'Fin de Prestamo: ' + book.inDate;

                if (book.user) {
                    borrowBookBtn.style.display = 'none';
                    returnBookBtn.style.display = 'block';
                    userInput.parentNode.style.display = 'none';
                    
                }
                else {
                    borrowBookBtn.style.display = "block";
                    userInput.parentNode.style.display = "flex";
                    returnBookBtn.style.display = "none";
                }
                dialog.showModal();
            })
        }
}



function createTableRow(book) {
    const row = document.createElement('tr');

    const bookRef = document.createElement('td');
    bookRef.classList.add('book-ref');
    bookRef.innerHTML = book.ref;

    const bookName = document.createElement('td');
    bookName.classList.add('book-name');
    bookName.innerHTML = book.name;

    const author = document.createElement('td');
    author.classList.add('author');
    author.innerHTML = book.author;

    const state = document.createElement('td');
    state.classList.add('state');
    state.innerHTML = book.state;

    const bookUser = document.createElement('td');
    bookUser.classList.add('user');
    bookUser.innerHTML = book.user;

    const outDate = document.createElement('td');
    outDate.classList.add('out-date');
    outDate.innerHTML = book.outDate;

    const inDate = document.createElement('td');
    inDate.classList.add('in-date');
    inDate.innerHTML = book.inDate;

    row.appendChild(bookRef)
    row.appendChild(bookName)
    row.appendChild(author)
    row.appendChild(state)
    row.appendChild(bookUser)
    row.appendChild(outDate)
    row.appendChild(inDate)
    row.classList.add(changeBackground())

    return row

} 
