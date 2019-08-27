import React from 'react';
import {Component} from 'react';
import './SaveInput.css';
import { SaveButton } from '../SaveButton/SaveButton';


class SaveInput extends React {
    constructor(props){
        super(props)
        this.state={
            input: " "
        }
    }

    render(props){
        return (
        <input className='save-input'>{props.input}</input>
       
        )
    }
}

export default SaveInput;