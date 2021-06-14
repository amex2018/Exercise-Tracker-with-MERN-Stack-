import React, {useState} from 'react';
import {Typography,Button, TextField, Toolbar, Paper, makeStyles,Icon, Container} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import AddTwoToneIcon from '@material-ui/icons/AddTwoTone';
import { useForm } from 'react-hook-form';

const UserForm = () => {
      const { register, handlesubmit }= useForm();

        const onSubmit = (data) => {
          console.log(JSON.stringify(data));
        }
        const classes = setStyle(); 
         return(
            <Container className={classes.modal}>
            <Toolbar component={Paper} >
            <Typography className={classes.modaltitle}>
              Create Users
            </Typography>
             
            </Toolbar>

              <Toolbar component={Paper} className={classes.forms}>
              

                <form onSubmit={handlesubmit(onSubmit)}>
                <TextField
              label="fullName"
              placeholder="Enter your full name..."
              variant="outlined"
              fullWidth
              inputRef={register}
             />
              <TextField
              label="fullName"
              placeholder="Enter your full name..."
              variant="outlined"
              fullWidth
              inputRef={register}
             />
             <Button
            variant="contained"
            className={classes.addbutton}
            endIcon={<Icon><AddTwoToneIcon/></Icon>}
            type="submit"
           >Save</Button>
                </form>

              {/* <Grid container spacing={3} >
             
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
            
            </Grid> */}
            </Toolbar>
            
          
         
  
          </Container>
     )
    }


export default UserForm;

const setStyle = makeStyles (() => ({
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
      addbutton: {
        color: "#ffffff",
        backgroundColor: "#f11048",
        alignItems: "center",
        "&:hover": {
          backgroundColor: "#F1108C",
        }
      },
      addsection:{
        padding: "30px",
        margin: "0px"
      },
      
}))

