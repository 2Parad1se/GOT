import React, {Component} from "react";
import './randomChar.css';
import { ListGroup, ListGroupItem, Button, Spinner } from 'reactstrap';
import GotService from "../../services/GotService";
import Error from "../error/error";

export default class RandomChar extends Component {
    constructor(props) {
        super(props);
        this.updateCharacter();
        // setInterval(this.updateCharacter, 2500);
        console.log('constructor')
    }
    got = new GotService();
    
    state = {
        name: null,
        gender: null,
        born: null,
        died: null,
        culture: null,
        loading: true,
        error: false,
        hide: false,
    }

    updateCharacter() {
        this.setState({
            loading: true,
        })
        let id = Math.floor(Math.random() * 1000 + 25);
        // const id = 1870000;
        // console.log(id)
        this.got.getCharacter(id)
            .then((char) => {
                console.log(char); 
                this.setState({
                    name: char.name,
                    gender: char.gender,
                    born: char.born,
                    died: char.died,
                    culture: char.culture, 
                    loading: false})
            })
            .catch(error => this.onError(error))
    }
    
    onError = (error) => {
        console.log(error)
        this.setState({
            error: true,
            loading: false,
        })
    }

    hideElement = () => {
        this.setState((state) => {
            return ({
                hide: !state.hide
            })
        })
    }

    //Хуки
    componentDidMount() {
        console.log('mount') //вызывается, когда элемент уже помещен на страницу после методов конструктор и рендер
        
        // setInterval(this.updateCharacter, 2500);
    }
    componentDidUpdate() {
        console.log('Update')
    }
    componentWillUnmount() {
        console.log('Unmount') //вызывается после удаления элемента со страницы
    }
    componentDidCatch() {
        console.log('Catch')
    }

    
    render () {
        console.log('render')
        const {loading, error, hide} = this.state;
        let classes;
        const content = error ? <Error/> : (loading ? <Spinner color="primary" className="spinner"/> : <Content state={this.state}></Content>)
        if (hide) {
            classes = 'content hide';
        } else {
            classes = 'content'
        }
        return(
            <div className="randomCharMenu">
                
                <div className={classes}>
                    {content}
                </div>
                

                <div className="wrapper_buttons">
                    <Button
                        color="primary"
                        className="randomCharButton"
                        onClick={() => this.updateCharacter()}
                    >
                        Random Char
                    </Button>
                    <Button 
                        color="primary"
                        onClick={() => this.hideElement()}
                    > 
                        Toogle window
                    </Button>
                </div>    
            </div>
        )
    }
}

const Content = ({state}) => {
    let {name, gender, born, died, culture} = state;

    return (
            <ListGroup className="list">
                <ListGroupItem className="randomCharItem randomCharItem_big" >
                    {name}
                </ListGroupItem>
                <ListGroupItem className="randomCharItem">
                    Gender: {gender}
                </ListGroupItem>
                <ListGroupItem className="randomCharItem">
                    Born: {born}
                </ListGroupItem>
                <ListGroupItem className="randomCharItem">
                    Died: {died}
                </ListGroupItem>
                <ListGroupItem className="randomCharItem">
                    Culture: {culture}
                </ListGroupItem>
            </ListGroup> 
    )
}
