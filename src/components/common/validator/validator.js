/*
* Validator function
* */
export function validateField(field, value, thisPage) {
  const fieldDef = thisPage.fieldsDefinition[field];
  const fieldValidatorParam = fieldDef.validation;
  console.log(document.activeElement);
  if (fieldValidatorParam) {
    if (fieldValidatorParam.length > 0) {
      for (let i = 0; i < fieldValidatorParam.length; i++) {
        const isValid = fieldValidatorParam[i].type({value: value,fieldName: field, thisPage: thisPage, ...fieldValidatorParam[i]});
        fieldDef.isValid = isValid;
        if (!isValid) break;
      }
    }
  }
}

//value, fieldName, thisPage, errorMessage
export function isRequired(param) {
  let error = '';
  let isValid = true;
  if(!param.value){
    error = param.errorMessage || `${param.fieldName} is required` ;
    isValid = false;
  }

  let errors = {...param.thisPage.state.errors, [param.fieldName]: error};
  param.thisPage.setState({errors});
  return isValid;
}

//value, fieldName, thisPage, minLengthValue, errorMessage
export function minStringLength(param) {
  let error = '';
  let isValid = true;
  if(param.value.length <= param.minLengthValue) {
    error = param.errorMessage ||  `${param.fieldName} must be at least ${param.minLengthValue} characters.`;
    isValid = false;
  }

  let errors = {...param.thisPage.state.errors, [param.fieldName]: error};
  param.thisPage.setState({errors});
  return isValid;
}

// value, fieldName, maxLengthValue, thisPage, errorMessage
export function maxStringLength(param) {
  let error = '';
  let isValid = true;
  if(param.value.length >= param.maxLengthValue) {
    error = param.errorMessage || `${param.fieldName} must be at least ${param.maxLengthValue} characters.` ;
    isValid = false;
  }

  let errors = {...param.thisPage.state.errors, [param.fieldName]: error};
  param.thisPage.setState({errors});
  return isValid;
}
