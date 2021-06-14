import React, {useState, useEffect} from 'react';
import {Table, TableBody, Container, TableHead, TableCell, TableContainer, TablePagination, TableRow, TableSortLabel,makeStyles, Fab} from '@material-ui/core';
import {Toolbar, Typography, Paper, Tooltip, TextField} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import axios from 'axios';
import { Link } from 'react-router-dom';

const styleUses =  makeStyles((themes) =>({
 root: {
     maxWidth: "100%",
     maxHeight: "100%",
     backgroundColor: themes.palette.grey[200],
     padding: themes.spacing(3),
     
 },
 deletebutton: {
     color:'#141414'
 }
}))

const UseTable = () =>{
  const classes = styleUses();

  const [exercises, setExercises] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [search, setSearch] = useState("");

  const LoadExercises = async () =>{
      const res = await axios.get('http://localhost:3000/exercises');
      setExercises(res.data)   
  }

  useEffect(() =>{
      LoadExercises();
  }, []);


//   next page 
const onChangePage = (event, nextpage) =>{
      setPage(nextpage);
}
// per page function
const onChangeRowsPerPage = (event) =>{
    setRowsPerPage(event.target.value)
}

// search function
const onChangeSearch = (event) =>{
    setSearch(event.target.value);
}

// delete api
const Deletehandler = (id) =>{
 
    axios.delete(`http://localhost:3000/exercises/${id}`)
    .then(response =>{
          console.log(response.data)
          window.alert('successfuly deleted!!')
          window.location.reload(false)
    })
}

    return(
        <Container className={classes.root}>
            <Toolbar component={Paper}>
              {/* title name on toolbar */}
            <Typography variant='h5' className='typography'>
               Exercise Tracker List 
            </Typography>

            {/* menu on toolbar */}
            
            <TextField
          label="Search"
          style={{ margin: 5 }}
          placeholder="Search..."
          margin="normal" 
          variant="outlined"
          style={{
              width: "25%",
              border: "1px solid #E6E6E6"
          }}
          onChange ={onChangeSearch}
        />
              </Toolbar>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell>USERNAME</TableCell>
                            <TableCell>DESCRIPTION</TableCell>
                            <TableCell>DURATION</TableCell>
                            <TableCell>DATE TO CREATE</TableCell>
                            <TableCell>ACTION</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                           
                           { 
                               exercises.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).filter( exercises =>{
                                   if(search == ""){
                                       return exercises
                                   }
                                   else if(exercises.username.toLowerCase().includes(search.toLowerCase()) || exercises.duration.toLowerCase().includes(search.toLowerCase())){
                                       return exercises
                                   }
                                   
                               })
                               .map((user) => (
                                <TableRow>
                                <TableCell className={classes.counter}></TableCell>
                                <TableCell>{user.username}</TableCell>
                                <TableCell>{user.description}</TableCell>
                                <TableCell>{user.duration}</TableCell>
                                <TableCell>{user.date}</TableCell>
                                <TableCell>
                                    <Tooltip title="Delete" aria-label="delete">               
                                          <Link onClick={() => Deletehandler(user._id)} className={classes.deletebutton} ><DeleteIcon /></Link>
                                    </Tooltip>
                                    <Tooltip title="Edit" aria-label="Edit">               
                                          <Link to={`/update/${user._id}`} className={classes.deletebutton}><EditTwoToneIcon/></Link>
                                    </Tooltip>
                              </TableCell>
                            </TableRow>
                               ))}
        

                    </TableBody>
                </Table>
                 {/* pagination page for table  */}
            <TablePagination 
            rowsPerPageOptions={[5,10,20,50,100]}
             count={exercises.length} 
             rowsPerPage={rowsPerPage}
              page={page}
              onChangePage= {onChangePage}
              onChangeRowsPerPage={onChangeRowsPerPage}
              />
            </TableContainer>

           
        </Container>
    )
}

export default UseTable;