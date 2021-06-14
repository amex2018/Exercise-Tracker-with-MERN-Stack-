import React, {useState} from 'react';
import {Modal, Button, Toolbar,  makeStyles,Icon, Container} from '@material-ui/core';
import AddTwoToneIcon from '@material-ui/icons/AddTwoTone';
import UserForm from '../Includes/UserForm';

const UserModal = () =>{
    
    const [open, setOpen] = useState(false);

    const classes = setStyle();
   
    const ModalOpenhandler = () =>{
       setOpen(true)
    }
    const ModalClosehandler = () =>{
        setOpen(false)
    }

    return(

       <Container className={classes.addsection}>

       <Toolbar>
        <Button
         variant="contained"
         className={classes.addbutton}
         endIcon={<Icon><AddTwoToneIcon/></Icon>}
         onClick={ModalOpenhandler}
        >
          Add User
        </Button>
        </Toolbar>


      {/* Modal form */}
      <Modal
        open={open}
        onClose={ModalClosehandler}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
       <UserForm/>
      </Modal>
       </Container>
       
      
    )
}

export default UserModal;


const setStyle = makeStyles((themes) => ({
    addsection:{
        padding: "30px",
        margin: "0px"
      },
      
      addbutton: {
        color: "#ffffff",
        backgroundColor: "#f11048",
        alignItems: "center",
        "&:hover": {
          backgroundColor: "#F1108C",
        }
      },

}))