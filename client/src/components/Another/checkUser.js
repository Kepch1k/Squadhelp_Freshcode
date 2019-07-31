import React, { Component } from 'react';
import connect from "react-redux/es/connect/connect";
import { TOKENS_KEY} from '../../constants/consts';
import { userIsLogin } from '../../actions/actionCreator';
class UserLoader extends Component{
  constructor(props){
    super(props)
  }
  componentDidMount() {

    const user = this.props.user;
   // console.log(user);
    if(!user && localStorage.getItem(TOKENS_KEY) ){this.props.userIsLogin(user);
    //  console.log("aga");
    }
  }

  render(){
    return(
      <>
        {this.props.children}
      </>
    )
  }
}
const mapStateToProps = (state) => ({
  user: state.userReducers.user,
});
const mapDispatchToProps = (dispatch) => ({
  userIsLogin: () => dispatch(userIsLogin()),
});
export default connect(mapStateToProps, mapDispatchToProps)(UserLoader);
