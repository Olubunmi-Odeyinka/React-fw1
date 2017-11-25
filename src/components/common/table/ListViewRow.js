import React from 'react';
import PropTypes from 'prop-types';
//import {Link} from 'react-router';
import _ from 'underscore';

const CourseListRow = ({item,fieldsDefinition}) => {
  return (
    <tr>
      {/*<td><Link to={'/item/' + item.id}>{item.title}</Link></td>*/}
      {/*<td>*/}
        {/*<button className="btn btn-success" onClick={''}>View</button>*/}
        {/*<button className="btn btn-warning" onClick={''}>Modify</button>*/}
        {/*<button className="btn btn-danger" onClick={''}>Delete</button>*/}
      {/*</td>*/}
      {_.map(fieldsDefinition, (val, key)=> <td key={item[key]}>{item[key]}</td> )}
    </tr>
  );
};

CourseListRow.propTypes = {
  item: PropTypes.object.isRequired,
  fieldsDefinition: PropTypes.object.isRequired
};

export default CourseListRow;
