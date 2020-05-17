import React, { Component } from 'react'
import { ShowCaseContextConsumer } from '../ShowCaseContext'
import {Link} from 'react-router-dom'
import {FormButton, CardButton} from './Button'
import styled from 'styled-components'

export default class Modal extends Component {
    render() {
        return (
            <ShowCaseContextConsumer>
                {(Value)=>{
                    const { modalOpen,closeModal } = Value;
                    const { img, title, price } = Value.modalDesign;
                    if(!modalOpen){
                        return null;
                    }
                    else{
                        return (
                        <ModalContainer>
                            <div className="conatainer">
                                <div className="row">
                                    <div className="col-8 mx-auto my-5 p-5 col-md-6 col-lg-4 
                                    text-center text-capitalize" id="modal">
                                        <h5>item added to the cart</h5>
                                        <img src={img} className="img-fluid p-5" alt="design" />
                                        <h5>{title}</h5>
                                        <h5 className="text-muted text-bright">price: ${price}</h5>
                                        <Link to="/market">
                                            <FormButton onClick={()=>{closeModal()}}>
                                              Back 
                                            </FormButton>
                                        </Link>
                                        <Link to="/cart">
                                        <CardButton onClick={()=>{closeModal()}}>
                                            Show Cart
                                        </CardButton>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </ModalContainer>
                        )
                    }
                }}
            </ShowCaseContextConsumer>
        )
    }
}
const ModalContainer = styled.div`
    position: fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background:rgba(0,0,0,0.3);
    display: flex;
    border-radius: 3rem;
    algin-items: center;
    justify-content:center;
    #modal{
        background: var(--coolWhite)
    }
`