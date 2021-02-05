import React from 'react';
import styles from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import ToggleButton from "../ToggleButton/Togglebutton";
import Backdrop from "../../UI/Backdrop/Backdrop";



const toolbar =(props) =>(
    <header className={styles.Toolbar}>
        <div>
            <ToggleButton  clicked={props.drawerToggleClicked}/>
        </div>

        <div className={styles.Logo}>
            <Logo/>
        </div>

        <nav className={styles.DesktopOnly}>
            <NavigationItems />
        </nav>

    </header>

)
export default toolbar;
