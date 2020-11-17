import React from 'react';

const Select = (props) => {
  const {
    name,
    label,
    methods,
    validators,
    error,
    defaultValue,
    options
  } = props;

  return (
    <div className="form-group">
      <label htmlFor="inputState">{label}</label>
      <select
        className={'form-control'.concat(error ? ' is-invalid' : '')}
        id={name}
        name={name}
        ref={methods.register(validators)}>
        <option value="">{defaultValue || 'Select an option'}</option>
        {options.map((value, index) => (<option value={value.value} key={index}>{value.value}</option>))}
      </select>
      {error && <small className="text-danger">{error.message}</small>}
    </div>
  );
};

export default Select;