import styled from 'styled-components'

export const Form = styled.form`
.wrapper{
    height: 42.2rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--coolWhite);
  }
  .form-wrapper{
    height: auto;
    width: 34rem;
    display: flex;
    border-radius: 1.2rem;
    flex-direction: column;
    padding: 1rem 1.6rem;
    margin: 0.3rem 2rem;
    background-color: var(--coolWhite);
    box-shadow: 0.5rem 0.5rem 5.9rem var(--coolGrey);
  }
  form{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .form-title{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.5rem 0.5rem;
    margin: 0.9rem 0.3rem;
    color: var(--coolBlue);
  }
 
  input{
    border: 0.08rem solid var(--mainWhite);
    background-color: var(--coolWhite);
    outline-color: var(--lightGreen);
    padding: 0.3rem 0.3rem;
    border-radius: 0.3rem;
  }
  input::placeholder{
    font-size: 1.1em;
    font-weight: lighter;
    color: var(--coolGrey);
  }
  input.error{
    border: 0.1rem solid var(--coolRed);
  }
  .inlineInputs{
    display: inline-flex;
    flex-direction: row;
    width: auto;
  }
  .firstName,
  .lastName,
  .email,
  .password,
  .occupation,
  .city,
  .bio,
  .phone,
  .gender{
    display: flex;
    margin-top: 0.1rem;
    margin-left:  0.1rem;
    margin-right: 0.1rem;
    margin-bottom: 0.19rem;
  }
  .firstName,
  .lastName,
  .phone,
  .gender,
  .city,
  .occupation{
    width: 49%; 
  }
  .firstName,
  .occupation,
  .phone{
    margin-right: 1%;
  }
  .lastName,
  .city,
  .gender{
    margin-left: 1%;
  }
  .email,
  .password,
  .bio,
  .emailInput,
  .passwordInput,
  .bioInput
  {
    width: 100%;
  }  
  .errorMessage{
    color: var(--coolRed);
    display: relative;
    font-size: 1em;
    font-weight: lighter;
  }
  .createAccount{
    justify-content: center;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    margin-top: 0.7rem;
    margin-left:  0.1rem;
    margin-right: 0.1rem;
    margin-bottom: 0.19rem;
  }
`