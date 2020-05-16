import React, { Component } from 'react'
import Title from '../Title';

export default class EmptyCart extends Component {
    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-10 mx-auto text-center text-title mt-5">
                        <Title name="Your cart is" title="currently empty" />
                    </div>
                </div>
            </div>
        )
    }
}
