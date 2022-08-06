export default class GotService {
    constructor() {
        this._apiBase ='https://www.anapioficeandfire.com/api/'
    }
    async getResourse(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        // console.log(typeof(res));
        if (res.ok) {
            return await res.json();
        } else {
            throw new Error(`Ошибка по адресу ${this._apiBase}${url} статус: ${res.status}`)
        }    
    }

    async getAllCharacters() {
        const response = await this.getResourse("characters?page=13&pageSize=10");
        // console.log(response)
        return response.map(this._transformCharacter)
        // return this._transformCharacter(response)
        
    }

    async getCharacter(id) {
        const response = await this.getResourse(`characters/${id}`);
        // let a = this._transformCharacter(response);
        // console.log(response);
        return this._transformCharacter(response)
        // return this.getResourse();

    }

    async getAllBooks() {
        const response = await this.getResourse('books');
        return response.map(this._transformBook)
    }

    async getBook(id) {
        const response = await this.getResourse(`books/${id}`);
        return this._transformBook(response);
    }

    async getAllHouses() {
        const response = await this.getResourse(`houses`);
        return response.map(this._transformHouse)
    }

    async getHouse(id) {
        const response = await this.getResourse(`houses/${id}`);
        return this._transformHouse(response);
    }

    _transformCharacter(char) {
        return {
            name: char.name || 'no data :(',
            gender: char.gender || 'no data :(',
            born: char.born || 'no data :(',
            died: char.died || 'no data :(',
            culture: char.culture || 'no data :(',
            id: char.url.slice(char.url.lastIndexOf('/') + 1) || 'no data :(',
        }
    }

    _transformBook(book) {
        return {
            name: book.name || 'no data :(',
            numberOfPages: book.numberOfPages || 'no data :(',
            publiser: book.publiser || 'no data :(',
            released: book.released || 'no data :(',
            povCharacters: book.povCharacters || 'no data :(',
        }
    }

    _transformHouse(house) {
        return {
            name: house.name || 'no data :(',
            region: house.region || 'no data :(',
            words: house.words || 'no data :(',
            titles: house.titles || 'no data :(',
            overlord: house.overlord || 'no data :(',
            ancestralWeapons: house.ancestralWeapons || 'no data :(',
        }
    }
}

// .then(data => console.log(data));
// const got = new GotService();
// console.log(got.getCharacter());
// got.getAllCharacters().then(data => {
//     data.forEach(item => console.log(item.name))
// });
// got.getCharacter(135).then(data => console.log(data));
// console.log(got.getCharacter(155));
