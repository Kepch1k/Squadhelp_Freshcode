import React, { Component } from 'react';
import style from './Phone.module.scss';
import { Link } from 'react-router-dom';

class Phone extends Component {

  render() {
    return (
      <div className={style.main}>
        <div className={style.mainContactDetails}>
          <i className="fa fa-phone"/>
          &nbsp;
          <Link to="/sssss" className={style.anchorPhone} >(877)&nbsp;355-3585</Link>
        </div>
      </div>
    );
  }


}

export default Phone;


