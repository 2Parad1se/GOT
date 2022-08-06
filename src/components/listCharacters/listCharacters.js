import React, {Component} from "react";
import './listCharacters.css'
import {ListGroup, ListGroupItem, Spinner} from 'reactstrap';
import GotService from "../../services/GotService";

export default class ListCharacters extends Component {
    constructor(props) {
        super();
        this.updateListCharacter()
        this.state = {
            characters: []
        }
    }


    got = new GotService();

    
    updateListCharacter = () => {
        this.got.getAllCharacters()
            .then(list => {
                console.log(list)
                this.setState({
                    characters: list
                })
            })

    }

    createCharacters = (list) => {
        const arr = list.map(item => {
            return (
                <ListGroupItem key={item.id} className='list_item' onClick={() => this.props.selectChar(item.id)} >
                    {item.name}
                </ListGroupItem>
            )
        })
        return arr
    }
    render() {
        const {characters} = this.state;

        if (!characters) {
            return (
                <Spinner></Spinner>
            )
        }
        const items = this.createCharacters(characters)
        return (
            <div className="listCharactersMenu">
                
                <ListGroup className="list" >
                    {items}
                </ListGroup>
            </div>
        )
    }
}

// const str = "https://www.anapioficeandfire.com/api/characters/823"
// const str2 = "https://www.anapioficeandfire.com/api/characters/1023823"
// // console.log(str.lastIndexOf('/'))
// console.log(str2.slice(str2.lastIndexOf('/') + 1))