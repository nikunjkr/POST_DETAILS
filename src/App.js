import React, {useEffect} from "react";
import './App.css';
import Cookies from 'js-cookie';

import CommentList from './components/CommentList/CommentList'
// import {Container, AppBar, Typography} from "@material-ui/core"
;
import {useDispatch} from "react-redux"
import {getPosts, getUser} from './actions/Posts';
import PleaseLogin from './components/PleaseLogin'

import logo from './logo.png'

const App = () => {

  // console.log(store);
  const dispatch = useDispatch();

  useEffect(() => {
    // forgot to call
    dispatch(getPosts());
    dispatch(getUser());
    console.log("Dispatching");
  }, [dispatch]);

  return (
    <>
    <div className="app__header">
          <a href="https://skinder-5d70f.web.app/"> <img className="app__headerImage" src={logo} alt="Logo"/></a>


      </div>
    <div className="app">
      {Cookies.get('access_control_token_cookie_skinder') ?<CommentList/> :<PleaseLogin/>}
      
    </div>
    </>
  )
    
    
  
}

export default App;
