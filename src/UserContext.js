import React, { Component } from 'react'
import {UserContext} from './Contetxts'

export default class UserContextProvider extends Component {
    state={
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        occupation: '',
        city: '',
        gender: '',
        phone: '',
        bio: ''
    }

    processLogin = (email, password) =>{
        //const getIn = true;
       // return(getIn);
       console.log("Processing LogIn")
    }

    createUser = () =>{
        console.log("Creating User Account")
    }

    render() {
        return (
            <UserContext.Provider value={
                {...this.state, 
                    processLogin:this.processLogin,
                    creatUser:this.createUser
                }
            }>
            {this.props.children}
            </UserContext.Provider>
        )
    }
}
