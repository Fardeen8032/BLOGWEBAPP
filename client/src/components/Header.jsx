import {AppBar , makeStyles, Toolbar, Typography} from '@material-ui/core';
import {useContext } from 'react';

import {Link} from 'react-router-dom';
import { Context } from '../context/Context';
const useStyles=makeStyles({
    component: {
        background: 'black',
        color:'#ffffff',
        borderRadius:3,
        padding:'7,13',

    },
    container:{
        justifyContent:'center',

        '& > *': {
            padding: 20
        },
    },
    link:{
        textDecoration:'none',
        color:'inherit',
        '&:hover':{
            backgroundColor:'#ffffff',
            color:'black'
        },
    },

    logout:{
        textDecoration:'none',
        color:'inherit',
        '&:hover':{
            backgroundColor:'#ffffff',
            color:'black'
        },
    },

    login:{
        textDecoration:'none',
        color:'inherit',
        '&:hover':{
            backgroundColor:'#ffffff',
            color:'black'
        },
    }

 })
const Header=()=>{
    const {user,dispatch} = useContext(Context);

    const classes=useStyles();
    const handleLogout = () =>{
        dispatch({ type: "LOGOUT"});
    };
    return(
        <AppBar className={classes.component}>
            <Toolbar className={classes.container}>

               <Link className={classes.link} to='/'><Typography >Home</Typography></Link>
                <Typography className={classes.link}>AboutUs</Typography>
                {user?(
                    <Link className={classes.login}><Typography className={classes.link}>{user.username}</Typography></Link>


                    ) : (
                <Link className={classes.login} to='/login'><Typography className={classes.link} >Login</Typography></Link>

                )


                }
                 <Link className={classes.login} to='/login'><Typography className={classes.link} onClick={handleLogout} >{user && "Logout"}</Typography></Link>





            </Toolbar>
        </AppBar>
    );
}
export default Header;