import React from 'react';
import { shallow } from 'enzyme';
import ListView from './ListView';
import books from '../../../fixtures/books';

let fieldsDefinition, wrapper;
beforeEach(() => {
  fieldsDefinition = {
    name: {
    },
    author: {
    },
    page: {
      type: 'number'
    },
    category: {
      type: 'number'
    }
  }

});

test('Should render list view properly', ()=>{
  wrapper = shallow(<ListView listItems={books} fieldsDefinition={fieldsDefinition}/>);
  expect(wrapper).toMatchSnapshot();
});

