import { makeStyles, Box, Typography } from '@material-ui/core';



const useStyle = makeStyles({
    container: {
        border: '1px solid #d3cede',
        borderRadius: 10,
        margin: 10,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        height: 350,
        '& > *': {
            padding: '0 5px 5px 5px'
        },
        //width:'20%'
        overflow:'hidden',
        backgroundColor:'black',
        color:'#ffffff'
    },
    image: {
        width: '100%',
        objectFit: 'cover',
        borderRadius: '10px 10px 0 0',
        height: 150
    },
    textColor: {
        color: '#878787',
        fontSize: 12
    },
    heading: {
        fontSize: 18,
        fontWeight: 600,
        textDecoration:'none'
    },

    detail: {
        fontSize: 14,
        wordBreak: 'break-word',
        overflow:'hidden'


    }

})

const Post = ({post}) => {

        const classes = useStyle();



    // const url = post.photo ? post.photo : 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
    return (
        <Box className={classes.container}>
            {post.photo && (
                    <img src={"../../"+post.photo}  className={classes.image} alt=""/>

            )}
            {/* <img src={url}  className={classes.image} alt=""/> */}


            {post.categories.map((c)=>(
                  <Typography className={classes.textColor}>{c.name}</Typography>
            ))}


                  <Typography className={classes.heading}>{post.title}</Typography>


               <Typography className={classes.textColor}>Authorname:{post.username}</Typography>
               <Typography className={classes.detail}>{post.desc}</Typography>

        </Box>

    )
}

export default Post;