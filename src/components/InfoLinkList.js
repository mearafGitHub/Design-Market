import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components';

export default function InfoLinkListItem({name, link}) {
    return (
        <Link to={link}> 
        <InfoLinkItem className="row">
            <div className = "col-11 text-center text-bright">
                <h5 className = "text-capitalised font-weight-lighter"> 
                    {name} 
                </h5>
            </div>
        </InfoLinkItem>
        </Link> 
    );
}
const InfoLinkItem = styled.ul`
height: 2rem;
width: auto;
display: flex;
border-radius: 0.56rem;
flex-direction: column;
padding: 0.3rem 0.3rem;
margin: 1.2rem 0.3rem;
background-color: var(--coolWhite);
box-shadow: 0.0rem 0.0rem 0.7rem var(--coolGrey);
`