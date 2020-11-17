import Select from './Select';
import Input from './Input';
import Radio from './Radio';
import Check from './Check';

export const componentsRegistry = {
  select: Select,
  text: Input,
  email: Input,
  password: Input,
  radio: Radio,
  check: Check,
};

export const formTypes = {
  select: 'select',
  text: 'text',
  password: 'password',
  radio: 'radio',
  check: 'check',
}
