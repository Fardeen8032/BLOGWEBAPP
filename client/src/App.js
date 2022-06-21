import React, { useContext } from 'react';
import { Box } from '@material-ui/core';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
//components
import Header from './components/Header';
import Home from './components/home/Home';
import DetailPost from './components/Post/DetailPost';
import CreatePost from './components/Post/CreatePost';
import UpdatePost from './components/Post/UpdatePost';
import Login from './components/login/Login';
import Register from './components/register/Register';
import { Context } from './context/Context';


function App() {
  const {user} = useContext(Context);
  return (
    <BrowserRouter>
      <Header/>
      <Box style={{marginTop:64}}>
       <Switch>
         <Route exact path='/' component={Home}/>
         <Route exact path='/detailpost/:id' component={DetailPost}/>
         <Route exact path='/createpost'> {user ? <CreatePost/> : <Register/>}</Route>
         {/* <Route exact path='/updatepost/:id' component={UpdatePost}/> */}
         <Route exact path='/login'>{user ? <Home/> : <Login/>}</Route>
         <Route exact path='/register'> {user ? <Home/> : <Register/>}</Route>
        </Switch>
      </Box>
    </BrowserRouter>

  );
}

export default App;
