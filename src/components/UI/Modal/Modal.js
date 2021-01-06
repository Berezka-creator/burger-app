import React, { Component } from'react';
import './Modal.css';
import Backdrop from '../Backdrop/Backdrop' ;

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState, nextContext) {
            return nextProps.show !== this.props.show;
            return nextProps.show !== this.props.show;
    }
    //we made sure that we didn't update [Order Summary] unnecessary,
    //now it update when we push "Order NOW" at first it updated everytime when we added item.
    //we do it in the [Modal] because in [BurgerBuilder] Modal controls [OrderSummary] component

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("[Modal ] will update");
    }

    render() {


        return (
            <div>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>


                <div className="Modal"
                     style={{
                         transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                         opacity: this.props.show ? "1" : "0"
                     }}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
export default Modal;
