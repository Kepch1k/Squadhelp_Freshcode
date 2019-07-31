import React, {Component} from 'react';
import style from './Button.module.scss';
import { Link } from 'react-router-dom';
//import HeaderTop from './Main-Top/Main-Top';

class Main extends Component {

  render() {
    return (
      <div className={style.main}>
        <Link className={style.anchor} to="/signup"><div className={style.main}/>Signup</Link>

      </div>
    );
  }


}
export default Main;
