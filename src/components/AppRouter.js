/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import NextPage from './NextPage';
import NotFoundPage from './NotFoundPage';
import Header from './common/page/Header';
import Footer from './common/page/Footer';
import booksPage from "./modules/books/BooksPage";
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
            <Route path="/book/:operator/:id?" component={ManageBookPage} />
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
