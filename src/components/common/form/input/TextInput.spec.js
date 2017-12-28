import React from 'react';
import { shallow } from 'enzyme';
import TextInput from './TextInput';

test('The text input component must render properly', ()=>{
   const props = {
     name: 'm',
     label: 'm',
     touched: false,
     error: '',
     focus: false,
     readOnly: false
  };

   const wrapper = shallow(<TextInput {...props} />);
});
