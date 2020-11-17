import React from 'react';
import uid from 'uid';

const Input = (props) => {
  const {
    type,
    name,
    label,
    methods,
    validators,
    placeholder,
    error,
  } = props;

  const id = uid();
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        className={'form-control'.concat(error ? ' is-invalid' : '')}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        ref={methods.register(validators)}/>
      {error &&  <small className="text-danger">{<error className="message"></error>}</small>}
    </div>
  )
};

export default Input;