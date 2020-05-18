import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ButtonContainer } from './Button'
import { FaInfoCircle } from 'react-icons/fa';

export default class PublicNav extends Component {
    render() {
        return (
                <NavWrapper className="navbar navbar-dark px-sm-6">
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item ml-5">
                            <Link to="/" className="nav-link">
                                <h2 className="AppNameText">code 4 job</h2>
                            </Link>
                        </li>
                    </ul>        
                    <Link to="/" className="nav-item ml-auto">
                        <ButtonContainer>
                            <span className ="mr-2">
                                <FaInfoCircle/>
                            </span> 
                            info   
                        </ButtonContainer>
                    </Link> 
            </NavWrapper>
        );
    }
}
const NavWrapper = styled.nav`
    background: var(--coolWhite);
    width: 100%;
    box-shadow: 0.1rem 0.1rem 0.4rem var(--coolGrey);
    
`