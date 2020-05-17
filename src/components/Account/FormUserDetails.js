import React, { Component } from 'react'
import { FormButton } from '../Button'
import { Link } from 'react-router-dom'


export class FormUserDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
                step: 1,
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                formErrors: {
                    firstNameError: '',
                    lastNameError: '',
                    emailError: '',
                    passwordError: '',
                    errorError: ''
                }
            }
            //to keep the state
       // this.handleSubmit = this.handleSubmit.bind(this)
    }

    isValid = (formErrors) => {
        //begin cheking
        let valid = true;
        Object.values(formErrors).forEach( errors => {
            (errors.length >= 0) && (valid = false)
        } );

        return valid;
    }

    handleSubmit = e => {
        e.preventDefault();
        const isValid = this.validate;
        console.log("hello handleSummit() method ")
       if (isValid(this.state.fromError)) {
            console.log(`
            First Name: $ { this.state.firstName }
            Last Name: $ { this.state.lastName }
            email: $ { this.state.email }
            password: $ { this.state.password }
            `
            );
        }
        else{
            console.log("FORM INPUTS ARE INVALID!!");
        }
    }

    handleChange = e =>{
        e.preventDefault();
        console.log(this.state)
        const emailRegExp = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
        const {name, value} = e.target;
        let formErrors =  this.state.formErrors;

        switch(name){
            case "firstName": 
                formErrors.firstNameError = value.length < 3 ? "minmum 3 charachters" : "";
            break;

            case "lastName": 
                formErrors.lastNameError = value.length < 3 ? "minmum 3 charachters" : "";
            break;

            case "email": 
                 formErrors.emailError = emailRegExp.test(value) && value.length < 0 ? "eamil is invalid" : "";
            break;

            case "password": 
            formErrors.passwordError = value.length < 8 ? "minmum 8 charachters" : "";
            break;

            default: 
            break;
        }
        this.setState({formErrors, [name]: value}, ()=>{
            console.log(this.state)
        });
    }


    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const formErrors = {...this.state.formErrors};
        return ( 
            <div className = "wrapper" >
            <div className = "form-wrapper" >
            <h1 className = "form-title"
            align = "center" > Creating Account </h1>   
            <form onSubmit = { this.handleSubmit } >
                <div className = "inlineInputs" >
                <div className = "firstName" >
                <input type = "text"
                className = "firstNameInput"
                placeholder = "First Name"
                name = "firstName"
                onChange = { this.handleChange }
                 /> 
                 {formErrors.firstNameError.length > 0 && (
                     <span className="error-message" >{formErrors.firstNameError}</span>
                 )}
                </div > 
            <div className = "lastName" >
            <input type = "text"
            className = "lastNameInput"
            placeholder = "Last Name"
            name = "lastName"
            onChange = { this.handleChange }   
            />
            {formErrors.lastNameError.length > 0 && (
                <span className="error-message" >{formErrors.lastNameError}</span>
            )}
            </div> 
            </div> 
            <div className = "email" >
            <input type = "email"
            className = "emailInput"
            placeholder = "Email"
            name = "email"
            onChange = { this.handleChange}
            /> 
            {formErrors.emailError.length > 0 && (
                <span className="error-message" >{formErrors.firstName}</span>
            )}
            </div> 
            <div className = "password" >
            <input type = "password"
            className = "passwordInput"
            placeholder = "password"
            name = "password"
            onChange = { this.handleChange }
            />
            {formErrors.passwordError.length > 0 && (
                <span className="error-message" >{formErrors.passwordError}</span>
            )}
            </div> 
            <div className = "password" >
            <input type = "password"
                className = "passwordInput"
                placeholder = "confirm password"
                name = "password"
                onChange = { this.handleChange }
            /> 
            {formErrors.passwordError.length > 0 && (
                <span className="error-message" >{formErrors.passwordError}</span>
            )}
            </div> 
            <div >
            <label className = "agreement text-blue" >
            <input type = "radio"
                className = "agreementInput"
                value = "agreement"
                name = "agreement"
                checked={true}
                onChange = { this.handleChange }
            /> 
            {formErrors.passwordError.length > 0 && (
                <span className="error-message" >{formErrors.passwordError}</span>
            )}
            Agree in the <span><Link to="/terms-and-policy">Terms and Policy. Learn more.</Link></span>
            </label>
            </div>
            <div className = "createAccount" >
            
            <small >
            <Link className = "nav-item ml-auto"
            to = "/login">
            Already have an account ?
            </Link> </small> 
            <FormButton onClick={this.continue}>
            continue 
            </FormButton> 
            </div > 
            </form> 
            </div > 
            </div>  
        )
    }
}

export default FormUserDetails