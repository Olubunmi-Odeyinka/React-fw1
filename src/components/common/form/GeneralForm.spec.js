import React from 'react';
import { shallow } from 'enzyme';
import GeneralForm from './GeneralForm';
import * as operation from '../../../constants/operationTypes';

let state, props, fieldsDefinition;

beforeEach(() => {
  state = {
    formHeader: "Modify Book",
    formFieldReadOnly: false,
    urlOpeartion: '',
    listUrl:'/books',
    showSavingButton: true,
    savingString:['Saving', 'Save', 'btn-success']
  };

  fieldsDefinition = {
    name: {
      type: 'text',
      label: 'Name'
    },
    author: {
      type: 'text',
      label: 'Author',
      focus: true
    },
    category: {
      type: 'select',
      label: 'Category'
    },
    page: {
      type: 'number',
      label: 'Book\'s Pages'
    }
  };

  props = {
    errors: {},
    fields: fieldsDefinition,
    touched: {},
    lookUps: {},
    formState: state,
    saving: false,
    onSave: true
  };
});

test('Should Render the Manage Book', ()=>{
  const wrapper = shallow(<GeneralForm  {...props}/>);
  expect(wrapper).toMatchSnapshot();
});

test('Should Render Manage Book Header with h1', ()=>{
  const wrapper = shallow(<GeneralForm  {...props}/>);
  expect(wrapper.find('h1').text()).toEqual('Modify Book');
});

test('Should Render the View Book item', ()=>{
  state.formHeader = 'View Book';
  state.formFieldReadOnly = true;
  props.formState = state;
  const wrapper = shallow(<GeneralForm  {...props}/>);
  expect(wrapper).toMatchSnapshot();
});

test('Should Render View Book Header with h1', ()=>{
  state.formHeader = 'View Book';
  state.formFieldReadOnly = true;
  props.formState = state;
  const wrapper = shallow(<GeneralForm  {...props}/>);
  expect(wrapper.find('h1').text()).toEqual('View Book');
});

test('Should Render the Delete Book item', ()=>{
  state.formHeader = 'Delete Book';
  state.formFieldReadOnly = true;
  state.savingString = ['Deleting', 'Delete', 'btn-danger'];
  props.formState = state;
  const wrapper = shallow(<GeneralForm  {...props}/>);
  expect(wrapper).toMatchSnapshot();
});

test('Should Render Delete Book Header with h1', ()=>{
  state.formHeader = 'Delete Book';
  state.formFieldReadOnly = true;
  state.savingString = ['Deleting', 'Delete', 'btn-danger'];
  props.formState = state;
  const wrapper = shallow(<GeneralForm  {...props}/>);
  expect(wrapper.find('h1').text()).toEqual('Delete Book');
});

test('Should Render the Create Book item', ()=>{
  state.formHeader = 'Create Book';
  props.formState = state;
  const wrapper = shallow(<GeneralForm  {...props}/>);
  expect(wrapper).toMatchSnapshot();
});

test('Should Render Create Book Header with h1', ()=>{
  state.formHeader = 'Create Book';
  props.formState = state;
  const wrapper = shallow(<GeneralForm  {...props}/>);
  expect(wrapper.find('h1').text()).toEqual('Create Book');
});

// it('save button is labeled "Save" when not saving', () => {
//   state.formHeader = 'Create Book';
//   props.formState = state;
//   const submitButton = output.props.children[5];
//   expect(submitButton.props.value).toBe('Save');
// });

// it('save button is labeled "Save" when not saving', () => {
//   const { output } = setup(false);
//   const submitButton = output.props.children[5];
//   expect(submitButton.props.value).toBe('Save');
// });
//
// it('save button is labeled "Saving..." when saving', () => {
//   const { output } = setup(true);
//   const submitButton = output.props.children[5];
//   expect(submitButton.props.value).toBe('Saving...');
// });
