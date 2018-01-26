import React from 'react';
import 'es6-promise';
import Totoro from './logo.png';

export default class Jumbo extends React.Component {
    render() {
     return(
        <div className="jumbotron-fluid">
        <img className="w-75 mb-5"
        src= {Totoro}
        alt = "Studio Ghibli Logo"/>
        </div>
     )   
    }
}