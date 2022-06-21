import { useContext, useRef } from "react";
//import  { useState } from "react";
import "../login/login.css";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import axios from "axios";
const Login=()=>{
    const userRef = useRef();
    const passwordRef = useRef();
    const {dispatch, isFetching} = useContext(Context)
    //const [error, setError] = useState(false);
    const handleSubmit =  async (e) => {
      e.preventDefault();
      //setError(false);
      dispatch({type:"LOGIN_START"});
      try{
        const res = await axios.post("http://localhost:5000/auth/login", {
          username: userRef.current.value,
          password: passwordRef.current.value,
        });
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data});
        window.location.replace("/");
      }catch(err){
        dispatch({ type: "LOGIN_FAILURE"});
        //setError(true);
      }
    };
    return(
        <div className="container">
          <p className="Title">login</p>
          <form className="loginform" onSubmit={handleSubmit}>
            <label>Username</label>
            <input type="text"
            className="loginInput"
            placeholder="username"
            ref={userRef}
            required
            />
            <label>Password</label>
            <input
            type="password"
            className="loginInput"
            placeholder="password"
            ref={passwordRef}
            required
            />
            <button className=" Button" type="submit" disabled={isFetching}>login</button>
          </form>


          <Link className="register" to='/register'>
            <p className="account">New to website? create an account</p>
          </Link>
        </div>
    );
}
export default Login;