import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

import {connect} from 'react-redux';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();

      this.setState({loading: true});
      const order={
          ingredients: this.props.ings,
          price: this.props.price,
          customer:{
              name: 'Yulia Berezina',
              address:{
                  street: 'Monterey 4434',
                  zipCode: '23333',
                  country: 'Jordan'
              },
              email: 'testemaim@gmail.com',
          },
          deliverMethod: 'fastest'
      }
      axios.post('/orders.json' ,order)
          .then(response => {
              this.setState({loading: false});
              this.props.history.push('/');
          })
          .catch(error => {
              this.setState({loading: false});
          });
    }


    render(){
        let form =(
            <form>
                <input className="Input" type="text" name="name" placeholder="Your name" />
                <input className="Input" type="text" name="email" placeholder="Type email" />
                <input className="Input" type="text" name="street" placeholder="Street" />
                <input className="Input" type="text" name="postalcode" placeholder="Postal Code" />
                <Button
                    btnType="Success"
                    clicked={this.orderHandler}

                >
                    ORDER</Button>

            </form>
        );
        if(this.state.loading){
            form = <Spinner />;
        }

        return (
            <div className="ContactData">
                <h4>Enter your Contact Data</h4>
                {form}

            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        ings: state.ingredients,
        price: state.totalPrice
    }
}

export default connect(mapStateToProps)(ContactData);
