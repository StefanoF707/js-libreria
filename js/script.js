$(document).ready(
    function () {

         // creo un array di libri
        let books = [
            {
                title: "1984",
                author: "George Orwell",
                year: 1949,
            },
            {
                title: "It",
                author: "Stephen King",
                year: 1986,
            },
            {
                title: "11/22/63",
                author: "Stephen King",
                year: 2011,
            },
            {
                title: "Il conte di Montecristo",
                author: "Alexandre Dumas",
                year: 1846,
            },
            {
                title: "La fattoria degli animali",
                author: "George Orwell",
                year: 1945,
            },
            {
                title: "Shining",
                author: "Stephen King",
                year: 1977,
            },
            {
                title: "Homo deus",
                author: "Yuval Noah Harari",
                year: 2015,
            },
            {
                title: "Il gioco del trono",
                author: "George Martin",
                year: 1996,
            },
            {
                title: "Il banchetto dei corvi",
                author: "George Martin",
                year: 2005,
            },
            {
                title: "Il Miglio Verde",
                author: "Stephen King",
                year: 1996,
            },
            {
                title: "Guerra e pace",
                author: "Lev Tolstoj",
                year: 1865,
            },
            {
                title: "Lo scontro dei re",
                author: "George Martin",
                year: 1998,
            },
            {
                title: "Tempesta di spade",
                author: "George Martin",
                year: 2000,
            },
            {
                title: "Elogio della follia",
		        author: "Henri Laborit",
		        year: 1976,
            },
            {
                title: "Una danza con i draghi",
                author: "George Martin",
                year: 2011,
            },
            {
		        title: "La forma dell'acqua",
		        author: "Andrea Camilleri",
		        year: 1994,
	        },
            {
                title: "Sapiens - Da animali a dei",
                author: "Yuval Noah Harari",
                year: 2011,
            },
        ];

        const library = $("#own_books");


        // milestone 2 - aggiungo manualmente un libro all'interno dell'array
        books.push({
            title: "Una stanza piena di gente",
            author: "Daniel Keyes",
            year: 1981,
        });

        showBooks(books, library);

        $("#new_book_btn").click(
            function () {

                let bookTitle = $("#book_title").val();
                let bookAuthor = $("#book_author").val();
                let bookYear = $("#book_year").val();

                addNewBook(books, bookTitle, bookAuthor, bookYear);
                library.html("");
                showBooks(books, library);

                $("#book_title").val("");
                $("#book_author").val("");
                $("#book_year").val("");


            }
        );

        $("#search_author_btn").click(
            function () {

                let searchInputValue = $("#author_search").val();

                const newArrayAfterSeach = searchAuthorInArray(books, searchInputValue);

                library.html("");

                if (searchInputValue == "") {
                    showBooks(books, library);
                } else {
                    showBooks(newArrayAfterSeach, library);
                }

                $("#author_search").val("");
            }
        );

    }
);

//------------------------------------------------------

// Funzione per mostrare in pagina ogni singolo elemento dell'array di libri
function showBooks (array, container) {

    array.forEach( (element) => {

        // destrutturo il singolo oggetto dell'array
        const {title, author, year} = element;

        // creo gli <li>dove, ognuno di essi, contiene ciascuna chiave dell'oggeto precedentemente destrutturato
        $(container).append(`
            <li>
                <h3>${author}</h3>
                <h2>${title}</h2>
                <span>${year}</span>
            </li>`);
    } );
}

// Funzione per cercare corrispondenza tra il valore dell'input search e la chiave author dell'array di libri
function searchAuthorInArray(array, value) {
    let newArray = [];

    array.forEach( (element) => {

        const {author} = element;

        if (value == author) {
            newArray.push(element);
        }

    } );

    return newArray;
}

// Funzione per aggiungere nuovi libri inseriti dall'utente nel form
function addNewBook(array, value1, value2, value3) {

    if (value1 == "" || value2 == "" || value3 == "" || isNaN(value3) || (value3 < 0 || value3 > 2020) ) {
        alert("Inserire dati corretti");
    } else {
        array.push({
            title: value1,
            author: value2,
            year: parseInt(value3),
        });
    }

}
