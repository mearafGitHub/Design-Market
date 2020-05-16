import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ButtonContainer } from './Button'
import { FaCartPlus } from 'react-icons/fa';

export default class PublicNav extends Component {
    render() {
        return (
                <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-6">
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item ml-5">
                            <Link to="/public" className="nav-link">
                                <h2 className="AppNameText">code 4 job</h2>
                            </Link>
                        </li>
                    </ul>        
                    <Link to="/cart" className="nav-item ml-auto">
                        <ButtonContainer>
                            <span className ="mr-2">
                                <FaCartPlus />
                            </span> 
                            info   
                        </ButtonContainer>
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