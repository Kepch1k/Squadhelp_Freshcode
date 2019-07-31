import React, {Component} from 'react';
import style from './Login.module.scss';
import MainLoginContainer from '../../components/Main/Main';
import { USER_KEY } from '../../constants/consts';
import { Redirect } from 'react-router';

class Login extends Component {

  render() {
    const user = localStorage.getItem( USER_KEY);
    if (user)return <Redirect to="/" />;
    return (
      <div className={style.body}>
        <MainLoginContainer/>
      </div>
    );
  }


}
export default Login;
