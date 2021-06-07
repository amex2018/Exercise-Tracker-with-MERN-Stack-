import React, {useState, useEffect } from 'react';
import {Toolbar, Typography, Table, TableBody,TableRow, Paper, TableCell, TableContainer,TableHead,TablePagination, makeStyles, Container} from '@material-ui/core'
import {Button , Icon, TextField, Modal} from '@material-ui/core';
import AddTwoToneIcon from '@material-ui/icons/AddTwoTone';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';



const CreateUser = () =>{
  
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

const pagehandler = (event, nextpage) =>{
// to build the next page or shift to the next page 
  setPage(nextpage)
}
const rowsPerPagehandler =(event) =>{
  setRowsPerPage(event.target.value)
}

const Searchhandler =(event) =>{
  setSearch(event.target.value)
}

// modal Open
const ModelOpenhandle = () =>{
  setOpen(true)
}
// modal close
const handleClose = () =>{
  setOpen(false)
}

    return( 
      <Container className={classes.container}>

               <Toolbar  className={classes.head}>
               <Typography variant="h4" >
                   User List and Create New User Page
              </Typography>
               </Toolbar>

               <Toolbar className={classes.addsection}>
               <Button
                variant="contained"
                className={classes.addbutton}
                endIcon={<Icon><AddTwoToneIcon/></Icon>}
                onClick={ModelOpenhandle}
               >
                 Add User
               </Button>
               </Toolbar>

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
                  }else if(users.username.toLowerCase().includes(search.toLowerCase())){
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

         <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Container className={classes.modal}>
          <Toolbar component={Paper} >
          <Typography className={classes.modaltitle}>
            Create Users
          </Typography>
           
          </Toolbar>
          <Toolbar component={Paper} className={classes.forms}>
          <Grid container spacing={3} >
          <Grid item xs={12}>
          <label for="UserName">UserName</label>
          <TextField
            label="UserName"
            placeholder="Enter your username..."
            variant="outlined"
            fullWidth
           />
          </Grid>
          <Grid item xs={12}>
          <label for="fullName">Full Name</label>
          <TextField
            label="fullName"
            placeholder="Enter your full name..."
            variant="outlined"
            fullWidth
           />
          </Grid>
          <Grid item xs={12}>
          <label for="phone">Phone Number</label>
          <TextField
            label="phone number"
            placeholder="Enter your phone..."
            variant="outlined"
            fullWidth
           />
          </Grid>
          <Grid item xs={12}>
         <Button
          variant="contained"
          className={classes.addbutton}
          endIcon={<Icon><AddTwoToneIcon/></Icon>}
         >Save</Button>
          </Grid>
          </Grid>
        
          </Toolbar>

        </Container>
      </Modal>
      </Container>
     
      
    )
}

export default CreateUser;


// style sheets


const setStyle = makeStyles((themes) => ({
  // modal css start
  modal: {
    marginTop: "100px",
    width: "800px",

  },
  modaltitle: {
   marginLeft: "40%",
   fontWeight: "bold",
   fontSize: "25px",
   margin: "30px"
  },
  forms: {
  
     padding: "30px",
  },
  // modal css end
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
  addsection:{
    padding: "30px",
  },
  addbutton: {
    color: "#ffffff",
    backgroundColor: "#f11048",
    alignItems: "center",
    "&:hover": {
      backgroundColor: "#F1108C",
    }
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