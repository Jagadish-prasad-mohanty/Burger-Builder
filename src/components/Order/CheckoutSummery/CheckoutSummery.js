import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../../UI/Button/Button';
import classes from './CheckoutSummery.module.css'


const CheckoutSummery= (props) =>{
    return (
        <div className={classes.CheckoutSummery}>
            <h1>We hope it tests well!</h1>
            <div style={{width:'100%'}}>

            <Burger ingredients={props.ingredients}/>
            </div>
            <Button btnType="Failure" clicked={props.purchaseCancled}>CANCLE</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </div>
    );
}


export default CheckoutSummery;