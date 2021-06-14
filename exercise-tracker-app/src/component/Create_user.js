import React, {useState, useEffect } from 'react';
import {Toolbar, Typography, Table, TableBody,TableRow, Paper, TableCell, TableContainer,TableHead,TablePagination, makeStyles, Container} from '@material-ui/core'
import {Button , Icon, TextField, Modal} from '@material-ui/core';
import AddTwoToneIcon from '@material-ui/icons/AddTwoTone';
import axios from 'axios';
import UserModal from '../component/Includes/UserModal';



const CreateUser = (...props) =>{
  
const classes = setStyle();

const [users, setUsers] = useState([]);
const [page, setPage]= useState(0);
const [rowsPerPage, setRowsPerPage]= useState(5);
const [search, setSearch] = useState("");
const [open, setOpen] = useState(false);

const ReadAllusers = async (res) =>{
   res = await axios.get('http://localhost:3000/users');
   setUsers(res.data);
}

useEffect(() =>{
  ReadAllusers();
}, []);


// pagination function

const pagehandler = (nextpage) =>{
// to build the next page or shift to the next page 
  setPage(nextpage)
}
const rowsPerPagehandler =(event) =>{
  setRowsPerPage(event.target.value)
}

const Searchhandler =(event) =>{
  setSearch(event.target.value)
}


    return( 
      <Container className={classes.container}>

               <Toolbar  className={classes.head}>
               <Typography variant="h4" >
                   User List and Create New User Page
              </Typography>
               </Toolbar>
                <UserModal/>

               <Toolbar className={classes.filtersection}>
                   <TextField
                   label="Search Users"
                   variant="outlined"
                   placeholder="Search any user info...."
                   className={classes.inputfield}
                   onChange={Searchhandler}
                   />
                   
               </Toolbar>
         <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Fullname</TableCell>
              <TableCell>Phone Number</TableCell>
              </TableRow>
              </TableHead>
            <TableBody>
                {
                users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).filter(users => {
                  if(search == ""){
                     return users
                  }else if(users.username.toLowerCase().includes(search.toLowerCase()) || users.fullname.toLowerCase().includes(search.toLowerCase()) || users.phone.toLowerCase().includes(search.toLowerCase())){
                     return users
                  }
                }).map((read) =>(
                  <TableRow>
                  <TableCell>#</TableCell>
                  <TableCell>{read.username}</TableCell>
                  <TableCell>{read.fullname}</TableCell>
                  <TableCell>{read.phone}</TableCell>
                  </TableRow>
                ))}

            </TableBody>
          </Table>
          <TablePagination 
          rowsPerPageOptions={[5,10,20,50, 100,200]}
          count={users.length}
           page={page}
           rowsPerPage={rowsPerPage}
           onChange={pagehandler}
           onchange={rowsPerPagehandler}
           className={classes.pagination}
          >
          </TablePagination>
         </TableContainer>

        
      </Container>
     
      
    )
}

export default CreateUser;


// style sheets


const setStyle = makeStyles((themes) => ({
  
  container: {
    justifyContent: "center",
    alignContent: "center",
    maxWidth: "100%",
    maxHeight: "100%",
    marginTop: "20px"
  },
  head: {
    padding: "20px",
    justifyContent: "center",
    border: "1px solid #ECEBEB"
  },
 
  filtersection: {
    border: "1px solid #ECEBEB",
    padding: "30px",
  
  },
  inputfield: {
    width: "100em",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  pagination:{
    flex: "1"
  }
  
  }))