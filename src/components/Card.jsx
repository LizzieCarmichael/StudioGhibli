import React from 'react';
import 'es6-promise';
import Howl from './movingcastle.jpg';

export default class Card extends React.Component {
    
    render(){
        let films= this.props.filmsTitle.map(film => {
            return (
                <div className="card col-sm-5 mx-auto justify-content-center my-2 border border-success borderWidth-5px" key= {film.id}>
                    <img className="card-img pt-3 border-radius"
                    src={Howl} 
                    alt="Ghibli Film Posters" />
                    <div className="card-body">
                    <h5 className="card-title text-primary text-center">
                        {film.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted font-italic text-center">
                        {`Directed by ${film.director}`}</h6>
                    <p className="card-text">
                        {film.description}</p>
                    </div>
                </div>
            )
        })
        return (
            <div className ="row p-1">
            {films}</div>
        )
    }
}