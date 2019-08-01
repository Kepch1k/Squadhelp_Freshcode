import React, {Component} from 'react';
import style from './LoginSignUpContent.module.scss';

import Login from './Login/Login';
import SignUp from './SignUp/SignUp';

class LoginSignUpContent extends Component {

  render() {
    return (

      <div className={style.main}>
        <Login/>
        <SignUp/>
      </div>
    );
  }


}
export default LoginSignUpContent;
