import React from 'react';
import Films from './Films'
import Jumbo from './Jumbo';
import 'es6-promise';

export default class App extends React.Component {
    
    render() {
        return (
            <div>
                <Jumbo />
                <Films />
            </div>
        )
        
    }
}