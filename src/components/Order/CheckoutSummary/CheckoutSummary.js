import React from 'react';
import styles from './CheckoutSummary.module.css';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import { HashLink as Link } from 'react-router-hash-link';


const checkoutSummary =(props)=>{
    return(
        <div className={styles.CheckoutSummary}>
            <h1>We hope it testes well!</h1>
            <div style={{width:'100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>

            <Button btnType="Danger"
                    clicked={props.checkoutCancelled}>CANCEL</Button>
            <Button
                btnType="Success"
                clicked={props.checkoutContinued}>
                    <Link to="/checkout#contact-form">CONTINUE</Link></Button>
        </div>
    );

}
export default checkoutSummary;
