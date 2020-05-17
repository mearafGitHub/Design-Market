import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {FormButton} from '../Button'
import styled from 'styled-components'
import PublicNav from '../PublicNav'
import {FaHome} from 'react-icons/fa'

export default class Success extends Component {
    render() {
        return (
            <React.Fragment>
            <PublicNav/>
            
                <SuccessContainer>
                    <div className="explain row align-self-center d-flex mx-auto px-5 py-5 my-auto">
                    <div className="row align-content-center">
                    <div className="col mx-auto">
                    <div className="card my-3 mr-0">
                    <h2 className="form-title-success mx-auto px-5 py-5 my-auto">  
                    Successfuly Created Reaquest for Account!</h2>
                    <h4 className="text-bright mx-auto px-5 my-auto">  
                    You will receive an approval email from our team.
                    </h4>
                    <div className="row align-self-center d-flex mx-auto pt-5">
                        <div className="col-10 d-flex">
                            <Link to="/">
                            <FormButton>
                                <FaHome/>
                            </FormButton>
                            </Link>
                            <Link to="/">
                            <FormButton >
                                explore
                            </FormButton>
                            </Link>
                        </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>

                    
                </SuccessContainer>
              
            
            </React.Fragment>
        )
    }
}

const SuccessContainer = styled.div`
display: flex;
flex-direction: row;
align-self:middle;
align-items: center;
.card{
    align-self:center;
    align-items:center;
    padding: 1.5rem 1.5rem;
    border: transparent;
    background: var(--mainWhite);
    box-shadow: 0.0rem 0.05rem 0.9rem var(--coolGrey);
}
`
