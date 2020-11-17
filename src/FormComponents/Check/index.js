import React from 'react';
import { Section } from '../../Shared';
import uid from 'uid';

const Check = (props) => {
  const {
    name,
    label,
    validators,
    methods,
    options,
    error,
    display,
  } = props;

  return (
    <div>
      {label && <label>{label}</label>}
      <Section display={display}>
        {options.map((option, i) => {
          const id = uid();
          return (
            <div key={i} className="form-check mr-3">
              <input
                type="checkbox"
                className="form-check-input"
                id={id}
                name={name}
                ref={methods.register(validators)}
                value={option.value}
              />
              <label className="form-check-label" htmlFor={id}>{option.label}</label>
            </div>
          )
        })}
      </Section>
      {error &&  <small className="text-danger">{error.message}</small>}
    </div>
  )
};

export default Check;