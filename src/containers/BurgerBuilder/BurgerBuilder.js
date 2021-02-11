import React, {Component} from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import { connect } from 'react-redux';
import * as burgerBuilderActions from '../../store/actions/index';




class BurgerBuilder extends Component{
    state={
        purchasing: false,
        loading: false,
        error:false
    }

    componentDidMount() {
        console.log(this.props);

    }

    updatePurchaseState(ingredients){
        const sum=Object.keys(ingredients)
            .map(igKey =>{
                return ingredients[igKey]
            })
            .reduce((sum,el) => {
                return sum+el;
            }, 0);
        return  sum >0;
    }

   /* addIngredientHandler=(type)=>{
        const oldCount = this.props.ings[type];
        const updatedCounted =oldCount+1;

        const updatedIngredients ={
            ...this.props.ings
        };

        updatedIngredients[type]=updatedCounted;

        //update
        const priceAddition=INGREDIENT_PRICES[type];

        const oldPrice = this.state.totalPrice;
        const newPrice=oldPrice+priceAddition;


        this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
        this.updatePurchaseState(updatedIngredients);
    }*/

   /* removeIngredientHandler=(type)=>{
        const oldCount = this.state.ingredients[type];
        if(oldCount <=0){
            return;
        }
        const updatedCounted =oldCount-1;
        const updatedIngredients ={
            ...this.state.ingredients
        };

        updatedIngredients[type]=updatedCounted;

        //update
        const priceDeduction=INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice=oldPrice-priceDeduction;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
        this.updatePurchaseState(updatedIngredients);

    }*/

    purchaseHandler=()=>{
        this.setState({ purchasing: true});
    }

    purchaseCancelHandler=()=>{
        this.setState({purchasing: false});
    }

    purchaseContinueHandler =() =>{
           this.props.history.push('/checkout');
    }

    render(){
        const disabledInfo ={
            ...this.props.ings
        };
        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <=0
        }

        let orderSummary = null;
        let burger =  this.state.error ? <p>Ingredients can't be loaded</p> : <Spinner />;

        if ( this.props.ings ){
            burger = (
                <Aux>
                    <Burger ingredients={this.props.ings}/>
                    <BuildControls
                        ingredientAdded={this.props.onIngredientAdded}
                        ingredientRemoved={this.props.onIngredientRemoved}
                        disabled ={disabledInfo}

                        purchasable={this.updatePurchaseState(this.props.ings)}
                        price={this.props.price}
                        ordered={() => this.purchaseHandler()}
                    />
                </Aux>
            );

            orderSummary =  <OrderSummary
                ingredients={this.props.ings}
                price={this.props.price}
                purchaseCanceled={()=>this.purchaseCancelHandler()}
                purchaseContinued={()=>this.purchaseContinueHandler()}/>;

        }

        if( this.state.loading ){
            orderSummary = <Spinner />
        }


        return(
            <Aux>
                <Modal
                    show={this.state.purchasing}
                    modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}

            </Aux>
        );
    }
}

const mapStateToProps= state =>{
    return{
        ings: state.ingredients,
        price: state.totalPrice
    };
}

const mapDispatchToProps = dispatch =>{
    return{
        onIngredientAdded: (ingName) => dispatch(burgerBuilderActions.addIngredient(ingName)),
        onIngredientRemoved: (ingName) => dispatch(burgerBuilderActions.removeIngredient(ingName))
    };

}
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));