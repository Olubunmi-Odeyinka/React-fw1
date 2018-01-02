import React from 'react';
import { Link } from 'react-router-dom';
//Todo: we need to redirect to /login if not authenticated
//Todo: create all required components etc to archive the above
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
//import * as appStatusAction from '../actions/appStatusAction';

export default class HomePage extends React.Component{
  constructor(props, context){
    super(props, context);

    //this.props.appStatusAction.setCurrentPage({url: '/', name:'Home'});
  }


  render () {
    return (
      <div>

        <h2>Index Page</h2>
        <ol>
          <li>Review the <Link to="/fuel-savings">demo app</Link></li>
          <li>Remove the demo and start coding: npm run remove-demo</li>
        </ol>
      </div>
    );
  }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     appStatusAction: bindActionCreators(appStatusAction, dispatch)
//   };
// }
// export default connect(null, mapDispatchToProps)(HomePage);
