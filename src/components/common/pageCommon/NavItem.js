import React from 'react';
import PropTypes from 'prop-types';
import {Route, Link} from 'react-router-dom';
///import styles from './styles.less';

export default function NavItem({children, to, exact}) {
  return (
    <Route path={to} exact={exact} children={({match}) => (
      <li className={match ? "active" : null}>
        <Link to={to}>{children}</Link>
      </li>
    )}/>
  );
}

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  exact: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
