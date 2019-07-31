import React, {Component} from 'react';
import style from './LoginAndSignUp.module.scss';
import LoginSignUpContent from './LoginSignUpContent/LoginSignUpContent';

class LoginAndSignUp extends Component {

  render() {
    return (
      <div className={style.mainSignUpAndLogin}>
        <LoginSignUpContent/>
      </div>
    );
  }


}


export default LoginAndSignUp;
