import React, {Component} from 'react';
import style from './Main.module.scss';

import ContainerHeader from './ContainerHeader/ContainerHeader';
import ContainerBody from './ContainerBody/ContainerBody';

class Main extends Component {
  submit = values => {
    window.alert (JSON.stringify (values));
  };
  render() {
    return (
      <div className={style.main}>
        <div className={style.mainContainer}>
          <div className={style.mainContentContainer}>
            <ContainerHeader/>
            <ContainerBody/>
          </div>
        </div>
      </div>
    );
  }


}
export default Main;
