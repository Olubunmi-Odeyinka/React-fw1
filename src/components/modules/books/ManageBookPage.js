import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withFormik} from 'formik';
import Yup from 'yup';
import {bindActionCreators} from 'redux';
import * as bookActions from '../../../actions/bookActions';
import * as genreActions from '../../../actions/genreActions';
import GeneralForm from '../../common/form/GeneralForm';
import * as operation from '../../../constants/operationTypes';
import {genresFormattedForDropdown} from '../../common/selectors/selectors';
// import _ from 'underscore';
import toastr from 'toastr';
import uuid from 'uuid';

export class ManageBookPage extends React.Component {

  state = {
    formHeader: "Manage Books",
    formFieldReadOnly: false,
    urlOpeartion: ''
    // lookUps: {}
  };

    fieldsDefinition = {
        name: {
            type: 'text',
            label: 'Name'
        },
        author: {
            type: 'text',
            label: 'Author',
            focus: true
        },
        category: {
            type: 'select',
            label: 'Category'
        },
        page: {
            type: 'number',
            label: 'Book\'s Pages'
        }
    };

    componentDidMount =() =>{
      if (this.props.match.params.id) {
        this.props.actions.getBookById(this.props.match.params.id);
      }

      if (this.props.match.params.operator) {

        this.setState(() => ({urlOpeartion : this.props.match.params.operator}));
        switch(this.props.match.params.operator){
          case operation.View_URL_String:
            this.setState(() => ({formFieldReadOnly : true}));
            this.setState(() => ({formHeader : "View Book"}));

            break;
          case operation.Create_URL_String:
            this.setState(() => ({formHeader : "Create Book"}));
            break;
          case operation.Modify_URL_String:
            this.setState(() => ({formHeader : "Modify Book"}));
            break;
          case operation.Delete_URL_String:
            this.setState(() => ({formHeader : "Delete Book"}));
            this.setState(() => ({formFieldReadOnly : true}));
            break;
          default:
            break;
        }
      }

      this.props.lookUpsAction.loadGenres();
    }

    redirect =(successMessage)=> {
        toastr.success(successMessage);
        this.props.history.push('/books');
        //Or this.context.router.history.push('/books');
    }

    FormDom = ({
                values,
                errors,
                touched,
                isSubmitting
            })=>(
        <GeneralForm
            formHeader={this.state.formHeader}
            lookUps={{'category':this.props.genres}}
            touched={touched}
            fields={this.fieldsDefinition}
            values={values}
            // onSave={this.saveBook}
            // formModule={this.state.book}
            errors={errors}
            saving={isSubmitting}
            readOnly={this.state.formFieldReadOnly}
        />
    );
   theReadonlyForm = withFormik({
     mapPropsToValues({book}){
       return{
         id: book.id,
         name: book.name,
         author: book.author,
         category: book.category,
         page: book.page
       }
     },
     enableReinitialize: true
   })(this.FormDom);

   theEditableForm = withFormik({
        mapPropsToValues({book}){
            return{
                id: book.id || uuid(),
                name: book.name || 'Baba Ode',
                author: book.author || '',
                category: book.category || 4,
                page: book.page || ''
            }
        },
        validationSchema: Yup.object().shape({
            name: Yup.string('Name must be a string').min(3, 'Name must be at least 3 characters').required('Name field is required'),
            author: Yup.string().max(10, 'Author can not be longer than 10').required('Author must be supplied')
        }),
        handleSubmit(values, bag){
            bag.setSubmitting(true);
            let subMissionPromise = null;
            let successMessage = null;
            switch(bag.props.values.urlOpeartion){
              case operation.Create_URL_String:
                subMissionPromise = bag.props.formAction.saveNewBook(values);
                successMessage = 'Book created';
                break;
              case operation.Modify_URL_String:
                subMissionPromise = bag.props.formAction.saveUpdateBook(values);
                successMessage = 'Book modified';
                break;
              case operation.Delete_URL_String:
                subMissionPromise = bag.props.formAction.saveDeleteBook(values);
                successMessage = 'Book deleted'
                break;
              default:
                subMissionPromise = bag.props.formAction.saveBook(values);
                successMessage = 'Book updated'
                break;
            }

           subMissionPromise
                .then(() => bag.props.redirect(successMessage))
                .catch(error => {
                    bag.setSubmitting(false);
                    toastr.error(error);
                });
        },
        enableReinitialize: true
    })(this.FormDom)

    render =()=> {
        return this.state.formFieldReadOnly ? (
          <this.theReadonlyForm
            book={this.props.book}
            redirect={this.redirect}
          />
        ): (
          <this.theEditableForm
            book={this.props.book}
            formAction={this.props.actions}
            urlOpeartion={this.state.urlOpeartion}
            redirect={this.redirect}
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

function mapStateToProps(state, ownProps) {

    return {
        book: state.book,
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

