import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { MyCartButton, LogoutButton } from './Button'
import { FaDoorOpen, FaCartPlus } from 'react-icons/fa';

export default class Navbar extends Component {
    render() {
        return (
                <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-6">
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item ml-5">
                            <Link to="/market" className="nav-link">
                                <h2 className="AppNameText">code 4 job</h2>
                            </Link>
                        </li>
                    </ul>        
                    <Link to="/cart" className="nav-item ml-auto">
                        <MyCartButton >
                            <span className ="mr-2">
                                <FaCartPlus />
                            </span> 
                            my cart   
                        </MyCartButton>
                    </Link> 
                    <Link to="/" className="nav-item ml-auto">
                        <LogoutButton>
                            <span className ="mr-2">
                                <FaDoorOpen />
                            </span>  
                        </LogoutButton>
                    </Link>
            </NavWrapper>
        );
    }
}
const NavWrapper = styled.nav`
    background: var(--lightBlue);
    .nav-link{
        color: var(--coolBlue) !important;
        font-size: 1.3rem;
        text-transform: capitalize;
        font-family: "Roboto", arial;
        font-weight: bold;
    } 
`