import Banner from './Banner';
import Categories from './Categories';
import Posts from './Posts';
import {Grid ,makeStyles} from '@material-ui/core';
// import { useEffect,useState } from 'react';
// import axios from "axios";
const useStyle = makeStyles({
  background:{
    backgroundColor:'#d4d4d4'
  },
  innercontainer:{
    backgroundColor:'#d4d4d4'
  }
})
 const Home= () => {
// const [posts,setPosts] = useState([]);

// useEffect(()=>{
//   const fetchPosts = async () =>{
//     const res = await axios.get("http://localhost:5000/api/posts");
//     setPosts(res.data);
//   }
//   fetchPosts();
// },[]);
const classes=useStyle();
  return (
        <>
           <Banner/>
           <Grid container>
             <Grid className={classes.innercontainer} item lg={2} xs={12} sm={2}>
               <Categories/>
             </Grid>
             <Grid  className={classes.background} container item lg={10} xs={12} sm={10}>
                <Posts/>
             </Grid>
           </Grid>
        </>
    )
}
 export default Home;