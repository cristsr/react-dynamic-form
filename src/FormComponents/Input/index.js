import React from 'react';

const Input = (props) => {
  // console.log('[INPUT PROPS]', props)
  const {
    type,
    name,
    label,
    register,
    validators,
    placeholder,
    error,
    methods,
  } = props;

  // if (validators.validate) {
  //   const fn = validators.validate;
  //   validators.validate = v => fn(v, methods);
  // }

  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        className={'form-control'.concat(error ? ' is-invalid' : '')}
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        ref={register(validators)}/>
      {error &&  <small className="text-danger">{error.message}</small>}
    </div>
  )
};

export default Input;