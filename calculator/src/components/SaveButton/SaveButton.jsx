import React from 'react';
import {Component} from 'react';

import './SaveButton.css';

export const SaveButton = (props)=>(
    <div className="save-btn" onClick={props.handleSave}>
        {props.children}
    </div>
)