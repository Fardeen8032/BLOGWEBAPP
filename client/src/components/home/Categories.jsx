import { Button, Table, TableHead, TableRow, TableCell, TableBody, makeStyles, Grid, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { categories } from '../../constants/data';
const useStyle = makeStyles({

    write: {
        margin: 20,
        background: '#ffffff',
        color: '#ffffff',
        backgroundColor:'black',
        width:'86%',
        borderRadius:41,

    },
    link: {
        textDecoration:'none',
        color: 'inherit'
    },
    background:{
        backgroundColor:'#d4d4d4'
    },


})

const Categories = () => {
    const classes = useStyle();
    return (
        <>

          <Box className={classes.background}>
            <Link to='/createpost' style={{ textDecoration: 'none' }}>
                <Button  className={classes.write}>Create Post</Button>
            </Link>

            <Table>
                <TableHead>
                    <TableCell>
                        <Link to={'/'} className={classes.link}>
                           All Categories
                        </Link>
                    </TableCell>
                </TableHead>
                <TableBody>
                    {
                        categories.map(category => (
                            <TableRow>
                                <TableCell>
                                    <Link to={`/?cat=${category}`} className={classes.link}>
                                      {category}
                                    </Link>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
          </Box>

        </>
    )
}

export default Categories;