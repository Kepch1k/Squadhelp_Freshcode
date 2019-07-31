import React, {Component} from 'react';
import style from './Header.module.scss';

import Phone from './Phone/Phone';
import LoginAndSignUp from './LoginAndSignUp/LoginAndSignUp';

class Header extends Component {

  render() {
    return (
      <div className={style.main}>
        <div className={style.mainHeaderTop}>
          <div className={style.mainContainer}>
            <div className={style.mainRow}>
              <Phone/>
              <LoginAndSignUp/>
            </div>
          </div>
        </div>
      </div>
    );
  }


}
export default Header;
