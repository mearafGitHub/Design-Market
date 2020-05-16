import React, { Component } from 'react'
import Title from '../Title';
import Navbar from '../Navbar';
import EmptyCart from './EmptyCart';
import {ShowCaseContextConsumer} from '../../ShowCaseContext'
import CartColumns from './CartColumns';
import CartItemList from './CartItemList'
import CartTotals from './CartTotals'

export default class Cart extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar/>
                <section>
                    <ShowCaseContextConsumer>
                    {value=>{
                        const {cart} = value;
                        if(cart.length>0){
                            return (
                                <React.Fragment>
                                    <Title name="Your" title="Cart"/>
                                    <CartColumns/>
                                    <CartItemList value={value} />
                                    <CartTotals value={value} />
                                </React.Fragment>
                            )
                        }
                        else{
                           return <EmptyCart/>
                        }
                    }}
                    </ShowCaseContextConsumer>
                </section>
            </React.Fragment>
        )
    }
}

