import React from 'react';
import classes from './BuildControls.module.css';

import BuildControl from './BuildControl/BuildControl';

const controls=[
    {lable:"Cheese",type:"cheese"},
    {lable:"Bacon",type:"bacon"},
    {lable:"Meat",type:"meat"},
    {lable:"Salad",type:"salad"},
]

const buildControls= (props) =>{
    const showControls=controls.map((elem)=>(
        <BuildControl  
            key={elem.type} 
            lable={elem.lable} 
            added={()=>props.added(elem.type)} 
            removed={()=>props.removed(elem.type)}
            disabled={props.disabled[elem.type]}
        />
    ));
    return (
        <div className={classes.BuildControls}>
            <p>Total Price : <strong>{props.price.toFixed(2)}</strong></p>
            {showControls}
            <button className={classes.orderBtn} 
                        disabled={!props.purchasable}
                        onClick={props.purchased}
                        >ORDER NOW</button>
        </div>
    );
}


export default buildControls;