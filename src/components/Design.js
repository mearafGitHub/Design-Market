import React, { Component } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { CardButton, CardButtonBlue } from './Button'
import PropTypes from 'prop-types'
import { FaCartPlus, FaMapMarked } from 'react-icons/fa';
import { ShowCaseContextConsumer } from '../ShowCaseContext'

export default class Design extends Component {
    render() {
        const {id, title, img, price, inCart} = this.props.design;
        return (
        <DesignWrapper className="col-9 mx-aout col-md-6 col-lg-3 my-3">
            <div className="card">
                 <ShowCaseContextConsumer>
                  {value =>(
                    <div className="img-container p-5" 
                        onClick={() => value.handleDetail(id)}>
                        <Link to="/details">
                            <img src={img} alt="design" className="card-img"/>
                        </Link>
                        <CardButton className="card-btn" 
                            disabled={inCart ? true: false}
                            onClick={()=>{
                                value.addToCart(id);
                                value.openModal(id);
                            }}> 
                            { inCart ? (
                                <p className="text-capitalize mb-0" diabled>
                                {" "}   in cart
                            </p>
                            ) : (
                                <FaCartPlus />
                            )}
                        </CardButton>

                        <Link to="/designer-shop">
                            <CardButtonBlue className="card-btn-one">
                                <FaMapMarked />
                             </CardButtonBlue>
                        </Link>
                    </div>

                  )}
                   
                </ShowCaseContextConsumer>
                {/* card footer*/}
                <div className="col card-footer d-flex justify-content-between">
                    <p className = "align-self-center mb-0"> {title} </p>
                    <h6 className="text-blue font-weight-bolder font-italic mb-0">
                    <span className="mr-1">ETB</span>
                    {price}
                    </h6>
                </div>
            </div>
        </DesignWrapper>
        )
    }
}

Design.propTypes={
    design: PropTypes.shape({
        id:PropTypes.number,
        img: PropTypes.string,
        title:PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool,
        info: PropTypes.string
    }).isRequired
}
const DesignWrapper = styled.div`
.card{
    border: transparent;
    background: var(--mainWhite);
    box-shadow: 0.0rem 0.05rem 0.9rem var(--coolGrey);
}
.card-footer{
    transition: all 0.5s linear;
    background: var(--mainWhite);
    border-top: transparent;
}
&:hover{
    .card{
        transition: all 0.5s linear;
        border: transparent;
        box-shadow: 0.0rem 0.05rem 0.9rem var(--coolGrey);
    }
    .card-footer{
    border-top: var(--coolWhite);
    }
    .card-btn-one{
        transform: translate(0,0);
    }
    .card-btn {
        transform: translate(0,0);
    }
}
.img-container{
    position: relative;
    overflow: hidden;
    margin:0.4rem;
}
.img-container:hover .card-img{
    transition: all 0.8s linear;
    transform: scale(1.5);
}
.card-btn{
    position: absolute;
    bottom: 0;
    right: 0;
    transition: all 0.8s linear;
    transform: translate(100%,100%);
}
.card-btn-one{
    position: absolute;
    top: 0;
    right: 0;
    transition: all 0.8s linear;
    transform: translate(100%,100%);
}

`