/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import NextPage from './NextPage';
import NotFoundPage from './NotFoundPage';
import Header from './common/pageCommon/Header';
import Footer from './common/pageCommon/Footer';
import booksPage from "./modules/books/booksPage";
import ManageBookPage from "./modules/books/ManageBookPage";


// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.loading

class AppRouter extends React.Component {

  render() {
    const heightStyle = { height: '85vh'};
    return (
      <div>
        <Header />
        <div style={heightStyle}>
          <Switch>
            <Route exact={true} path="/" component={HomePage} />
            <Route path="/next" component={NextPage} />
            <Route path="/books" component={booksPage} />
            <Route path="/book/create" component={ManageBookPage} />
            <Route path="/book/detail/:id" component={ManageBookPage} />
            <Route path="/book/edit/:id" component={ManageBookPage} />
            <Route path="/book/delete/:id" component={ManageBookPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

AppRouter.propTypes = {
  children: PropTypes.element
};



export default AppRouter;
