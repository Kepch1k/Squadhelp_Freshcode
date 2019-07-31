// import React ,{ Component  } from 'react';
// import StartPage from './pages/StartPage/StartPage';
// import Login from './pages/Login/Login';
// import SignUp from './pages/SignUp/SignUp';
// import AdminPanel from './pages/AdminPanel/Adminpanel';
// import {Route} from "react-router-dom";
// import {Router} from "react-router-dom";
// import history from './boot/browserHistory';
// import { userIsLogin } from './actions/actionCreator';
// import connect from 'react-redux/es/connect/connect';
// import CheckUser from './components/Another/checkUser';
// //import { Route, Redirect } from 'react-router'
// //import { USER_KEY } from './constants/consts';
// class App extends Component {
//   render(){
//
//  /*   const user = this.props.state.userReducers.user;
//     console.log(user);
//     if(!user){this.props.userIsLogin(user);
//     console.log("aga");
//     }*/
//
//     return (
//       <CheckUser>
//         <Router history={history}>
//           <div>
//             <Route path="/" exact component={StartPage} />
//             <Route path="/login/"  exact component={Login} />
//             <Route path="/signup/" exact component={SignUp} />
//             <Route path="/admin_panel/" exact component={AdminPanel} />
//           </div>
//         </Router>
//       </CheckUser>
//     )
//   }
// }
// const mapStateToProps = (state) => {
//   return {
//     state
//   };
// };
//
// const mapDispatchToProps = (dispatch) => ({
//   userIsLogin: (user) => dispatch(userIsLogin(user)),
// });
//
// export default connect(mapStateToProps, mapDispatchToProps)(App);

import React ,{ Component  } from 'react';
import StartPage from './pages/StartPage/StartPage';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import AdminPanel from './pages/AdminPanel/Adminpanel';
import {Route , Switch} from "react-router-dom";
import {Router} from "react-router-dom";
import history from './boot/browserHistory';
import { userIsLogin } from './actions/actionCreator';
import connect from 'react-redux/es/connect/connect';
import CheckUser from './components/Another/checkUser';
import NotFound from './pages/NotFound/notFound';
//import { Route, Redirect } from 'react-router'
//import { USER_KEY } from './constants/consts';
class App extends Component {
  render(){
    return (
      <CheckUser>
        <Router history={history}>
          <Switch>
            <Route path="/" exact component={StartPage} />
            <Route path="/login/"  exact component={Login} />
            <Route path="/signup/" exact component={SignUp} />
            <Route path="/admin_panel/" exact component={AdminPanel} />
            <Route component={NotFound} />
          </Switch>
        </Router>

      </CheckUser>
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(App);

