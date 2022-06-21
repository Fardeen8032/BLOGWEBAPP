import {makeStyles,Box, Typography} from '@material-ui/core';
const useStyle=makeStyles({
    image: {
       background: `url(${'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}) center/55% repeat-x #000`,
       width: '100%',
       height: '50vh',
       display: 'flex',
       flexDirection: 'column',
       alignItems:'center',
       justifyContent: 'center',
       '& :first-Child': {
           fontSize: 68,
           color: '#FFFFFF',
           lineHeight:1
       },
       '& :last-Child':{
           fontSize:50,
           color: '#FFFFFF'

       }


    }

});
const Banner = () =>{
    const classes=useStyle();

    return(
        <Box className={classes.image}>
            <Typography>
                WELCOME
            </Typography>
            <Typography>
                ALL
            </Typography>
        </Box>

    )
}
export default Banner;