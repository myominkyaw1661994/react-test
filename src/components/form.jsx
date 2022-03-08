import React, { Component } from 'react';
import  Joi  from 'joi-browser';

class Form extends Component {
    state = { 
        data: {},
        errors: {}
    }

    validate = () => {
        const {error} = Joi.validate(this.state.account, this.schema, { abortEarly : false});
        const errors = {}
        if (!error) return null;
        for (let item of error.details) {
            errors[item.path[0]] = item.message;
        }
        return errors;
    }


    validateProperty = ({ name, value }) => {
        const obj = { [name]: value };
        const schema = { [name]: this.schema[name] };

        const { error } = Joi.validate(obj, schema);
        return error ? error.details.message : null;
    }


    handleSubmit = e => {
        e.preventDefault()
        // const username = this.username.current.value;

        const errors = this.validate();
        this.setState({ errors: errors || {} });

        if (errors) return;

        this.doSubmit();
    }

    handleChange = ({ currentTarget: input }) => {
        const errors = { ...this.state.errors };
        const errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        const data = { ...this.state.account };
        data[input.name] = input.value;
        this.setState({ account: data, errors });
    }

     
}
 
export default Form;