import React, { useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import Switch from './FormComponents';

const formTypes = {
  text: 'text',
  email: 'email',
  number: 'number',
  password: 'password',
  select: 'select',
  radio: 'radio',
  check: 'check',
}

const configModel = [
  {
    name: 'email',
    type: formTypes.text,
    label: 'Email address',
    placeholder: 'Enter your email',
    validators: {
      required: {
        value: true,
        message: 'Name is required.'
      },
      maxLength: {
        value: 50,
        message: 'The entered value exceeds the allowed size.',
      },
      minLength: {
        value: 5,
        message: 'The entered name is too short.',
      },
    }
  },
  {
    name: 'password',
    type: formTypes.password,
    label: 'Password',
    placeholder: 'Enter your password',
    validators: {
      required: {
        value: true,
        message: 'Password is required.'
      },
      maxLength: {
        value: 20,
        message: 'The entered value exceeds the allowed size.',
      },
      minLength: {
        value: 5,
        message: 'The entered value is too short.',
      },
    }
  },
  {
    name: 'gender',
    type: formTypes.select,
    label: 'Select your gender',
    defaultValue: 'Select an option',
    validators: {
      required: {
        value: true,
        message: 'Gender is required.'
      }
    },
    options: [
      {value: 'Male'},
      {value: 'Female'},
    ]
  },
  {
    name: 'genderRadio',
    type: formTypes.radio,
    label: 'Select your gender',
    // display: 'row',
    validators: {
      required: {
        value: true,
        message: 'Gender is required.'
      }
    },
    options: [
      {
        value: 'male',
        label: 'Male'
      },
      {
        value: 'female',
        label: 'Female'
      },
    ]
  },
  {
    name: 'hobbies',
    type: formTypes.check,
    label: 'Select your gender',
    display: 'row',
    validators: {
      required: {
        value: true,
        message: 'Hobbies is required.'
      }
    },
    options: [
      {
        value: 'play guitar',
        label: 'PlayGuitar'
      },
    ]
  },
]

const createValidators = (conf, formState) => {
  if (!conf.validate) {
    return conf;
  }

  const validate = Object.keys(conf.validate)
    .map(key => ({
      key,
      fn: conf.validate[key](formState)
    }))
    .reduce((acc, curr) => ({...acc, [curr.key]: curr.fn}), {});

  return {
    ...conf,
    validate
  }
}


const Form = ({config}) => {
  const  methods = useForm({mode: 'onChange'});
  const { register, handleSubmit, errors, getValues } = methods;
  const onSubmit = data => console.log('[DATA]', data);
  console.log('ERRORS', errors);
  console.log('[VALUES]', getValues())

  const inputs = config.map(({type, ...value}, index) => {

    const validators = createValidators(value.validators, methods);

    const getCurrentError = () => {
      if (Object.keys(errors).length === 0) {
        return false;
      }

      if (!errors[value.name]) {
        return false;
      }

      return errors[value.name]
    }

    const props = {
      ...value,
      register,
      methods,
      validators,
      error: getCurrentError()
    }

    return <Switch key={index} type={type} {...props }/>
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {inputs}
      <input type="submit" />
    </form>

  );
};

export default Form;