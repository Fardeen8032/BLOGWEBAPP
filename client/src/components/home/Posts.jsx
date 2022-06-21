import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
 import Post from './Post';
import axios from "axios";
import { useLocation } from 'react-router';
import { useState, useEffect } from 'react';
  const Posts = ({post}) => {
     const [posts, setPosts]= useState([]);
     const {search} = useLocation();

     useEffect(()=>{
       const fetchPosts = async ()=>{
         const res = await axios.get("http://localhost:5000/api/posts" + search);
         console.log(res);
         setPosts(res.data);

       }
       fetchPosts();
     },[search]);

     //let posts=[1,2,3,4,5,6,7,8]
    return (

        posts.map(post => (
          <Grid item lg={3} sm={4} xs={12}>
           <Link to={`/detailpost/${post._id}`} style={{textDecoration:'none',color:'inherit'}}>
              <Post post={post}/>
           </Link>

           </Grid>
        ))


    )
}

export default Posts;