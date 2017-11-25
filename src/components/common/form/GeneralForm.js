import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './input/TextInput';
import SelectInput from './input/SelectInput';
import _ from  'lodash';

export default class GeneralForm extends React.Component {
  constructor(props, context){
    super(props, context);

    this.renderField = this.renderField.bind(this);
  }

  renderField(field){
   // const fieldHelper = this.props.fields[field];
    const fieldConfig = this.props.fields[field];
    switch(fieldConfig.type){
      case 'select':
        return (
          <SelectInput
            key={field}
            name={field}
            label={fieldConfig.label}
            value={this.props.formModule[field]}
            onChange={this.props.onChange}
            error={this.props.errors[field] || null}
            defaultOption={fieldConfig.defaultOption || null}
            options={this.props.lookUps[field] || null}
            focus={fieldConfig.focus}/>
        );
      default:
        return (
          <TextInput
            key={field}
            name={field}
            type={fieldConfig.type}
            label={fieldConfig.label}
            value={this.props.formModule[field]}
            onChange={this.props.onChange}
            error={this.props.errors[field] || null}
            focus={fieldConfig.focus}/>
        );
    }
  }

  render() {
    return (
      <div className="container">
        <form>
          <h1>{this.props.formHeader}</h1>

          {_.map(this.props.fields, (val, key)=> this.renderField(key))}

          <input
            type="submit"
            disabled={this.props.saving}
            value={this.props.saving ? 'Saving...' : 'Save'}
            className="btn btn-primary"
            onClick={this.props.onSave}/>
        </form>
      </div>
    );
  }
}

GeneralForm.propTypes = {
  formHeader: PropTypes.string.isRequired,
  formModule: PropTypes.object.isRequired,
  fields: PropTypes.object.isRequired,
  lookUps: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.object
};

//export default GeneralForm;
