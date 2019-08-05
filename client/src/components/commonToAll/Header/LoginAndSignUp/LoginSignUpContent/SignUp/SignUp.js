import React, {Component} from 'react';
import style from './SignUp.module.scss';
import { Link } from 'react-router-dom';
import connect from 'react-redux/es/connect/connect';

class SignUp extends Component {
  render() {
    const content = (this.props.state.userReducers.user===null || this.props.state.userReducers.user===undefined) ?
      <Link className={style.anchor} to="/signup"> Sign up</Link> :
      <span >
        <span className={style.hi}><i className="far fa-envelope"/></span>
        </span>
    ;
    return (
      <div className={style.main}>
        <div>
          {content}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state
  };
};

export default connect(mapStateToProps)(SignUp);

