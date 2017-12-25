import React from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore';
import ListViewRow from './ListViewRow';

const ItemList = ({listItems, fieldsDefinition}) => {
  return (
      <table className="table">
        <thead>

        <tr>
          <th>&nbsp;</th>
          {_.map(fieldsDefinition, (val, key)=> <th key={key}>{key.toUpperCase()}</th> )}
        </tr>
        </thead>
        <tbody>

        {listItems.map(item =>
          <ListViewRow key={item.id} item={item} fieldsDefinition={fieldsDefinition} />
        )}
        </tbody>
      </table>
  );
};

ItemList.propTypes = {
  listItems: PropTypes.array.isRequired,
  fieldsDefinition: PropTypes.object.isRequired
};

export default ItemList;
