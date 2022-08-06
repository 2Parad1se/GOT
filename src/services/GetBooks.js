export default class GetBooks {

    state = {
        _apiBase: 'https://www.anapioficeandfire.com/api/'
    }

     getResourse = async (url) => {
        const res = await fetch(`${url}`)
        if (res.ok) {
            return res.json()
        } else {
            console.log('Error')
        }
    }

    getBooks = () => {
        const books = this.getResourse('https://www.anapioficeandfire.com/api/books');
        books.then(res => console.log(res));
    }

    getBook = (id) => {
        const book = this.getResourse(`https://www.anapioficeandfire.com/api/books/${id}`);
        book.then(res => console.log(res));
    }
}

const myBooks = new GetBooks();

myBooks.getBook(1);
myBooks.getBooks();