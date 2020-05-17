import React, { Component } from 'react'
import {ShowCaseContextConsumer} from '../ShowCaseContext'
import {Link} from 'react-router-dom'
import {FormButton, MyCartButton} from './Button'
import Title from './Title'
import {FaCartPlus} from 'react-icons/fa'

export default class Details extends Component {
    render() {
        return (
            <React.Fragment>
               <ShowCaseContextConsumer>
               { value => {
                   const {
                    id, 
                    company, 
                    img, 
                    info, 
                    price, 
                    title, 
                    inCart
                 } = value.detailDesign;
                   console.log(value.detailDesign)
                   return (
                       <div className="conatainer py-5 px-5">
                            {/*title*/}
                            <div className="row">
                                <div className="col-10 mx-auto text-centered text-slanted text-blue my-2 pb-3">
                                    <Title name = {title}/>
                                </div>   
                            
                            {/*end title*/}
                            {/* desing detail info*/}
                            <div className="col-8 mx-auto col-md-5 my-3" >
                                <img src={img} className="img-fluid" alt="Design"/>
                            </div>
                            <div className="col-8 mx-auto text-centered col-md-5 my-3 px-7 text-capitalize">
                                <h2 className="text-blue">Model: {title}</h2>
                                <h4 className="text-title text-capitalize text-muted mt-3 mb-2">made by: {company}</h4>
                                <h4 className="text-title text-bright mt-3 mb-2">
                                <strong>
                                <span>$</span>
                                {price}
                                </strong></h4>
                                <p className="text-capitalize font-weight-bold mt-3 mb-1">
                                Design discription
                                </p>
                                <p className="text-muted lead">
                                    {info}
                                </p>
                                <Link to="/">
                                    <FormButton>Market</FormButton>
                                </Link>
                                    <MyCartButton 
                                    disabled={inCart?true:false}
                                    onClick={()=>{
                                        value.addToCart(id);
                                        value.openModal(id);
                                    }}
                                    >
                                     {inCart ? "incart" : (<FaCartPlus/>)}
                                    </MyCartButton>
                            </div>
                            </div>
                       </div>
                   );
               }}
               </ShowCaseContextConsumer>
            </React.Fragment>
        )
    }
}
