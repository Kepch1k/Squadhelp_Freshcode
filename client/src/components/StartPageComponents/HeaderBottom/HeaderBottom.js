import React, {Component} from 'react';
import style from './HeaderBottom.module.scss';
import BottomHeaderList from './StartPageBottomHeaderList/StartPageBottomHeaderList';
import {NameIdeals, Contests, OurWork, NamesForSale, Blog} from '../../../constants/StartPageBottomHeaderLists';
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
                  <BottomHeaderList key={"Name"} list={NameIdeals}/>
                </ul>
              </li>


              <li className={style.mainHeaderBottomFlexLists}>
                <div className={style.SublistTitle}>  Contests <i className="fa fa-angle-down"/></div>
                <ul className={style.mainHeaderBottomSubLists}>
                  <BottomHeaderList key={"Contests"} list={Contests}/>
                  </ul>
              </li>


              <li className={style.mainHeaderBottomFlexLists}>
                <div className={style.SublistTitle}> Our Work <i className="fa fa-angle-down"/></div>
                <ul className={style.mainHeaderBottomSubLists}>
                  <BottomHeaderList key={"Work"} list={OurWork}/>
                </ul>
              </li>


              <li className={style.mainHeaderBottomFlexLists}>
                <div className={style.SublistTitle}>  Names For Sale <i className="fa fa-angle-down"/></div>
                <ul className={style.mainHeaderBottomSubLists}>
                  <BottomHeaderList key={"Names"} list={NamesForSale}/>
                </ul>
              </li>


              <li className={style.mainHeaderBottomFlexListsBlog}>
                <div className={style.SublistTitle}>   Blog <i className="fa fa-angle-down"/></div>
                <ul className={style.mainHeaderBottomSubListsBlog}>
                  <BottomHeaderList key={"Blog"} list={Blog}/>
                </ul>
              </li>

            </ul>
            <Link to="/ss"><div className={style.mainHeaderBottomButton}>
              START CONTEST
            </div></Link>

          </div>
        </div>
      </div>
    );
  }


}
export default HeaderBottom;
