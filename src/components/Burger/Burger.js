import React from 'react';
import BurgerIngridients from './BurgerIngridients/BurgerIngridients';
import classes from './Burger.module.css';

const burger = (props) =>{
    let transformedIngredient= Object.keys(props.ingredients)
                            .map(igKey =>{
                                return [...Array(props.ingredients[igKey])]
                                .map((_,i) =>{
                                        return <BurgerIngridients key={igKey+i} type={igKey}/>
                                });
                            })
                            .reduce((arr,el) =>{
                                return arr.concat(el);
                            },[]);
    if (transformedIngredient.length===0){
        transformedIngredient=<p>Start adding ingredients</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngridients type="bread-top"/>
            {transformedIngredient}
            <BurgerIngridients type="bread-bottom"/>
        </div>
    );
}

export default burger;