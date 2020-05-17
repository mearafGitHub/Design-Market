import React, { Component } from 'react'
import { FormButton } from '../Button'
import { Form } from '../Form'
import {Link} from 'react-router-dom'
import PublicNav from '../PublicNav'

export default class Login extends Component {
    
constructor(props){
    super(props);

    this.state={
        email: '',
        password: '',
        formErrors:{
            email:"",
            password: "",
            error: ""
        }
    }
}
processLogin = e=>{
    e.preventDefault();
    //TODO: authentication Logic here <Link to="/">  </Link> 
}
render() {
    return (
        <React.Fragment>
        <PublicNav />
        <Form>    
        <div className="wrapper">
            <div className="form-wrapper">
                <h1 className="form-title" align="center">Login</h1>
                <form onSubmit={this.handleSubmit } > 
                    <div className="email">
                        <input type="email" 
                            className="emailInput" 
                            placeholder="Email"
                            name="email" 
                            onChange={this.handleChange} 
                        />
                    </div>
                    <div className="password">
                        <input type="password" 
                            className="passwordInput" 
                            placeholder="Password" 
                            name="password" 
                            onChange={this.handleChange} 
                        />
                    </div>
                    <Link to ="/market">
                    <div className="Login">
                        <FormButton >
                            Login
                        </FormButton>
                        <small>
                        <Link  className="nav-item ml-auto" to="/form">
                             You don't have an account?
                        </Link> 
                        </small>
                    </div>
                   </Link>
                </form>
            </div>
        </div>
    </Form>
    </React.Fragment>
    )
}
}
