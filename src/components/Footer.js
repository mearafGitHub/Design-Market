import React, { Component } from 'react'
//import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

export default class Footer extends Component {
    render() {
        return (
                <FooterWrapper className="footer footer-dark px-sm-6 mb-0 align-self-bottom">
                <div className="row align-self-center d-flex mx-auto px-5 py-5">
                    <div className="align-items-center mx-auto d-inline-flex">
                        <FaFacebook className="mx-3"/> 
                        <FaTwitter className="mx-3"/> 
                        <FaInstagram className="mx-3"/>
                        <FaLinkedin className="mx-3"/>
                        <FaWhatsapp className="mx-3"/> 
                    </div> 
                </div>
            </FooterWrapper>
        );
    }
}
const FooterWrapper = styled.footer`
background: var(--mainBlue);
color: var(--coolWhite);
width:100%;
align-items:center;
padding: 1.5rem 1.5rem;
border: transparent;
height: 10rem;
`