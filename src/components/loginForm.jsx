import Joi  from 'joi-browser';
import React, { Component } from 'react'
import Form from './form';
import Input from './input';

class LoginForm extends Form {
    // username = React.createRef();
    state = {
        account: { username: '', password: '' },
        errors: {}
    } 

    componentDidMount() {
        // this.username.current.focus();
    }

    schema = {
        username: Joi.string().required(),
        password: Joi.string().required()
    }

    // validate = () => {

    //     const {error} = Joi.validate(this.state.account, this.schema, { abortEarly : false});

    //     const errors = {}

    //     if (!error) return null;

    //     for (let item of error.details) {
    //         errors[item.path[0]] = item.message;
    //     }

    //     return errors;

        // const { account } = this.state;
        // if (account.username.trim() === '')
        //     errors.username = "Username is required"
        
        // if (account.password.trim() === '')
        //     errors.password = "Password is required"
        
        // return Object.keys(errors).length === 0 ? null : errors;
   // }


    doSubmit = () => {
         console.log("submitted")
    }

    // validateProperty = ({ name, value }) => {
    //     // if (name === 'username') {
    //     //     if (value.trim() === '') return 'Username is required';
    //     // }

    //     // if (name === 'password') {
    //     //     if (value.trim() === '') return 'Password is required';
    //     // }

    //     const obj = { [name]: value };
    //     const schema = { [name]: this.schema[name] };
    //     const { error } = Joi.validate(obj, schema);
    //     return error ? error.details.message : null;
    // }

    // handleChange = ({ currentTarget: input }) => {
    //     const errors = { ...this.state.errors };
    //     const errorMessage = this.validateProperty(input);
    //     if (errorMessage) errors[input.value] = errorMessage;
    //     else delete errors[input.name];

    //     const account = { ...this.state.account };
    //     account[input.name] = input.value;
    //     this.setState({ account, errors });
    // }

    render() { 
        return (
            <div className='container'>
                <h1>Login</h1>
                <form className='form' onSubmit={this.handleSubmit}>
                    <Input name="username" error={this.state.errors.username} label="Username" value={this.state.account.username} onChange={ this.handleChange }/>
                    <Input name="password" error={this.state.errors.password} label="Password" value={this.state.account.password} onChange={this.handleChange}/> 
                    <button disabled={this.validate()} className='btn btn-primary'>Login</button>
                </form>
            </div>
        );
    }
}
 
export default LoginForm;