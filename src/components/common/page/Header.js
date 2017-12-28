import React from 'react';
// import PropTypes from 'prop-types';
//import NavItem from "./NavItem";
import Loading from 'react-loading-bar';
import 'react-loading-bar/dist/index.css';
//import { Link, IndexLink } from 'react-router';
import { NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
//import LoadingDots from './LoadingDots';


export const Header = () => {
    return (

      <div>
        <nav className="navbar navbar-default navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                      data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"/>
                <span className="icon-bar"/>
                <span className="icon-bar"/>
              </button>
              <a className="navbar-brand" href="#">Brand</a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li><NavLink activeClassName='' exact to="/">Home</NavLink></li>
                <li><NavLink activeClassName='' to="/next">Next</NavLink></li>
                <li><NavLink activeClassName='' to="/books">Book</NavLink></li>
                {/*<NavItem to="/" exact={true}>Home</NavItem>*/}
                {/*<NavItem to="/next">Link</NavItem>*/}

                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                     aria-expanded="false">Dropdown <span className="caret"/></a>
                  <ul className="dropdown-menu">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator" className="divider"/>
                    <li><a href="#">Separated link</a></li>
                    <li role="separator" className="divider"/>
                    <li><a href="#">One more separated link</a></li>
                  </ul>
                </li>
              </ul>
              <form className="navbar-form navbar-left">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Search"/>
                </div>
                <button type="submit" className="btn btn-default">Submit</button>
              </form>
              <ul className="nav navbar-nav navbar-right">
                <li><a href="#">Link</a></li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                     aria-expanded="false">Dropdown <span className="caret"/></a>
                  <ul className="dropdown-menu">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator" className="divider"/>
                    <li><a href="#">Separated link</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Loading show={true} color="green" showSpinner={true}/>
      </div>
    );
};

// Header.propTypes = {
//   loading: PropTypes.bool.isRequired
// };

function mapStateToProps(state) {
  return{
    loading: state.ajaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(Header);
