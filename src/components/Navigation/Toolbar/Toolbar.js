import React from 'react';
import './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import ToggleButton from "../ToggleButton/Togglebutton";
import Backdrop from "../../UI/Backdrop/Backdrop";



const toolbar =(props) =>(
    <header className="Toolbar">
        <div>
            <ToggleButton  clicked={props.drawerToggleClicked}/>
        </div>

        <div className="LogoBar">
            <Logo/>
        </div>

        <nav className="DesktopOnly">
            <NavigationItems />
        </nav>

    </header>

)
export default toolbar;
