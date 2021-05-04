import React from 'react';
import Auxilary from '../../../hoc/Auxilary/auxilary';
import Button from '../../../UI/Button/Button';

const  purchaseDetails =(props) =>{
    const ingredientList=Object.keys(props.ingredients)
                        .map(igKeys=>{
                            return <li key={igKeys}><span style={{fontWeight:'bold',textTransform:'capitalize'}}>{igKeys}</span> : {props.ingredients[igKeys]}</li>
                        })
    return(
        <Auxilary>
            <p><strong>Your Order</strong></p>
            <p>Your delicious Burger withh the following ingredients:</p>
            <ul>
                {ingredientList}
            </ul>
            <p><strong>Total Price : {props.totalPrice}</strong></p>
            <p>Procide to CheckOut?</p>
            <Button btnType={'Failure'} clicked={props.cancleOrder}>CANCLE</Button>
            <Button btnType={'Success'} clicked={props.continueOrder}>CONTINUE</Button>
        </Auxilary>
    );
}

export default purchaseDetails;