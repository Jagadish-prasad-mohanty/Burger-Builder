import React from 'react';
import classes from './Order.module.css';

const Order= (props) =>{
    const ingredients=[];
    for(let ingr in props.ingredients){
        ingredients.push({
            name:ingr,
            amount:props.ingredients[ingr]
        })
    }

    const ingredientsOutput=ingredients.map(ingr=>{
        return <span
        style={{textTransform:'capitalize',
        display:'inline-block',
        margin:'auto 4px',
        padding:'5px',
        border:'1px solid #ccc'}}
        key={ingr.name}
        >{ingr.name} ({ingr.amount}) </span>;
    })
    return(
        <div className={classes.Order}>
            <p>Ingredients : <strong>{ingredientsOutput}</strong></p>
        <p>TotalPrice : <strong>{props.price}</strong></p>
        </div>
    );
}

export default Order;