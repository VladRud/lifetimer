import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { checkAuthTokenOnInitAction } from "../store/auth/auth.actions";
import App from "../components/App";

function AppContainer(props) {
   return <App {...props}/>;
}

const mapStateToProps = (state) => {
  return {
    userTokenCheckedOnInit: state.auth.userTokenCheckedOnInit,
    isLoggedIn: state.auth.isLoggedIn,
    loadingOnInitApp: state.auth.loadingOnInitApp
  }
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    checkAuthTokenOnInitAction,
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
