import React from 'react';
import PropTypes from 'prop-types';
import { Field} from 'formik';

const TextInput = ({name, label, placeholder, touched, error, type, focus, readOnly}) => {
  let wrapperClass = 'form-group';
  if (error && error.length > 0) {
    wrapperClass += " " + 'has-error';
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <Field
          type={type}
          name={name}
          className="form-control"
          placeholder={placeholder}
          readOnly={readOnly}
          autoFocus={focus}/>
        {!readOnly && touched && error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  touched: PropTypes.bool,
  error: PropTypes.string,
  focus: PropTypes.bool,
  readOnly: PropTypes.bool
};

export default TextInput;
