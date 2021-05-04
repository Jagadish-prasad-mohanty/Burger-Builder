import React from 'react';
import Logo from '../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Auxilary from '../../../hoc/Auxilary/auxilary';
import BackDrop from '../../../UI/BackDrop/BackDrop';

import classes from './SideDrawer.module.css';

const sidedrawer= (props) =>{
    let addClasses=[classes.SideDrawer,classes.close];
    if(props.open){
        addClasses=[classes.SideDrawer,classes.open];
    }
    return (
        <Auxilary>
            <BackDrop show={props.open} clicked={props.closed}/>
            <div className={addClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Auxilary>
    );
}


export default sidedrawer;