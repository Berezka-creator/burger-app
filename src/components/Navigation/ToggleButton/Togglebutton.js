import React from 'react';
import './ToggleButton.css';


const toggleButton =(props)=>{
    return(
        <div className="ToggleButton"  onClick={props.clicked}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}





export default toggleButton;
