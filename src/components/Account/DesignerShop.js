import React, { Component } from 'react'
import styled from 'styled-components'
import {CircleButton} from '../Button'
import {FaUser, FaBriefcase,FaHome,FaSave, FaEdit, FaTrash, FaInfo, FaArrowUp, FaQuestion} from 'react-icons/fa'

export default class DesignerShop extends Component {
    render() {
        return (
            <Shop>
                <div className="navbar navbar-sm">
                    <div className="cover align-self-center mx-auto">
                        <img className="img-fluid" src="img/codeforjob.png" alt="coverPicture" /> 
                    </div> 
                </div>
                <div className="row align-self-center d-flex mx-auto px-5">
                    <div className="align-self-center mx-auto">
                        <CircleButton>
                            <FaHome className="useIcon mr-2"/>
                            Market
                        </CircleButton> 
                        <CircleButton>Purchaser Account</CircleButton> 
                        <CircleButton>Vendor Account</CircleButton>
                        <CircleButton>Latest Updates</CircleButton>
                        <CircleButton>Get Free Trial</CircleButton> 
                    </div> 
                </div>

                <div className="mx-5">
                    <div className="row d-flex">
                        <div className="col-3">
                            <div className="card my-3">
                                <div className="showcasing">
                                     <h5 className="text-bright"> 
                                        <FaUser className="useIcon mr-2"/> 
                                        Biruk Tadewos
                                    </h5>
                                    <h5 className="text-bright"> 
                                        <FaBriefcase className="useIcon mr-2"/> 
                                        Architect 
                                    </h5>
                                    <CircleButton>
                                    <FaEdit className="useIcon mr-2"/>
                                        your info
                                    </CircleButton>
                                </div>
                            </div>

                            <div className="card my-3">
                                <CircleButton>
                                    <FaInfo className="useIcon mr-2"/>
                                        Orders
                                        <span className="orderAmount">10</span>
                                    </CircleButton> 

                            </div>
                        </div>

                        <div className="col-6">
                            <div className="card my-3 ">
                            <div className="showcasingBar">
                                <h4 className="text-white align-center mt-4 ml-3">
                                Showcase your design
                                </h4>
                            </div>
                                <div className="showcasing">
                                    <h7 className=" px-2"> 
                                    Upload file here
                                    <span className="px-2">
                                    <CircleButton>
                                    <span>
                                    <FaArrowUp className="useIcon mr-2"/>
                                    </span>
                                    Upload</CircleButton>
                                    </span>
                                    </h7>
                                    <h6 className=" px-2" className="px-2">Set Price:
                                    <span>
                                    <input type="number" placeholder="0" className="pirceInput px-2"/>
                                    </span>
                                    </h6>
                                    
                                    <h6 className=" px-2">Design Name:
                                    <span>
                                    <input type="text" placeholder="Designs name" className="designName px-2"/>
                                    </span>
                                    </h6>

                                    <h6 className=" px-2">Design Detail:
                                    <span>
                                    <input type="text-field" placeholder="Designs detail" 
                                    className="designDetail font-weight-lighter text-blue px-2"/>
                                    </span>
                                    </h6>

                                    <CircleButton>
                                    <FaSave className="useIcon mr-2"/>
                                        done
                                    </CircleButton>
                                </div>
                            </div>

                            <div className="card my-3">
                                <h2 className="text-bright"> Hello from showcased designs</h2>
                                <video src="something"/>
                            </div>
                        </div>

                        <div className="col-3">
                            <div className="card my-3 mx-3">
                                 <CircleButton>Give Feedback</CircleButton>
                            </div>
                        </div>

                    </div>
                </div>  
          
            </Shop>
        )
    }
}
const Shop = styled.div`
.navbar{
    width: 100%;
    hegiht: 10rem;
    position: relative;
    overflow: hidden;
    margin:0.4rem;
}
.cover{
    height: 20rem;
}
.text-white{
    align-self-center;
}
.orderAmount{
    color: var(--mainYellow);
    font-weight: bold;
    padding-left: 0.5rem;
}
.orderPending{
    color: var(--coolRed);
    font-weight: bolder;
    padding-left: 0.5rem;
    font-size: 1rem;
}
.userIcon{
    color: var(--lightBlue);
    margin-right: 0.5rem;
}
.showcasing{
    align-items: left;
    align-self: start;
    padding: 1.5rem 1.5rem;
}
.showcasingBar{
    width: 100%;
    background: var(--lightBlue);
    height: 5rem;
    box-shadow: 0.2rem 0.2rem 0.4rem var(--coolGrey);
}
.pirceInput{
    width: 5rem;
    margin-left: 3rem;
}
.card{
    color: var(--lightBlue);
    align-items:center;
    border: transparent;
    background: var(--mainWhite);
    box-shadow: 0.0rem 0.01rem 0.3rem var(--coolGrey);
}
`