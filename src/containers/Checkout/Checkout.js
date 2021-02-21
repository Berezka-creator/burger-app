import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import {Route, Redirect} from 'react-router-dom';
import ContactData from './ContactData/ContactData';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';

class Checkout extends Component {


    checkoutCanceledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render(){
        //Redirect  to home page if no ingredients are loaded
        let summary = <Redirect to ='/burger-app'/>

        //If ingredients are available we will render summary
        if(this.props.ings) {
            const purchasedRedirect = this.props.purchased ? <Redirect to='/burger-app' /> : null;
            summary=(
                <div>
                    {purchasedRedirect}
                    <CheckoutSummary
                        ingredients={this.props.ings}
                        checkoutContinued = {this.checkoutContinuedHandler}
                        checkoutCanceled = {this.checkoutCanceledHandler}
                    />
                    <Route
                        path={this.props.match.path + '/contact-data'}
                        component = {ContactData}
                    />
                </div>
            );
        }

        return summary;
    }
}

const mapStateToProps = state =>{
    return{
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        purchased: state.orders.purchased

    }
};

export default connect(mapStateToProps, null)(Checkout);
