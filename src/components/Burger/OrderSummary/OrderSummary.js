import React,{ Component } from 'react';
import Button from "../UI/Button/Button";


class OrderSummary  extends Component{

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("[Order summary] will update");
    }

    render(){
        const ingredientSummary=Object.keys(this.props.ingredients)
            .map(igKey => {
                return (
                    <li key={igKey}>
                        <span style={{textTransform: 'capitalize'}}>{igKey}</span>:
                        {this.props.ingredients[igKey]}
                    </li>
                );
            });
        return(
            <div>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total price:{this.props.price.toFixed(2)}</strong></p>
                <p>Continue to checkout?</p>

                <Button clicked={this.props.purchaseCanceled}>CANCEL</Button>
                <Button clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </div>

        )
    }


}
export default OrderSummary;
