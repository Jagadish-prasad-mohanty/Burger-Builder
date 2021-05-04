import React from 'react';
import classes from './NavigationItem.module.css';
import {NavLink} from 'react-router-dom';

const navigationitem = (props) =>(
    <li className={classes.NavigationItem}>
        <NavLink activeStyle={{backgroundColor: '#8F5C2C',
        borderBottom: '4px solid rgb(26, 226, 226)'}} to={props.link} exact={props.exact}>{props.children}</NavLink>
    </li>
);

export default navigationitem;