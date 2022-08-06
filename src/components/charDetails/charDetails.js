import React, {Component} from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import GotService from "../../services/GotService";


export default class СharDetails extends Component {
    state = {
        character: {}
    }
    got = new GotService();
    // console.log(got)
    updateState = (id) => {
        if (id) {
            this.got.getCharacter(id)
                .then(res => {
                    this.setState({
                        character: res
                    })
                })
            console.log(this.state)
        } else {
            return
        }
        
    }

    render() {
        const {name, gender, born, died, culture} = this.state
        return (
            <div>
                <ListGroup className="list">
                    <ListGroupItem className="randomCharItem randomCharItem_big" >
                        {name}
                    </ListGroupItem>
                    <ListGroupItem className="randomCharItem">
                        {/* Gender: {gender} */}
                    </ListGroupItem>
                    <ListGroupItem className="randomCharItem">
                        {/* Born: {born} */}
                    </ListGroupItem>
                    <ListGroupItem className="randomCharItem">
                        {/* Died: {died} */}
                    </ListGroupItem>
                    <ListGroupItem className="randomCharItem">
                        {/* Culture: {culture} */}
                    </ListGroupItem>
                </ListGroup> 
            </div>
        )
    }
}

