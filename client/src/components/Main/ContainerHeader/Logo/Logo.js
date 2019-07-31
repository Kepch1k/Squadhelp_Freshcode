import React, {Component} from 'react';
import style from './Logo.module.scss';
import { Link } from "react-router-dom";



class Main extends Component {

  render() {
    return (

      <Link to="/"><div className={style.main}/></Link>




    );
  }
//<a href={"/"}><div className={style.main}/></a> <Link to="/"><div className={style.main}/></Link>  <Route path="/" exact component={StartPage} />

}
export default Main;
