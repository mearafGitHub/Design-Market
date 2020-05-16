import React, { Component } from 'react'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import {FormButton} from '../Button'
import { Form } from '../Form'

export  class FormPersonalDetails extends Component {
   
    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    }
    previuos = e =>{
       // e.preventDefault();
        this.props.previousStep();
    }

    render() {
        var { values, handleChange } = this.props;  
        return (
            <MuiThemeProvider>
               <React.Fragment>
                    <Form>    
                    <div className="wrapper">
                        <div className="form-wrapper">
                            <h1 className="form-title" align="center">Personal Details</h1>
                            <form onSubmit={this.handleSubmit } > 
                                <div className="inlineInputs">
                                    <div className="occupation">
                                        <input type="text" 
                                            className="occupationInput" 
                                            placeholder="Occupation" 
                                            name="occupation" 
                                            onChange = {handleChange('occupation')}
                                            defaultValue = {values.occupation} 
                                        />
                                    </div>
                                    <div className="city">
                                        <input type="text" 
                                            className="cityInput" 
                                            placeholder="City"  
                                            name="city" 
                                            onChange = {handleChange('city')}
                                            defaultValue = {values.city}
                                        />
                                    </div>
                                </div>
                                <div className="inlineInputs">
                                    <div className="phone">
                                    <input type="phone" 
                                        className="phoneInput" 
                                        placeholder="Phone" 
                                        name="phone" 
                                        onChange = {handleChange('phone')}
                                        defaultValue = {values.phone}
                                    />
                                    </div>
                                    <div className="gender">
                                    <input type="text" 
                                        className="genderInput" 
                                        placeholder="Gender" 
                                        name="gender" 
                                        onChange = {handleChange('gender')}
                                        defaultValue = {values.gender}
                                    />
                                    </div>
                                </div>
                                <div className="bio">
                                    <input type="text" 
                                        className="bioInput" 
                                        placeholder="Bio (breif bio.)"
                                        name="bio"
                                        onChange = {handleChange('bio')}
                                        defaultValue = {values.bio}
                                    />
                                </div>
                                <div className="createAccount row">
                                    <FormButton onClick={this.previuos}>
                                        back
                                    </FormButton>
                                    <FormButton onClick={this.continue}>
                                        continue
                                    </FormButton>
                                   
                                </div>
                            </form>
                        </div>
                    </div>
                </Form>
               </React.Fragment>
            </MuiThemeProvider>
        )
    }
}
 
export default FormPersonalDetails


