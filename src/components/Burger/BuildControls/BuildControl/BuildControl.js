import React from 'react';
import classes from './BuildControl.module.css'

const buildControl =(props) =>{
    return (
        <div className={classes.BuildControl}>
            <div className={classes.lable}>{props.lable}</div>
            <button className={classes.less} onClick={props.removed} disabled={props.disabled}>Less</button>
            <button className={classes.more} onClick={props.added}>More</button>
        </div>
    );
}

export default buildControl;