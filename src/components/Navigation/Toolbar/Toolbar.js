import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import HamBurger from '../../../UI/HamBurger/Hamburger';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <HamBurger clicked={props.openDrawer}/>
        <div className={classes.Logo}>
            <Logo/>
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems/>
        </nav>
    </header>
);

export default toolbar;