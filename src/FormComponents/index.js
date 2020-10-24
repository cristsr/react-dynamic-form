import React from 'react';
import Select from './Select';
import Input from './Input';
import Radio from './Radio';

export const componentsRegistry = {
  select: Select,
  text: Input,
  email: Input,
  password: Input,
  radio: Radio,
};

export const formTypes = {
  select: 'select',
  text: 'text',
  password: 'password',
  radio: 'radio',
}

const Switch = ({ type, ...rest }) => {
  const Component = componentsRegistry[type];
  return <Component {...rest}/>;
}

export default Switch;
