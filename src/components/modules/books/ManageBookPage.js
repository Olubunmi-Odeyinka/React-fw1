import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as bookActions from '../../../actions/bookActions';
import * as genreActions from '../../../actions/genreActions';
import GeneralForm from '../../common/formCommon/GeneralForm';
import {genresFormattedForDropdown} from '../../common/selectors/selectors';
import toastr from 'toastr';

export class ManageBookPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      formHeader: "Manage Books",
      book: Object.assign({}, props.book),
      errors: {},
      saving: false,
      lookUps: {}
    };

    this.updateBookState = this.updateBookState.bind(this);
    this.saveBook = this.saveBook.bind(this);
    this.fieldsDefinition = this.fieldsDefinition.bind(this);
  }

  componentDidMount(){
    this.props.lookUpsAction.loadGenres();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.book.id != nextProps.book.id) {
      // Necessary to populate form when existing book is loaded directly.
      this.setState({book: Object.assign({}, nextProps.book)});
    }
  }

  updateBookState(event) {
    const field = event.target.name;
    let book = this.state.book;
    book[field] = event.target.value;
    return this.setState({book: book});
  }

  fieldsDefinition(){
    return {
      name: {
        type: 'text',
        label: 'Name'
      },
      author: {
        type: 'text',
        label: 'Author'
      },
      category: {
        type: 'select',
        label: 'Category',
        defaultOption: null,
        cascade: {
          dependent: 'country',
          reloadfunction: function(){

          }
        }
      },
      page: {
        type: 'number',
        label: 'Book\'s Pages'
      }
    };
  }

  bookFormIsValid() {
    let formIsValid = true;
    let errors = {};

    if (this.state.book.name.length < 5) {
      errors.name = 'Name must be at least 5 characters.';
      formIsValid = false;
    }

    this.setState({errors: errors});
    return formIsValid;
  }


  saveBook(event) {
    event.preventDefault();

    if (!this.bookFormIsValid()) {
      return;
    }

    this.setState({saving: true});

    this.props.actions.saveBook(this.state.book)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
        this.setState({saving: false});
      });
  }

  redirect() {
    this.setState({saving: false});
    toastr.success('Book saved');
    this.props.history.push('/books');
    //Or this.context.router.history.push('/books');
  }

  render() {
    return (
      <GeneralForm
        formHeader={this.state.formHeader}
        lookUps={{'category':this.props.genres}}
        onChange={this.updateBookState}
        fields={this.fieldsDefinition()}
        onSave={this.saveBook}
        formModule={this.state.book}
        errors={this.state.errors}
        saving={this.state.saving}
      />
    );
  }
}

ManageBookPage.propTypes = {
  book: PropTypes.object.isRequired,
  genres: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

//Pull in the React Router context so router is available on this.context.router.
ManageBookPage.contextTypes = {
  router: PropTypes.object
};

function getBookById(books, id) {
  //Todo: load from the server not from
  const book = books.filter(book => book.id == id);
  if (book) return book[0]; //since filter returns an array, have to grab the first.
  return null;
}

function mapStateToProps(state, ownProps) {
  const bookId = ownProps.params && ownProps.params.id; // from the path `/book/:id`

  let book = {id: '', name: '', author: '', category: 1, page: 0};

  if (bookId && state.books.length > 0) {
    book = getBookById(state.books, bookId);
  }

  return {
    book: book,
    genres: genresFormattedForDropdown(state.genres)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    lookUpsAction: bindActionCreators(genreActions, dispatch),
    actions: bindActionCreators(bookActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageBookPage);
