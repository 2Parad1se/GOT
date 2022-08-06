import React, {Component} from 'react';
import './App.css';
import Header from '../header/header';
import RandomChar from '../randomChar/randomChar';
import ListCharacters from '../listCharacters/listCharacters';
import СharDetails from '../charDetails/charDetails';
// import TestMyFetch from './server.js';


export default class App extends Component {
    state = {
        selected: '',
    }

    selectChar = (id) => {
        this.setState({
            selected: id
        })
        console.log(this.state.selected)
    }
    render() {
        return (
            <div className="App">
                <Header></Header>
                    <div className="main">
                        <RandomChar className='randomChar'></RandomChar>
                        <ListCharacters className='listCharacter' selectChar={this.selectChar}></ListCharacters>
                        <СharDetails id={this.state.selected}></СharDetails>
                        {/* <img src='./img/error.jpg' className='error' alt='error'></img>
                        <img src={process.env.PUBLIC_URL + '/img/error.jpg'} alt='Error' className='error'></img> */}
                    </div>
            </div>
        );
    }
}


