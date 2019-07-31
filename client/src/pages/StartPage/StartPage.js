import React, {Component} from 'react';
import style from './StartPage.module.scss';
import Header from '../../components/Header/Header';
import connect from 'react-redux/es/connect/connect';
import { userIsLogin } from '../../actions/actionCreator';



class StartPage extends Component {

  constructor(props){
    super(props);
    this.state ={
      isFetching:false,
      error:null,
      users:[]
    }
  }


  render() {
    return (
      <div className={style.body}>
        <Header/>
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
  userIsLogin: (user) => dispatch(userIsLogin(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StartPage);

