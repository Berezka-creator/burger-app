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
        let summary = <Redirect to ='/'/>
        if(this.props.ings) {
            summary=(
                <div>
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
        ings: state.ingredients,
        price: state.totalPrice

    }
};

const mapDispatchToProps = dispatch => {
    return{
        onInitPurchased:() => dispatch(actions.purchaseInit())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
