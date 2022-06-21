import {useState,useEffect,useContext} from 'react';
import {Edit,Delete} from '@material-ui/icons';
// import {useEffect} from "react";
import {useLocation} from "react-router";
import axios from "axios";
import { Context } from "../../context/Context";
import "../Post/detailpost.css";

import {Link} from 'react-router-dom';

const DetailPost=()=>{
    const location = useLocation();
    const path=location.pathname.split("/")[2];
    const [post, setPost] = useState({});
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [updateMode, setUpdateMode] = useState(false);

    const {user} = useContext(Context);
     useEffect(()=>{
        const getPost = async () =>{
        const res = await axios.get('http://localhost:5000/api/posts/' + path);
        setPost(res.data);
        setTitle(res.data.title);
        setDesc(res.data.desc);
        console.log(res);
        };
        getPost();
    }, [path]);
    const handleUpdate = async ()=>{
        try{
            await axios.put(`http://localhost:5000/api/posts/${post._id}` , {
               username: user.username,
               title,
               desc,
            });
            window.location.replace("/");
        } catch (err){}

    }

    const handleDelete = async () =>{
        try{
            await axios.delete(`http://localhost:5000/api/posts/${post._id}` , {
              data:{ username: user.username},
            });
            window.location.replace("/");
        } catch (err){}

    };


    // const url = post.photo ? post.photo :'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
return(

    <div className="create">
         {post.photo && (
                    <img src={"../../"+post.photo}  className="Img" alt=""/>

            )}




            {
                updateMode ?( <input className="createInput"
                                     autoFocus={true}
                                     type="text"
                                     value={title}
                                     onChange={(e)=>setTitle(e.target.value)}
                                     />

                                     ):(
                    <div className="create">
                        <h1  className="Title">{post.title}</h1>
                       {post.username === user?.username && (
                        <div className="icons">
                            <Link  to={`/detailpost/${post._id}`}> <Edit onClick={() => setUpdateMode(true)} className="Editicon"  color="primary"/></Link>

                            <Delete onClick={handleDelete} className="Deleteicon" color="error" />
                        </div>
                    )}
                    </div>
                )
            }

       <div className="heading">

          <div className="icons">
            <Link to ={`/?user=${post.username}`} className="link">
              <p>author name <span className="authorname:">{post.username}</span></p>
            </Link>
          </div>
           <p className="date">{new Date(post.createdAt).toDateString()}</p>
           <div >
             {updateMode && (
                <button className="Submit" onClick={handleUpdate}>Update</button>
              )}
            </div>
        </div>

       {
           updateMode ? (
            <div>
            <textarea
               placeholder="Add Description" type="text"
               className="createinput createtext"
               autoFocus={true}
               value={desc}
               onChange={(e)=>setDesc(e.target.value)}
            />
            </div>
           ):(
            <p>{post.desc}</p>
           )
       }

    </div>


 )
}
export default DetailPost;