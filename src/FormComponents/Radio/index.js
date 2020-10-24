import React from 'react';
import uid from 'uid';

uid();

const Radio = (props) => {
  // console.log('[INPUT PROPS]', props)
  const {
    name,
    label,
    register,
    validators,
    options,
    error,
  } = props;

  return (
    <div className="form-group">
      <label>{label}</label><br/>
      {options.map((option, i) => (
        <div className="form-check" key={i}>
          <input
            className="form-check-input"
            type="radio"
            name={name}
            id={i}
            ref={register(validators)}
            value={option.value}/>
          <label className="form-check-label" htmlFor={i}>
            {option.label}
          </label>
        </div>
      ))}
      {error &&  <small className="text-danger">{error.message}</small>}
    </div>
  )
};

export default Radio;