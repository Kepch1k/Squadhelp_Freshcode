import React, {Component} from 'react';
import style from './SignUp.module.scss';
import { Link } from 'react-router-dom';
import connect from 'react-redux/es/connect/connect';

class SignUp extends Component {
  constructor(props){
    super(props);
  }
  render() {

    const content = (this.props.state.userReducers.user===null) ? <Link to="/signup"> Sign up</Link> :
      <span >
        <span className={style.hi}><i className="fa fa-envelope-o"/></span>

        </span>
    ;
    return (
      <div className={style.main}>
        <div className={style.inside}>
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

