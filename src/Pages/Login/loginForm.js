import { formTypes } from '../../FormComponents';

export const loginForm = [
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
    name: 'confirmPassword',
    type: formTypes.password,
    label: 'Confirm Password',
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
      validate: {
        matchPassword: methods => current => current === methods.getValues('password') || 'Passwords does not match.',
      }
    }
  }
];
