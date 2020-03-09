import React, { Component } from "react";
import Form from "./form";
import Joi from "joi-browser";

class Register extends Form {
  state = {
    data:{ username: "", password: "", name: ""},
    errors:{},
  } 

  schema = {
    username: Joi.string().email({minDomainAtoms:2}).required(),
    password: Joi.string().min(5).required(),
    name: Joi.string().required()
  };

  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default Register;
