import React from 'react'
import styled from 'styled-components'

export default function CustumButton({color, paddingX, paddingY, marginX, 
    marginY, borderRadius,text, icon, fontsize, borderWidth, background,
    shadow }) {
    return (
        <button>
            {text}
        </button>
    )
}

const Button = styled.button`
text-transform: capitalize;
font-size: 0.8rem !important;
background: ${props=>props.background};
border: 0.07rem solid var(--coolBlue);
border-radius: 10rem !important;
color: var(--coolBlue);
padding-left: 1.24rem;
padding-right: 1.24rem;
cursor: pointer;
margin:1.2rem 0.5rem 1.2rem 0.5rem;   
transition: all 0.53s ease-in-out;
box-shadow: 0.0rem 0.0rem 0.5rem var(--coolGrey);
&:hover{
    background: var(--coolBlue);
    color: var(--coolWhite);
    border: none;
    box-shadow: 0.0rem 0.0rem 0.3rem var(--coolGrey);
}
&:focus{
    outline:none;
}
`
