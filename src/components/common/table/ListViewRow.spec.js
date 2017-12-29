import React from 'react';
import { shallow } from 'enzyme';
import ListViewRow from './ListViewRow';

import books from '../../../fixtures/books';

let fieldsDefinition, wrapper;
beforeEach(() => {
  fieldsDefinition = {
    address: {
    }
  }

});

test('Should render list view row properly', ()=>{
  wrapper = shallow(<ListViewRow item={books[0]} fieldsDefinition={fieldsDefinition.address}/>);
  expect(wrapper).toMatchSnapshot();
});

