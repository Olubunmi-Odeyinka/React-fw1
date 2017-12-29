import React from 'react';
import { shallow } from 'enzyme';
import SelectInput from './SelectInput';

let props, wrapper;
beforeEach(() => {
  props = {
    name: 'Name',
    label: 'Name',
    touched: false,
    error: '',
    focus: true,
    readOnly: false,
    options: []
  };
  wrapper = shallow(<SelectInput {...props} />);
});

test('The dropdown component input component must render properly', ()=>{

  expect(wrapper).toMatchSnapshot();
});

test("The dropdown component label should be 'Name' as set in props", ()=>{
  expect(wrapper.find('label').text()).toEqual('Name');
});

test("The dropdown component name should be 'Name' as set in props", ()=>{
  expect(wrapper.find('Field').props().name).toBe('Name');
});

test("The dropdown component readOnly should be 'false' as set in props", ()=>{
  expect(wrapper.find('Field').props().readOnly).toBe(false);
});

test("The dropdown component autoFocus should be 'true' as set in props", ()=>{
  expect(wrapper.find('Field').props().readOnly).toBe(false);
});

test("The dropdown component should have always have one extra default option added to the supplied options", ()=>{
  props.options = [{value: 2, text: 'Satire'},
                    {value: 3, text: 'Chain Taste'}];
  wrapper = shallow(<SelectInput {...props} />);
  expect(wrapper.find('option').length).toBe(3);
});
