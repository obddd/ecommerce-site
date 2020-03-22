import React, { Component } from 'react';
import './sign-in.style.scss';

class SignIn extends Component {
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:''
        }
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            email:'',
            password: ''
        })
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }
    
    render() {
        return (
            <div className='signin'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <input type='email' name='email' value={this.state.email} onChange={this.handleChange} required />
                    <label>Email</label>
                    <input type='password' name='password' value={this.state.password} onChange={this.handleChange} required /> 
                    <label>Password</label>
                    <input type='submit' value='Submit Form'/> 
                </form>                
            </div>
        );
    }
}

export default SignIn;