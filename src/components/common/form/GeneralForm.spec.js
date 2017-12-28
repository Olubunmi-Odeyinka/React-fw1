import React from 'react';
import { shallow } from 'enzyme';
import GeneralForm from './GeneralForm';

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

it('Create save button has labeled Save', () => {
  state.formHeader = 'Create Book';
  props.formState = state;
  const wrapper = shallow(<GeneralForm  {...props}/>);
  expect(wrapper.find('input').props().value).toBe('Save');
});

it('Create save button has labeled Saving... when Saving', () => {
  state.formHeader = 'Create Book';
  props.formState = state;
  props.saving = true;
  const wrapper = shallow(<GeneralForm  {...props}/>);
  expect(wrapper.find('input').props().value).toBe('Saving...');
});

test('Should Render the Modify Book', ()=>{
  state.savingString = ['Updating', 'Update', 'btn-info'];
  props.formState = state;
  const wrapper = shallow(<GeneralForm  {...props}/>);
  expect(wrapper).toMatchSnapshot();
});

test('Should Render Manage Book Header with h1 in Manage Book screen', ()=>{
  state.savingString = ['Updating', 'Update', 'btn-info'];
  props.formState = state;
  const wrapper = shallow(<GeneralForm  {...props}/>);
  expect(wrapper.find('h1').text()).toEqual('Modify Book');
});

it('Modify save button has labeled Update', () => {
  state.savingString = ['Updating', 'Update', 'btn-info'];
  props.formState = state;
  const wrapper = shallow(<GeneralForm  {...props}/>);
  expect(wrapper.find('input').props().value).toBe('Update');
});

it('Modify save button has labeled Updating... when Updating', () => {
  state.savingString = ['Updating', 'Update', 'btn-info'];
  props.formState = state;
  props.saving = true;
  const wrapper = shallow(<GeneralForm  {...props}/>);
  expect(wrapper.find('input').props().value).toBe('Updating...');
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

it('Delete save button has labeled Save', () => {
  state.formHeader = 'Delete Book';
  state.formFieldReadOnly = true;
  state.savingString = ['Deleting', 'Delete', 'btn-danger'];
  props.formState = state;
  const wrapper = shallow(<GeneralForm  {...props}/>);
  expect(wrapper.find('input').props().value).toBe('Delete');
});

it('Delete button has labeled Deleting... when Deleting', () => {
  state.formHeader = 'Delete Book';
  state.formFieldReadOnly = true;
  state.savingString = ['Deleting', 'Delete', 'btn-danger'];
  props.formState = state;
  props.saving = true;
  const wrapper = shallow(<GeneralForm  {...props}/>);
  expect(wrapper.find('input').props().value).toBe('Deleting...');
});

