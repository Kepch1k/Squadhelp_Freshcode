import React, {Component} from 'react';
import style from './Adminpanel.module.scss';
import List from '../../components/UsersList/contacts';
import { Link } from 'react-router-dom';
import { getAllUsers } from '../../actions/actionCreator';
import connect from 'react-redux/es/connect/connect';
import { Redirect } from 'react-router';

class AdminP extends Component {
  render() {
    if (this.props.state.userReducers.user===null || (this.props.state.userReducers.user.role==="USER"))return <Redirect to="/notFound" />;
    return (
      <div className={style.body}>
        <List array={this.props.state.getAllUsersReducer.data}/>
        <Link to="/"><div className={style.main}>Home</div></Link>
      </div>
    );
  }
  componentDidMount(){
      this.props.getAllUsers();
    }
}

const mapStateToProps = (state) => {
  return {
    state,
    users:state.getAllUsersReducer.data
  };
};

const mapDispatchToProps = (dispatch) => ({
  getAllUsers: () => dispatch(getAllUsers()),
});


export default connect(mapStateToProps,mapDispatchToProps)(AdminP);
