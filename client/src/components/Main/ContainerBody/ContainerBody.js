import React, { Component } from 'react';
import style from './ContainerBody.module.scss';
import Form from './Form/Form';
import { SubmissionError } from 'redux-form';
import { userLogin } from '../../../actions/actionCreator';
import connect from 'react-redux/es/connect/connect';

const yup = require('yup');
const schema = require('../../../models/userSchema');
const promises = () => new Promise(resolve => resolve());let resEmail;

class ContainerBody extends Component {

  submit = (values) => {
    return promises().then(async () => {
      //console.log("VALUES ",values);
      try {
        resEmail = await yup.reach(schema, 'email').isValid(values.email);
      } catch (e) {
      }
      if (!resEmail) {
        throw new SubmissionError({
          email: 'Email is not valid format',
          _error: 'Login failed!',
        });
      }
      const dataToSend = {
        email: values.email,
        password: values.password,
      };
      console.log("VALUES ",dataToSend);
      this.props.userLogin(dataToSend);
    });
  };

  render() {
    return (
      <div className={style.main}>
        <div className={style.title}><h2>LOGIN TO YOUR ACCOUNT </h2></div>
        <div className={style.mainForm}>
          <Form onSubmit={this.submit}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state,
    fromStore: state.userReducers.data,
  };
};
const mapDispatchToProps = (dispatch) => ({
  userLogin: (dataToSend) => dispatch(userLogin(dataToSend)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContainerBody);

