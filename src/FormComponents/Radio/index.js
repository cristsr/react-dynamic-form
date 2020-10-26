import React from 'react';
import { Section } from '../../Shared';

const Radio = (props) => {
  // console.log('[INPUT PROPS]', props)
  const {
    name,
    label,
    register,
    validators,
    options,
    error,
    display,
  } = props;

  return (
    <div className="form-group">
      <label>{label}</label><br/>
      <Section display={display}>
        {options.map((option, i) => (
          <div key={i} className="form-check mr-3">
            <input
              className="form-check-input"
              type="radio"
              name={name}
              id={i + 'radio-input'}
              ref={register(validators)}
              value={option.value}/>
            <label className="form-check-label" htmlFor={i + 'radio-input'}>
              {option.label}
            </label>
          </div>
        ))}
      </Section>
      {error && <small className="text-danger">{error.message}</small>}
    </div>
  )
};

export default Radio;