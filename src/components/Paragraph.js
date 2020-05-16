import React from 'react'
import styled from 'styled-components';

export default function Paragraf({content}) {
    return (
        <div className = "row">
            <div className = "col-8 mx-auto text-center "> 
                    <p className = "text-weight-lighter ">
                        {content} <span>  </span>
                    </p> 
            </div>
        </div>
    );
}
export function CartDiscreption({content}) {
    return (
        <Discription>
            <div className = "col-8 mx-auto text-center "> 
                    <p className = "align-self-center mb-0 font-weight-lighter">
                        {content} 
                    </p> 
            </div>
        </Discription>
    );
}

const Discription = styled.div`
text-weight: lighter;
color: var(--mainDark);
`