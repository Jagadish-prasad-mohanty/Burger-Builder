import * as actionTypes from './actionTypes';
import axios from '../../axios';

export const addIngredient = (ing)=>{
    return {
        type:actionTypes.ADD_INGREDIENT,
        ingredientType:ing
    }
}
export const removeIngredient = (ing)=>{
    return {
        type:actionTypes.REMOVE_INGREDIENT,
        ingredientType:ing
    }
}   

const loadIngredientFailed = () => {
    return {
        type: actionTypes.LOAD_INGREDIENT_FAILED
    }
}

const setIngredients = (ingredients) =>{
    return {
        type: actionTypes.INIT_INGREDIENT,
        ingredients:ingredients
    }
}
export const initIngredients = () =>{
    return dispatch=>{
        axios.get('https://burgerbuilder-3193f-default-rtdb.firebaseio.com/ingredients.json')
        .then(res=>{
            dispatch(setIngredients(res.data))
        })
        .catch(err=>{
            dispatch(loadIngredientFailed())
        })
    }
}