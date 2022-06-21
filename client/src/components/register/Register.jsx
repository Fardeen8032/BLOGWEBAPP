import  { useState } from "react";
import axios from "axios"
import "../register/register.css";
const Register=()=>{
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const handleSubmit = async (e) =>{
        e.preventDefault();
        setError(false);
        try{
            const res = await axios.post("http://localhost:5000/auth/register", {
                username,
                email,
                password,
            });
            if(res.data){
                window.location.replace("/login");
            }
        } catch (err){
            setError(true);
        }
    };

    return(
        <div className="container">
            <p className="Title">Register</p>
            <form  className="registerform" onSubmit={handleSubmit}>
                <label>Username</label>
                <input
                type="text"
                className="registerInput"
                placeholder="Enter username"
                required
                onChange={(e)=>setUsername(e.target.value)}
                />
                <label>Email</label>
                <input
                type="text"
                className="registerInput"
                placeholder="Enter email"
                required
                onChange={(e)=>setEmail(e.target.value)}
                />
                <label>Password</label>
                <input
                type="password"
                className="registerInput"
                placeholder="Enter password"
                required
                onChange={(e)=>setPassword(e.target.value)}
                />
                <button className=" registerButton" type="submit">register</button>
            </form>
            {error && <span style ={{color:"red", marginTop:"10px"}}>pls enter correct crendentials!!</span> }
        </div>
    );
}
export default Register;