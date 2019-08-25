import React from 'react';
import {Component} from 'react';

import './ClearButton.css';

export const ClearButton = (props)=>(
    <div className="clear-btn" onClick={props.handleClear}>
        {props.children}
    </div>
)