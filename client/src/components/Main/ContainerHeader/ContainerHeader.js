import React, {Component} from 'react';
import style from './ContainerHeader.module.scss';
import Logo from './Logo/Logo';
import Button from './Button/Button';

class Main extends Component {

  render() {
    return (
      <div className={style.main}>
        <Logo/>
        <Button/>
      </div>
    );
  }


}
export default Main;
