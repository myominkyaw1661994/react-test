import React, { Component } from 'react'

class LoginForm extends Component {
    username = React.createRef();
    state = {
        account: {username: '', password:''}
    } 

    componentDidMount() {
        this.username.current.focus();
    }

    handleSubmit = e => {
        e.preventDefault()
        // const username = this.username.current.value;

        console.log("submitted")
    }

    handleChange = ({ currentTarget: input}) => {
        const account = { ...this.state.account };
        account[input.name] = input.value;
        this.setState({ account });
    }

    render() { 
        return (
            <div className='container'>
                <h1>Login</h1>
                <form className='form' onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor="username">Username</label>
                        <input value={this.state.account.username} onChange={this.handleChange}
                            name="username"
                            ref={this.username} type="text" id="username" className="form-control" />
                    </div>
                     <div className='form-group'>
                        <label htmlFor="password">Password</label>
                        <input value={this.state.account.password}
                            onChange={this.handleChange}
                            name="password"
                            type="text" id="password" className="form-control" />
                    </div>
                    <button className='btn btn-primary'>Login</button>
                </form>
            </div>
        );
    }
}
 
export default LoginForm;