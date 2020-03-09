import React, { Component } from "react";
import Joi from "joi-browser";
import Input from './input';

class Form extends Component {
  state = {
    data: {},
    errors: {}
  };

  validate = () => {
    const errors = {};
    const { data } = this.state;

    const { error } = Joi.validate(data, this.schema, { abortEarly: false });
    // console.log("result", result)
    if (!error) return null;
    for (let item of error.details) {
      errors[item.path[0]] = item.message;
    }

    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
    // if(name === 'username'){
    //     if(value.trim() === '') return 'Username is required';
    // }
    // if(name === 'password'){
    //     if(value.trim() === '') return 'Password is required';
    // }
  };

  handleSubmit = event => {
    console.log("in submit");
    event.preventDefault();
    // let username = this.username.current.value;

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
    // console.log("username", username);
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMsg = this.validateProperty(input);
    if (errorMsg) errors[input.name] = errorMsg;
    else delete errors[input.name];
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  renderButton = label => {
    return (
      <button disabled={this.validate()} className="btn btn-primary">
        {label}
      </button>
    );
  };

  renderInput = (name, label, type='text') => {
    const { data, errors } = this.state;
    return (
      <Input
        type={type}
        name={name}
        value={data[name]}
        onChange={this.handleChange}
        label={label}
        errors={errors[name]}
      />
    );
  };
}

export default Form;
