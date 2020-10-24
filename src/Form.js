import React from 'react';
import { useForm } from 'react-hook-form';
import Switch from './FormComponents';

const formTypes = {
  text: 'text',
  email: 'email',
  number: 'number',
  password: 'password',
  select: 'select',
  radio: 'radio',
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
    defaultValue: 'Select an option',
    display: 'row',
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
]

const Form = () => {
  const { register, handleSubmit, errors } = useForm({mode: 'onChange'});
  const onSubmit = data => console.log('[DATA]', data);
  console.log('ERRORS', errors);

  const inputs = configModel.map(({type, ...value}, index) => {
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
      error: getCurrentError()
    }

    return <Switch key={index} type={type} {...props }/>
  })

  return (
    <div className="col-md-4 my-5 mx-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        {inputs}
        <input type="submit" />
      </form>
    </div>
  );
};

export default Form;