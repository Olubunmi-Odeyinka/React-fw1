import React from 'react';
import { shallow } from 'enzyme';
import SelectInput from './SelectInput';

test('The Dropdown input component must render properly', ()=>{
  const props = {
    name: 'm',
    label: 'm',
    touched: false,
    error: '',
    focus: false,
    readOnly: false,
    options: []
  };

  const wrapper = shallow(<SelectInput {...props} />);
});

