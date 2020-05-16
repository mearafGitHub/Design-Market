import React, { Component } from 'react'
import {Form} from './Form'
import {Link} from 'react-router-dom'
import {FormButton} from './Button'
import styled from 'styled-components'
import Navbar from './Navbar'

export default class Success extends Component {
    render() {
        return (
            <React.Fragment>
            <Navbar/>
            <Form>
                <SuccessContainer>
                    <h3 className="form-title-success" align="center">
                        Successfuly Created Your Account!
                        <Link to="/login">
                            <FormButton >
                                goto login
                            </FormButton>
                        </Link>
                        <Link to="/public">
                            <FormButton >
                                Back
                            </FormButton>
                        </Link>
                    </h3>
                </SuccessContainer>
            </Form>
            </React.Fragment>
        )
    }
}

const SuccessContainer = styled.ul`
display: flex;
flex-direction: row;
align-items: center;
`
