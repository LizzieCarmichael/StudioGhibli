import React from 'react';
import 'es6-promise';
import Card from './Card';

export default class Films extends React.Component {
    constructor(props){
        super(props)

        this.state = {
          films: []
          // need event handler button 
        }
    }
    // handleClick()

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films")
        .then( response => {
            console.log("API response", response)
            return response.json()
        })
        .then( array => {
            console.log("Parsed Data, array", array)
            this.setState({ films: array })
            console.log("Newly updated/set State", this.state.films);
        });
    
    }
    render() {
        return (
            <div>
                <Card filmsTitle={this.state.films} />
            </div>
        )
    }

}