import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as bookActions from '../../../actions/bookActions';
import ListView from "../../common/table/ListView";

class BooksPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToAddBookPage = this.redirectToAddBookPage.bind(this);
    this.fieldsDefinition = {
      name: {
      },
      author: {
      },
      page: {
        type: 'number'
      },
      category: {
        type: 'number'
      }
    };
  }

  componentDidMount(){
    this.props.actions.loadBooks();
  }

  bookRow(book, index) {
    return <div key={index}>{book.title}</div>;
  }

  redirectToAddBookPage() {
    this.props.history.push('/book/create');
  }

  render() {
    const {books} = this.props;

    return (
      <div className="container">
        <h1>Books</h1>
        <input type="submit"
               value="Add Book"
               className="btn btn-primary"
               onClick={this.redirectToAddBookPage}/>
        <ListView listItems={books} fieldsDefinition={this.fieldsDefinition}/>
      </div>
    );
  }
}

BooksPage.propTypes = {
  books: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    books: state.books,
    genres: state.genres
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(bookActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksPage);
