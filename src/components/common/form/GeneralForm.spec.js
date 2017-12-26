import React from 'react';
import { shallow } from 'enzyme';
import GeneralForm from './GeneralForm';
import * as operation from '../../../constants/operationTypes';

let state, props, fieldsDefinition;

beforeEach(() => {
  state = {
    formHeader: "Manage Books",
    formFieldReadOnly: false,
    urlOpeartion: '',
    listUrl:'/books',
    showSavingButton: true,
    savingString:['saving', 'save', 'btn-success']
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

test('b', ()=>{

  const wrapper = shallow(<GeneralForm  {...props}/>);
  expect(wrapper).toMatchSnapshot();
});

