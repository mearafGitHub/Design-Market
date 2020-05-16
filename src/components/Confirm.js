import React, { Component } from 'react'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import {FormButton} from './Button'
import { Form } from './Form'
import styled from 'styled-components'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'


export default class Confirm extends Component {
   
    continue = e =>{
        // Now, here process this form
        // send data to api, etc...
        e.preventDefault();
        this.props.nextStep();
    }
    previuos = e =>{
       // e.preventDefault();
        this.props.previousStep();
    }

    render() {
        var { values: {firstName, lastName, email, occupation, city, phone, gender, bio} } = this.props;  
        return (
            <MuiThemeProvider>
               <React.Fragment>
                    <Form>    
                    <div className="wrapper">
                        <div className="form-wrapper">
                            <h1 className="form-title" align="center">Confirm Your Info</h1>
                            <form onSubmit={this.handleSubmit } > 
                            <confirmWrapper>
                                <List >
                                    <ListItem >
                                        <h6 className="text-blue">First Name: </h6> 
                                        <h5 className="text-bright"> {firstName}</h5>
                                    </ListItem>
                                    <ListItem
                                        primaryText="Last Name"
                                        secondaryText={lastName} >
                                            <h6 className="text-blue">Last Name: </h6> 
                                            <h5 className="text-bright"> {lastName}</h5>
                                    </ListItem>
                                    <ListItem
                                        primaryText="Email"
                                        secondaryText={email} >
                                            <h6 className="text-blue">Email: </h6> 
                                            <h5 className="text-bright"> {email}</h5>
                                    </ListItem>
                                    <ListItem
                                        primaryText="Occupation"
                                        secondaryText={occupation} >
                                            <h6 className="text-blue">Occupation: </h6> 
                                            <h5 className="text-bright"> {occupation}</h5>
                                    </ListItem>
                                    <ListItem
                                        primaryText="City"
                                        secondaryText={city} >
                                        <h6 className="text-blue">City: </h6>
                                        <h5 className="text-bright"> {city}</h5>
                                    </ListItem>
                                    <ListItem
                                        primaryText="Phone"
                                        secondaryText={phone} >
                                        <h6 className="text-blue">Phone: </h6>
                                        <h5 className="text-bright"> {phone}</h5>
                                    </ListItem>
                                    <ListItem >
                                        <h6 className="text-blue">Gender: </h6> 
                                        <h5 className="text-bright"> {gender}</h5>
                                    </ListItem>
                                    <ListItem
                                        primaryText="Bio"
                                        secondaryText={bio} >
                                        <h6 className="text-blue">Bio: </h6> 
                                        <h5 className="text-bright"> {bio}</h5>
                                    </ListItem>

                                    <div className="createAccount row">
                                    <FormButton onClick={this.previuos} >
                                      back
                                    </FormButton>
                                    <FormButton onClick={this.continue}>
                                        confirm
                                    </FormButton>
                                </div>
                                </List>
                                </confirmWrapper>
                              
                            </form>
                        </div>
                    </div>
                </Form>
               </React.Fragment>
            </MuiThemeProvider>
        )
    }
}
 
const confirmWrapper = styled.ul`
.confirm-values{
    color: var(--coolBlue) !important;
    text-transform: capitalize;
    font-family: "Roboto", arial;
    font-weight: bold;
    font-size: 1.1em;
    font-weight: lighter;
}
h6{
    color: var(--mainDark) !important;
    text-transform: capitalize;
    font-family: "Roboto", arial;
    font-weight: bold;
    font-size: 1.1em;
    font-weight: lighter;
}

`


