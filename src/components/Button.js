import styled from 'styled-components'

export const ButtonContainer = styled.button`
    text-transform: capitalize;
    font-size: 1.2rem;
    background: transparent;
    border: 0.03rem solid var(--lightBlue);
    border-radius: 5rem;
    color: var(--lightBlue);
    padding-left: 1.24rem;
    padding-right: 1.24rem;
    cursor: pointer;
    margin:1.2rem 0.5rem 1.2rem 0.5rem; 
    box-shadow: 0.0rem 0.0rem 0.4rem var(--lightBlue);  
    transition: all 0.53s ease-in-out;
    &:hover{
        background: var(--lightBlue);
        color: var(--coolWhite);
        box-shadow: 0.0rem 0.0rem 0.3rem var(--lightBlue);
    }
    &:focus{
        outline:none;
    }
`


export const FormButton = styled.button`
    text-transform: capitalize;
    font-size: 1.2rem;
    background: transparent;
    border: 0.03rem solid var(--coolBlue);
    border-radius: 3.9rem;
    color: var(--coolBlue);
    padding-left: 1.24rem;
    padding-right: 1.24rem;
    margin-left: 1.24rem;
    margin-right: 1.24rem;
    cursor: pointer;
    margin:1.2rem 0.5rem 1.2rem 0.5rem;   
    transition: all 0.53s ease-in-out;
    box-shadow: 0.0rem 0.0rem 0.3rem var(--coolGrey);
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

export const MyCartButton = styled.button`
    text-transform: capitalize;
    font-size: 1.2rem;
    background: var(--coolBlue);
    color: var(--coolWhite);
    padding-left: 1.24rem;
    padding-right: 1.24rem;
    cursor: pointer; 
    border-radius: 5rem 5rem 5rem 5rem;
    border: 0.03rem solid var(--coolBlue);
    transition: all 0.44s ease-in-out;
    box-shadow: 0.0rem 0.0rem 0.3rem var(--coolBlue);
    &:hover{
        background: var(--mainYellow);
        color: var(--coolWhite);
        transition: all 0.44s ease-in-out;
        box-shadow: 0.0rem 0.0rem 0.3rem var(--mainYellow);
        border: none;
    }
    &:focus{
        outline:none;
    }
`

export const CardButton = styled.button`
    text-transform: capitalize;
    font-size: 1.2rem;
    background: var(--mainYellow);
    color: var(--coolWhite);
    padding-left: 1.24rem;
    padding-right: 1.24rem;
    cursor: pointer; 
    border-radius: 5rem 5rem 0rem 5rem;
    border: 0.03rem solid var(--mainYellow);
    transition: all 0.44s ease-in-out;
    box-shadow: 0.0rem 0.0rem 0.3rem var(--mainYellow);
    &:hover{
        background: var(--mainYellow);
        color: var(--coolWhite);
        transition: all 0.44s ease-in-out;
        box-shadow: 0.0rem 0.0rem 0.3rem var(--mainYellow);
        border: none;
    }
    &:focus{
        outline:none;
    }
`


export const CardButtonBlue = styled.button`
    text-transform: capitalize;
    font-size: 1.4rem;
    background: var(--lightBlue);
    color: var(--coolWhite);
    padding-left: 1.24rem;
    padding-right: 1.24rem;
    cursor: pointer; 
    border-radius: 0rem 15rem 15rem 15rem;
    border: 0.03rem solid var(--lightBlue);
    transition: all 0.44s ease-in-out;
    box-shadow: 0.0rem 0.0rem 0.3rem var(--lightBlue);
    &:hover{
        background: var(--mainYellow);
        color: var(--coolWhite);
        transition: all 0.44s ease-in-out;
        box-shadow: 0.0rem 0.0rem 0.3rem var(--lightBlue);
        border: none;
    }
    &:focus{
        outline:none;
    }
`
export const LogoutButton = styled.button`
    text-transform: capitalize;
    font-size: 1.2rem;
    background: var(--lightGreen);
    color: var(--coolWhite);
    padding-left: 1rem;
    padding-right: 1rem;
    cursor: pointer; 
    border-radius: 5rem 5rem 0rem 5rem;
    border: 0.03rem solid var(--lightGreen);
    transition: all 0.44s ease-in-out;
    box-shadow: 0.0rem 0.0rem 0.3rem var(--lightGreen);
    &:hover{
        background: var(--coolBlue);
        color: var(--coolWhite);
        border: 0.03rem solid var(--lightGreen);
        transition: all 0.44s ease-in-out;
        box-shadow: 0.0rem 0.0rem 0.3rem var(--coolBlue);
        border: none;
    }
    &:focus{
        outline:none;
    }
`

export const RedButton = styled.button`
    text-transform: capitalize;
    font-size: 1.4rem;
    background: var(--coolRed);
    color: var(--coolWhite);
    padding-left: 1.24rem;
    padding-right: 1.24rem;
    cursor: pointer;   
    border-radius: 3rem;
    border: 0.05rem solid var(--coolRed);
    transition: all 0.44s ease-in-out;
    box-shadow: 0.0rem 0.0rem 0.3rem var(--coolRed);
    &:hover{
        background: var(--coolRed);
        color: var(--coolWhite);
        transition: all 0.44s ease-in-out;
        box-shadow: 0.0rem 0.0rem 0.3rem var(--coolGrey);
        border: 0.2rem solid var(--coolRed);
    }
    &:focus{
        outline:none;
    }
`  

export const CircleButton = styled.button`
    text-transform: capitalize;
    font-size: 0.8rem !important;
    background: transparent;
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
