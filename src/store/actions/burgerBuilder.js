import * as actionTypes from './actionTypes';
import axios from "../../axios-orders";

export const addIngredient = (name) =>{
    return{
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    };
};

export const removeIngredient = (name) =>{
    return{
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    };
};


export const fetchIngredientsFailed = () => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED
    }
};

//Internal action that will keep ingredients until initIngredients is ready
export const setIngredients = (ingredients) => {
    return{
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredients
    };
};

//Initially to load ingredients that we will use in BurgerBuilder
export const initIngredients = () => {
    //Fetch ingredients asynchronously  throw REDUX-THUNK method
    return dispatch => {
        axios.get('https://react-my-burger-1f756-default-rtdb.firebaseio.com/ingredients.json')
            .then(response => {
                dispatch(setIngredients(response.data));
            })
            .catch(error => {
                dispatch(fetchIngredientsFailed());
            });
    }
}
