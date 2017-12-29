import React from 'react';
import { shallow } from 'enzyme';
import TextInput from './TextInput';

let props, wrapper;
beforeEach(() => {
  props = {
    name: 'Description',
    label: 'Description',
    touched: false,
    error: '',
    focus: true,
    readOnly: false
  };
  wrapper = shallow(<TextInput {...props} />);
});

test('The text input component input component must render properly', ()=>{

  expect(wrapper).toMatchSnapshot();
});

test("The text input component label should be 'Description' as set in props", ()=>{
  expect(wrapper.find('label').text()).toEqual('Description');
});

test("The text input component name should be 'Description' as set in props", ()=>{
  expect(wrapper.find('Field').props().name).toBe('Description');
});

test("The text input component readOnly should be 'false' as set in props", ()=>{
  expect(wrapper.find('Field').props().readOnly).toBe(false);
});

test("The text input component autoFocus should be 'true' as set in props", ()=>{
  expect(wrapper.find('Field').props().readOnly).toBe(false);
});
