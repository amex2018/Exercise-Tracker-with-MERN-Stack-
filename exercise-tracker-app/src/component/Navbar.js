import React, {useState}  from 'react';
import {AppBar, Toolbar, IconButton, Typography, Button, Drawer, makeStyles} from '@material-ui/core';
import {Menu, AccountCircle, Height, NoEncryption} from '@material-ui/icons';
import SideBarMenu from './Includes/SideBarlist';
import '../App.css';
import {Link} from 'react-router-dom';

const setStyle = makeStyles((themes) => ({
     title: {
         textDecoration: 'none',
         color: '#fff',
         marginLeft: '20px'
     }
}))
 const Navbar = () => {
     const classes = setStyle();
        const [open, setOpen] = useState(false)
        // const [anchor, setAnchor] = useState('left')
        // const handlerAccount = () =>{
        //     setAnchor('bottom')
        //     setOpen(true)
        // }
        const handlerDrawer = () =>{
            // setAnchor('left')
            setOpen(true)
        }
       
        return(
            <div className='container'>
          <AppBar position='static' style={{backgroundColor: '#f50057'}}>
              <Toolbar>
                  {/* menu icons start */}
                  <IconButton onClick={handlerDrawer} color='inherit' edge='start' aria-label='menu'>
                      <Menu/>
                  </IconButton>
                 {/* menu icons end*/}

              {/* title name on toolbar */}
            <Typography variant='h5' className='typography'>
              <Link to={'/'} className={classes.title}>Exercise Tracker System</Link> 
            </Typography>

            {/* menu on toolbar */}
            <IconButton  color='inherit' aria-label='account'>
                <AccountCircle/>
            </IconButton>

              </Toolbar>
          </AppBar>


          {/* drawer  */}
            <Drawer 
            anchor ='left'
            open= {open}
            onClose= {() => setOpen(false)}
            >
           <div style={{height: '100%', padding: '25px', width: '250px'}}>
            <SideBarMenu/>
           </div>
            </Drawer>


            </div>
        )
    }

export default Navbar;