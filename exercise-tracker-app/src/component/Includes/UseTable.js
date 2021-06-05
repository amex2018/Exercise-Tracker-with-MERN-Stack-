import React, {useState, useEffect} from 'react';
import {Table, TableBody, Box, Container, TableHead, TableCell, TableContainer, TablePagination, TableRow, TableSortLabel,makeStyles, duration} from '@material-ui/core';
import {Toolbar, Typography, Paper, Checkbox, IconButton, Tooltip, FormControlLabel, Switch, TextField} from '@material-ui/core';
import {DeleteIcon,  FilterListIcon,AccountCircle,Menu} from '@material-ui/icons';
import axios from 'axios';
import { useParams } from 'react-router';
const styleUses =  makeStyles((themes) =>({
 root: {
     maxWidth: "100%",
     maxHeight: "100%",
     backgroundColor: themes.palette.grey[200],
     padding: themes.spacing(3),
     
 }
}))

const UseTable = () =>{
  const classes = styleUses();

  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [search, setSearch] = useState("");

  const LoadUser = async () =>{
      const res = await axios.get('http://localhost:3000/exercises');
      setUsers(res.data)
      
  }

  useEffect(() =>{
      LoadUser();
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
                               users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).filter( users =>{
                                   if(search == ""){
                                       return users
                                   }
                                   else if(users.username.toLowerCase().includes(search.toLowerCase())){
                                       return users
                                   }
                                   
                               })
                               .map((user) => (
                                
                                <TableRow>
                                <TableCell>1</TableCell>
                                <TableCell>{user.username}</TableCell>
                                <TableCell>{user.description}</TableCell>
                                <TableCell>{user.duration}</TableCell>
                                <TableCell>{user.date}</TableCell>
                                <TableCell>ACTION</TableCell>
                            </TableRow>
                               ))}
        

                    </TableBody>
                </Table>
                 {/* pagination page for table  */}
            <TablePagination 
            rowsPerPageOptions={[5,10,20,50,100]}
             count={users.length} 
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