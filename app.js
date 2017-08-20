import React, { Component } from 'react';
import main from './main.jsx'

export default class MyApp extends Component {
    constructor(props){
        super(props)
        console.log(props)
    }
    render() {
        return (
            <div>
               <main/>
            </div>
        );
    }
}