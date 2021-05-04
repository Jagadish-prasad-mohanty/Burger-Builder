import React from 'react';
import BurgerLogo from '../../../Assets/image/burger-logo.png';
import classes from './Logo.module.css';

const logo = (props) =>(
    <div className={classes.Logo}>
        <img src={BurgerLogo} alt={"Burger"}></img>
    </div>
);

export default logo;