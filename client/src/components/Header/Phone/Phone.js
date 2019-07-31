import React, { Component } from 'react';
import style from './Phone.module.scss';


class Phone extends Component {

  render() {
    return (
      <div className={style.main}>
        <div className={style.mainContactDetails}>
          <i className="fa fa-phone"/>
          &nbsp;

          <a className={style.anchor} href="tel:(877)355-3585">(877)&nbsp;355-3585</a>
        </div>
      </div>
    );
  }


}

export default Phone;


