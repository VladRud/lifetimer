import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { signInAction } from "../store/auth/auth.actions";
import SignInPage from "../components/pages/SignInPage/SignInPage";

const SignInContainer = (props) => {
  return <SignInPage {...props} />
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    signInAction,
  }, dispatch);

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer);
