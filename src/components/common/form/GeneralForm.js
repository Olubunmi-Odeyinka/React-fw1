import React from 'react';
import PropTypes from 'prop-types';
import {Form} from 'formik';
import { NavLink} from 'react-router-dom';
import TextInput from './input/TextInput';
import SelectInput from './input/SelectInput';
import _ from  'lodash';

export default class GeneralForm extends React.Component {
  // constructor(props, context){
  //   super(props, context);
  //
  //   this.renderField = this.renderField.bind(this);
  // }

  renderField =(field)=>{
   // const fieldHelper = this.props.fields[field];
    const fieldConfig = this.props.fields[field];
    switch(fieldConfig.type){
      case 'select':
        return (
          <SelectInput
            key={field}
            name={field}
            focus={fieldConfig.focus}
            label={fieldConfig.label  || field}
            error={this.props.errors[field] || null}
            touched={this.props.touched[field] || null}
            options={this.props.lookUps[field] || null}
            readOnly={this.props.formState.formFieldReadOnly}/>
        );
      default:
        return (
          <TextInput
            key={field}
            name={field}
            focus={fieldConfig.focus}
            type={fieldConfig.type}
            label={fieldConfig.label || field}
            touched={this.props.touched[field] || null}
            error={this.props.errors[field] || null}
            readOnly={this.props.formState.formFieldReadOnly}/>
        );
    }
  }

  render =()=> {
    return (
      <div className="container">
        <div className="row">
          <h1>{this.props.formState.formHeader}</h1>
          <NavLink className="btn btn-default pull-right" to={this.props.formState.listUrl}>Back to List</NavLink>
        </div>
        <Form>
          {_.map(this.props.fields, (val, key)=> this.renderField(key))}

          {this.props.formState.showSavingButton ?
          (<input
            type="submit"
            disabled={this.props.saving}
            value={this.props.saving ? this.props.formState.savingString[0]+'...' : this.props.formState.savingString[1]}
            className={"btn "+ this.props.formState.savingString[2] || "btn-info"}
            onClick={this.props.onSave}/>) : null}
        </Form>
      </div>
    );
  }
}


GeneralForm.propTypes = {
  errors: PropTypes.object,
  fields: PropTypes.object,
  touched: PropTypes.object,
  lookUps: PropTypes.object,
  formState: PropTypes.object,
  saving: PropTypes.bool,
  onSave: PropTypes.bool
};

//export default GeneralForm;
