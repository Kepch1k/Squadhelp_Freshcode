import React, {Component} from 'react';
import style from './HeaderBottom.module.scss';

import Phone from './Phone/Phone';
import LoginAndSignUp from './LoginAndSignUp/LoginAndSignUp';
import { Link } from 'react-router-dom';

class HeaderBottom extends Component {

  render() {
    return (
      <div className={style.mainHeaderBottom}>
        <div className={style.mainHeaderBottomContainer}>
          <div className={style.mainHeaderBottomRow}>
            <div className={style.mainHeaderBottomLogo}>
              <Link to="/"><div className={style.mainLogo}/></Link>
            </div>
            <ul className={style.mainHeaderBottomLists}>

              <li className={style.mainHeaderBottomFlexLists}>
                <div className={style.SublistTitle}>  Name Ideas <i className="fa fa-angle-down"/></div>
                <ul className={style.mainHeaderBottomSubLists}>
                  <li>1sssss</li>
                  <li>1sssss</li>
                </ul>
              </li>


              <li className={style.mainHeaderBottomFlexLists}>
                <div className={style.SublistTitle}>  Contests <i className="fa fa-angle-down"/></div>
                <ul className={style.mainHeaderBottomSubLists}><li> 1</li></ul>
              </li>


              <li className={style.mainHeaderBottomFlexLists}>
                <div className={style.SublistTitle}> Our Work <i className="fa fa-angle-down"/></div>
                <ul className={style.mainHeaderBottomSubLists}><li> 1</li></ul>
              </li>


              <li className={style.mainHeaderBottomFlexLists}>
                <div className={style.SublistTitle}>  Names For Sale <i className="fa fa-angle-down"/></div>
                <ul className={style.mainHeaderBottomSubLists}><li> 1</li></ul>
              </li>


              <li className={style.mainHeaderBottomFlexLists}>
                <div className={style.SublistTitle}>   Blog <i className="fa fa-angle-down"/></div>
                <ul className={style.mainHeaderBottomSubLists}><li> 1</li></ul>
              </li>

            </ul>
            <div className={style.mainHeaderBottomButton}>
              START CONTEST
            </div>
          </div>
        </div>
      </div>
    );
  }


}
export default HeaderBottom;
