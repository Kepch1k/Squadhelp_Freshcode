import React, { Component } from 'react';
import style from './Form.module.scss';
import { Field, reduxForm } from 'redux-form';
import connect from 'react-redux/es/connect/connect';
//import { userLogin } from '../../../../actions/actionCreator';
/*
import validate from '../../../../Validations/Validate';*/
//import asyncValidate from '../../../../validations/asyncValidate2';


const renderField = ({
                       input,
                       label,
                       type,
                       meta: { asyncValidating, touched, error },
                     }) => (
  <div>
    <div className={asyncValidating ? 'async-validating' : ''}>
      <input {...input} type={type} placeholder={label} style={{borderColor:error?"red":"white"}}/>
      {touched && error && <div className={style.errorContainer}>{error}</div>}
    </div>
  </div>
);

class Form extends Component {

  constructor(props) {
    super(props);
  };



  render() {
    const { handleSubmit, submitting } = this.props;
    const login = this.props.state.userReducers.loginFailed ? 'block' : 'none';
    //console.log(this.props.state.userReducers.data.user);
    return (

      <form onSubmit={handleSubmit(this.props.submit)}>
        <div className={style.loginFailed} style={{ display: login }}>Invalid Email or Password</div>
        <div className={style.Row}>
          <Field className={style.Field}
                 name="email"
                 component={renderField}
                 type="text"
                 label="Email address"
          />
        </div>
        <div className={style.Row}>
          <Field className={style.Field}
                 name="password"
                 component={renderField}
                 type="password"
                 label="Password"
          />
        </div>
        <div className={style.Row}>
           <span className={style.RememberMe}>
             <div className={style.flexBox}>
               <span style={{ width: '24px', height: '13px' }}>
                 <Field name="RememberMe" component="input" type="checkbox" id={'check'}/>
                 </span>
               <span><label>Remember&nbsp;</label></span><span><label>me</label></span>
             </div>
           </span>
          <span className={style.ForgotPassword}>
             Forgot Password
           </span>
        </div>
        <div className={style.Row}>
          <button className={style.Field}
                  style={{ backgroundColor: '#28d2d0', borderColor: '#28d2d0', color: 'white', cursor: 'pointer' }}
                  type="submit" disabled={submitting}>LOGIN
          </button>
        </div>

        <div className={style.Row} style={{ marginTop: '30px' }}>
          <button className={style.FieldSocial} type="submit"><span className="fa fa-facebook"/> Sign in with Facebook
          </button>
        </div>

        <div className={style.Row}>
          <button className={style.FieldSocial} style={{ background: '#dd4b39', borderColor: '#dd4b39' }}
                  type="submit">
            <span className="fa fa-google"/> Sign in with Google
          </button>
        </div>
      </form>
    );
  }
}

Form = reduxForm({
  form: 'login',
  //validate,
  //asyncValidate,
  asyncChangeFields: ['email', 'password'],
})(Form);

const mapStateToProps = (state) => {
  return {
    state,
    fromStore: state.userReducers.data,
  };
};

/*const mapDispatchToProps = (dispatch) => ({
  userLogin: (dataToSend) => dispatch(userLogin(dataToSend)),
});*/

export default connect(mapStateToProps)(Form);

