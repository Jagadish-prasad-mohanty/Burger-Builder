import * as actionTypes from '../actions/actionTypes';

const initialState={
    ingredients:null,
    totalPrice:20,
    error:false
}

const ingredientPrice={
    cheese:10,
    bacon:12,
    meat:20,
    salad:8
}

const reducer = (state=initialState,action) =>{
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            return{
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [action.ingredientType]:state.ingredients[action.ingredientType]+1
                },
                totalPrice:state.totalPrice+ingredientPrice[action.ingredientType]
            }
    
        case actionTypes.REMOVE_INGREDIENT:
            return{
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [action.ingredientType]:state.ingredients[action.ingredientType]-1
                },
                totalPrice:state.totalPrice-ingredientPrice[action.ingredientType]
            }

        case actionTypes.INIT_INGREDIENT:
            return{
                ...state,
                ingredients:action.ingredients,
                error:false
            }

        case actionTypes.LOAD_INGREDIENT_FAILED:
            return {
                ...state,
                error:true
            }
    
        default:
            return state;
    }
    
}


export default reducer;