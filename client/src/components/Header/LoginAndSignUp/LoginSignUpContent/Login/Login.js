import React, {Component} from 'react';
import style from './Login.module.scss';
import connect from 'react-redux/es/connect/connect';
import { Link } from 'react-router-dom';
import { logout } from '../../../../../actions/actionCreator';
class Login extends Component {
  constructor(props){
    super(props);
  }
onClicked=()=>{

   // console.log("PS");
  this.props.logout();

 // <i className="fa fa-envelope-o"/>
};
  render() {
    console.log(this.props.state.userReducers,"//");
    const content = (this.props.state.userReducers.user===null) ? <Link to="/login">Login</Link> :
      <span className={style.toClick}>

          <div className={style.ava}/>


        <span className={style.hi}>&nbsp; Hi,{this.props.state.userReducers.user.displayName} <i className="fa fa-angle-down"/></span>

        </span>
    ;
    return (
      <div className={style.flax}>
      <div className={style.main}>
      {content}
      </div>
        <div className={style.dashboard} >
          <ul className={style.dashboardList}>
            <li>View Dashboard</li>
            <li>My account</li>
            <li>Messages</li>
            <li> <Link to="/admin_panel/">Admin panel</Link></li>
            {/*<li onClick={this.onClicked}>Admin panel</li>*/}
            <li>Affiliate Dashboard</li>
            <li onClick={this.onClicked}>Logout</li>
          </ul>
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

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});


export default connect(mapStateToProps, mapDispatchToProps)(Login);

//export default Login;
