import React, { Component } from "react";

const Input = ({name, label, errors, ...rest}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        {...rest}
        name={name}
        id={name}
        autoFocus={label === 'Username' || ''}
        className="form-control"
      />
      {errors && <div className="alert alert-danger"><small>{errors}</small></div>}
    </div>
  );
};

export default Input;
