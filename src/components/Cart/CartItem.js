import React from 'react'
import {CircleButton} from '../Button'
import { FaTrash } from 'react-icons/fa';

export default function CartItem({designItem, value}) {
    const{id, img, title, price, total, count} = designItem;
    const{increament, decreament, removeItem} = value;

    return (
        <div className="row text-center text-capitalize ">
            <div className="col-10 mx-auto my-2 col-lg-2">
                <img src={img} 
                className="img-fluid" 
                style={{ width:"7rem", height:"7rem" }} 
                alt="design" />
            </div>
            <div className="col-10 mx-auto col-lg-2 text-blue">
                <span className="d-lg-none"> Design: </span>
                {title}
            </div>
            <div className="col-10 mx-auto col-lg-2 text-bright">
                <span className="d-lg-none"> Price: $</span>
                {price}
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <span>
                    <CircleButton onClick={()=>{decreament(id)}}>
                        <span> - </span>
                    </CircleButton>
                </span>
                <span>
                    <CircleButton>
                        <span> {count} </span>
                    </CircleButton>
                </span>
                <span>
                    <CircleButton onClick={()=>{increament(id)}}>
                        <span> + </span>
                    </CircleButton>
                </span>
          
            </div>
        
            <div className="col-10 mx-auto col-lg-2 text-danger "  onClick={()=>{removeItem(id)}}>
                <FaTrash  styel={{color:"var(--coolRed)"}}/> 
            </div>
            <div className="col-10 mx-auto col-lg-2 text-blue">
                <span> total: ${total} </span>
            </div>
    </div>
    );
}
/*
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
*/