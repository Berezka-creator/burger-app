import React, {Component} from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/OrderSummary/OrderSummary';

const INGREDIENT_PRICES={
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

class BurgerBuilder extends Component{
    state={
        ingredients:{
            bacon:0,
            cheese:0,
            salad: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    }



    updatePurchaseState(ingredients){

        const sum=Object.keys(ingredients)
            .map(igKey =>{
                return ingredients[igKey]
            })
            .reduce((sum,el) => {
                return sum+el;
            }, 0);
        this.setState({purchasable: sum >0});

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
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler=(type)=>{
        const oldCount = this.state.ingredients[type];
        if(oldCount <=0){
            return;
        }
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
        this.updatePurchaseState(updatedIngredients);

    }

    purchaseHandler=()=>{
        this.setState({ purchasing: true});
    }

    purchaseCancelHandler=()=>{
        this.setState({purchasing: false});
    }

    purchaseContinueHandler =() =>{
        alert("You continue!");
    }

    render(){
        const disabledInfo ={
            ...this.state.ingredients
        };
        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <=0
        }
        return(
            <div>
                <Modal show={this.state.purchasing}
                        modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary ingredients={this.state.ingredients}
                                  price={this.state.totalPrice}
                                    purchaseCanceled={()=>this.purchaseCancelHandler()}
                                    purchaseContinued={()=>this.purchaseContinueHandler()}/>
                </Modal>

                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled ={disabledInfo}
                    purchasable={this.state.purchasable}
                    price={this.state.totalPrice}
                    ordered={() => this.purchaseHandler()}
                />



            </div>

        )
    }
}
export default BurgerBuilder;
