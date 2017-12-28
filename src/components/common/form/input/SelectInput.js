import React from 'react';
import PropTypes from 'prop-types';
import {Field} from 'formik';

const SelectInput = ({name, label, touched, error, options, focus, readOnly}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <div className="field">
        {/* Note, value is set here rather than on the option - docs: https://facebook.github.io/react/docs/forms.html */}
        <Field
          component="select"
          name={name}
          className="form-control"
          readOnly={readOnly}
          autoFocus={focus}>
          <option value=""></option>
          {options && options.map((option) => {
            return <option key={option.value} value={option.value}>{option.text}</option>;
          })
          }
        </Field>
        {!readOnly && touched && error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  touched: PropTypes.bool,
  error: PropTypes.string,
  options: PropTypes.array,
  focus: PropTypes.bool,
  readOnly: PropTypes.bool
};

export default SelectInput;
