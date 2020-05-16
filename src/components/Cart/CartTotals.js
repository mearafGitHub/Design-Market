import React from 'react'
import {Link} from 'react-router-dom'
import {RedButton} from '../Button'

export default function CartTotals({value}) {
    const{cartSubTotal, cartTotal, cartTax, clearCart}=value;
    return (
        <React.Fragment>
            <div className="container align-items-end">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize">
                        <Link to="/market">
                            <RedButton onClick={()=>{clearCart()}}>
                                Empty My Cart
                            </RedButton>
                        </Link>
                        <h5>
                            <span className="text-title">
                            <strong>Sub Total: ${cartSubTotal} </strong>
                            </span>
                        </h5>
                        <h5>
                            <span className="text-title">
                            <strong>Tax: ${cartTax} </strong>
                            </span>
                        </h5>
                        <h5>
                            <span className="text-title">
                            <strong>Total: ${cartTotal} </strong>
                            </span>
                        </h5>
                        <h5>
                            <span className="text-title">
                            <strong>Price in ETB: {cartTotal} </strong>
                            </span>
                        </h5>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
