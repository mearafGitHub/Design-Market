import React from 'react'

export default function Title({name, title}) {
    return (
        <div className = "row my-5 mx-5">
            <div className = "col-10 mx-auto text-center text-title">
                <h2 className = "text-capitalize font-weight-bold"> 
                    <strong className = "text-bright">
                        {name} <span>  </span>
                    </strong> 
                    <strong className = "text-blue">
                        {title}
                    </strong>
                </h2>
            </div>
        </div>
    );
}
