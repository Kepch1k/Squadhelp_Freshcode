import React, {Component} from 'react';
import style from './CreateContest.module.scss';
import Header from '../../components/commonToAll/Header/Header';
import HeaderBottom from '../../components/commonToAll/HeaderBottom/HeaderBottom';
import HeaderCreateContest from '../../components/CreatContestComponents/Header/Header';
import ContestCategories from '../../components/CreatContestComponents/contestCategories/contestCategories';
import PackagesAndOther from '../../components/CreatContestComponents/PackagesAndOther/PackagesAndOther';
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
        <HeaderBottom/>
        <HeaderCreateContest/>
        <ContestCategories/>
        <PackagesAndOther/>
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

