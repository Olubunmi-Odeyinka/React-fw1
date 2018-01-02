import React from 'react';
import PropTypes from 'prop-types';
//import {Link} from 'react-router';
import { NavLink} from 'react-router-dom';
import _ from 'underscore';
import * as operation from '../../../constants/operationTypes';

const CourseListRow = ({item, fieldsDefinition, itemUrl}) => {
  return (
    <tr>
      <td>
        <NavLink  to={`${itemUrl}/${operation.View_URL_String}/${item.id}`}><span className="text-success glyphicon glyphicon-file"></span></NavLink>|
        <NavLink  to={`${itemUrl}/${operation.Modify_URL_String}/${item.id}`}><span className="text-warning glyphicon glyphicon-edit"></span></NavLink>|
        <NavLink  to={`${itemUrl}/${operation.Delete_URL_String}/${item.id}`}><span className="text-danger glyphicon glyphicon-trash"></span></NavLink>
      </td>
      {_.map(fieldsDefinition, (val, key)=> <td key={item[key]}>{item[key]}</td> )}
    </tr>
  );
};

CourseListRow.propTypes = {
  item: PropTypes.object.isRequired,
  fieldsDefinition: PropTypes.object.isRequired
};

export default CourseListRow;
