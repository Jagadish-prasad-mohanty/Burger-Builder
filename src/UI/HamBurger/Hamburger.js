import React from 'react';
import classes from './HamBurger.module.css';

const hamburger=(props)=>(
    <div onClick={props.clicked} className={[classes.HamBurger,classes.MobileOnly].join(' ')}>
        <div></div>
        <div></div>
        <div></div>
    </div>
    
);

export default hamburger;