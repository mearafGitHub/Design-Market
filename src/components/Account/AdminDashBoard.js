import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {CircleButton} from '../Button'
import PublicNav from '../PublicNav'
import {Link} from 'react-router-dom'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import {FaUser, FaBriefcase, FaHome, FaSave, FaTrash, FaInfo, FaSearch, FaQuestion} from 'react-icons/fa'


export default class AdminDashBoard extends Component {
    static propTypes = {
        prop: PropTypes
    }
    render() {
        return (
            <Shop>
                <PublicNav/>
                <div className="row align-self-center d-flex mx-auto px-5">
                    <div className="align-self-center mx-auto">
                    <Link to="/market">
                        <CircleButton>
                            <FaHome className="useIcon mr-2"/>
                            Market
                        </CircleButton>
                    </Link>     
                        <CircleButton>Purchasers</CircleButton> 
                        <CircleButton>Designers</CircleButton>
                    
                        <CircleButton>
                            <FaQuestion className="useIcon mr-2"/>
                            New Requests
                            <span className="amount">11</span>
                        </CircleButton>
                            <CircleButton>
                            <FaInfo className="useIcon mr-2"/>
                            New Orders
                            <span className="amount">34</span>
                        </CircleButton>  
                    </div> 
                </div>

                <div className="mx-5">
                    <div className="row d-flex">
                        <div className="col-3">
                            <div className="card my-3">
                                <div className="showcasing">
                                     <h5 className="text-bright"> 
                                        <FaUser className="useIcon mr-2"/> 
                                        Admin
                                    </h5>
                                    <h5 className="text-bright"> 
                                        <FaBriefcase className="useIcon mr-2"/> 
                                        Platform Manager
                                    </h5>
                                </div>
                            </div>

                            <div className="card my-4">
                                 <CircleButton>
                                    <FaSearch className="useIcon mr-2"/>
                                    search user
                                </CircleButton> 
                                 <CircleButton>
                                    <FaTrash className="useIcon mr-2"/>
                                    send waring                                    
                                </CircleButton> 
                                <CircleButton>
                                    <FaTrash className="useIcon mr-2"/>
                                    delete user
                                </CircleButton> 
                            </div>
                        </div>

                        <div className="col-8">
                            <div className="card my-3 ">
                                <div className="showcasingBar">
                                    <h4 className="text-white align-center mt-4 ml-3">
                                    Pending new account request user deatail
                                    </h4>
                                </div>
                                <div className="showcasing">
                                    
                                <List>
                                    <ListItem>
                                        <h6 className="text-blue">First Name: </h6> 
                                        <h5 className="text-bright"> firstName</h5>
                                    </ListItem>
                                    <ListItem>
                                            <h6 className="text-blue">Last Name: </h6> 
                                            <h5 className="text-bright"> lastName</h5>
                                    </ListItem>
                                    <ListItem>
                                            <h6 className="text-blue">Email: </h6> 
                                            <h5 className="text-bright"> email</h5>
                                    </ListItem>
                                    <ListItem>
                                            <h6 className="text-blue">Account Type: </h6> 
                                            <h5 className="text-bright"> Type</h5>
                                    </ListItem>
                                    <ListItem>
                                        <h6 className="text-blue"> City: </h6>
                                        <h5 className="text-bright"> city</h5>
                                    </ListItem>
                                    <ListItem>
                                        <h6 className="text-blue">Phone: </h6>
                                        <h5 className="text-bright"> phone</h5>
                                    </ListItem>
                                    <ListItem>
                                        <h6 className="text-blue">Gender: </h6> 
                                        <h5 className="text-bright"> gender</h5>
                                    </ListItem>
                                    <ListItem>
                                        <h6 className="text-blue">Bio: </h6> 
                                        <h5 className="text-bright"> bio</h5>
                                    </ListItem>

                                    <CircleButton>
                                        <FaSave className="useIcon mr-2"/>
                                        Approve
                                    </CircleButton>
                                    <CircleButton>
                                        <FaTrash className="danger mr-2"/>
                                        Dismis
                                    </CircleButton>
                                </List>
                                </div>
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
    hegiht: 8rem;
    position: relative;
    overflow: hidden;
    margin:0.4rem;
}
.text-white{
    align-self-center;
}
.amount{
    color: var(--mainYellow);
    font-weight: bolder;
    padding-left: 0.5rem;
    font-size: 0.8rem;
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