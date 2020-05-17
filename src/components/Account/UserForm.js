import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails'
import Confirm from './Confirm'
import Success from './Success'
import FormPersonalDetails from './FormPersonalDetails'

export class UserForm extends Component {
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
        bio: '',
        firstNameError: '',
        lastNameError: '',
        emailError:'',
        passwordError: '',
        occupationError: '',
        cityError: '',
        genderError: '',
        phoneError: '',
        bioError: ''
    }
    nextStep = () =>{
        // take the step out of the state using distructure
        var { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    previousStep = () =>{
        // take the step out of the state using distructure
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    handleChange = input => e =>{
        this.setState({ [input]: e.target.value });
    };

    render() {
        var {step} = this.state;
        const {firstName, lastName, email, password, occupation, city, gender, phone, bio} = this.state;
        const values = {firstName, lastName, email, password, occupation, city, gender, phone, bio};
        // eslint-disable-next-line default-case
        switch(step){
            case 1: 
            return (
                <FormUserDetails
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                />
            );
            case 2: 
            return( 
                <FormPersonalDetails
                nextStep={this.nextStep}
                previousStep={this.previousStep}
                handleChange={this.handleChange}
                values={values}
                />
            );
            case 3: 
            return( 
                <Confirm
                nextStep={this.nextStep}
                previousStep={this.previousStep}
                values={values}
                />
            );
            case 4: 
            return( <Success/>);
        }
    }
}

export default UserForm;
