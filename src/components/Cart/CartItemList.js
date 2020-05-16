import React from 'react'
import CartItem from './CartItem'

export default function CartItemList({value}) {
    const {cart} = value;
    console.log("Cart Item",cart)
    return (
        <div className="container-fluid">
            {cart.map(designItem=>{
                return <CartItem key={designItem.id} designItem={designItem} value={value} />
            })}
            
        </div>
    )
}
