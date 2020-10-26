import React from 'react';
import { Section } from '../../Shared';

const Check = (props) => {
  const {
    name,
    label,
    register,
    validators,
    options,
    error,
    display,
  } = props;

  // const id = uid();
  // return (
  //   <div className="form-check">
  //     <input
  //       type="checkbox"
  //       className="form-check-input"
  //       id={id}
  //       name={name}
  //       ref={register(validators)}
  //       value={option.value}
  //     />
  //     <label className="form-check-label" htmlFor={id}>{option.label}</label>
  //   </div>
  // )

  return (
    <div>
      {label && <label>{label}</label>}
      <Section display={display}>
        {options.map((option, i) => (
          <div className="form-check mr-3">
            <input
              type="checkbox"
              className="form-check-input"
              id={i + 'check-input'}
              name={name}
              ref={register(validators)}
              value={option.value}
            />
            <label className="form-check-label" htmlFor={i + 'check-input'}>{option.label}</label>
          </div>
        ))}
      </Section>
      {error &&  <small className="text-danger">{error.message}</small>}
    </div>
  )
};

export default Check;