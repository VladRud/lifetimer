import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { signUpAction } from "../store/auth/auth.actions";
import SignUpPage from "../components/pages/SignUpPage/SignUpPage";

const SignUpContainer = (props) => {
  return <SignUpPage {...props} />
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    signUpAction: signUpAction,
  }, dispatch);

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);
