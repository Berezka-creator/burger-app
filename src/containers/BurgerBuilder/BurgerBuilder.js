import React, {Component} from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES={
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

class BurgerBuilder extends Component{
    state={
        ingredients:{
            bacon:1,
            cheese:2,
            salad: 0,
            meat: 0
        },
        totalPrice: 4
    }

    addIngredientHandler=(type)=>{
        const oldCount = this.state.ingredients[type];
        const updatedCounted =oldCount+1;

        console.log(updatedCounted)

        const updatedIngredients ={
            ...this.state.ingredients
        };

        updatedIngredients[type]=updatedCounted;
        console.log(updatedIngredients)
        //update
        const priceAddition=INGREDIENT_PRICES[type];
        console.log(priceAddition)
        const oldPrice = this.state.totalPrice;
        const newPrice=oldPrice+priceAddition;
        console.log(newPrice)

        this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
    }
    removeIngredientHandler=(type)=>{
        const oldCount = this.state.ingredients[type];
        const updatedCounted =oldCount-1;

        console.log(updatedCounted)

        const updatedIngredients ={
            ...this.state.ingredients
        };

        updatedIngredients[type]=updatedCounted;
        console.log(updatedIngredients)
        //update
        const priceDeduction=INGREDIENT_PRICES[type];

        const oldPrice = this.state.totalPrice;
        const newPrice=oldPrice-priceDeduction;
        console.log(newPrice)

        this.setState({totalPrice: newPrice, ingredients: updatedIngredients})

    }
    render(){
        return(
            <div>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                />

                <div>Build Control</div>

            </div>

        )
    }
}
export default BurgerBuilder;
