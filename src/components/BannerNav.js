import React, { Component } from 'react'
import styled from 'styled-components'
import { ButtonContainer } from './Button'
import {Link} from 'react-router-dom'



export default class IntroNav extends Component {
    render() {
        return (
            <Explorer>
            <div className="explorer">
                <Link to="/intro" className="nav-item ml-auto">
                    <ButtonContainer>
                        learn more
                    </ButtonContainer>
                </Link> 
                <Link to="/form" className="nav-item ml-auto">
                    <ButtonContainer>
                        sign up | login   
                    </ButtonContainer>
                </Link>
            </div> 
            </Explorer>
        )
    }
}

const Explorer = styled.section`
.explorer{
    color: var(--coolBlue) !important;
    font-size: 1.3rem;
    min-height: 8rem;
    text-transform: capitalize;
    font-family: "Roboto", arial;
    font-weight: bold;
    align-items: center;
    display: flex;
    flex-directon: row
} 

`
