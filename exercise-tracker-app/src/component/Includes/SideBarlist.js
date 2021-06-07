
import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, makeStyles, } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/Inbox';
import {AccountCircle} from '@material-ui/icons';
import DashboardSharpIcon from '@material-ui/icons/DashboardSharp';
import ExitToAppSharpIcon from '@material-ui/icons/ExitToAppSharp';
import PermContactCalendarSharpIcon from '@material-ui/icons/PermContactCalendarSharp';
import TimelineSharpIcon from '@material-ui/icons/TimelineSharp';
import CreateNewFolderTwoToneIcon from '@material-ui/icons/CreateNewFolderTwoTone';
import PersonAddTwoToneIcon from '@material-ui/icons/PersonAddTwoTone';
const useStyle = makeStyles((theme) => ({
        container: {
            margin: '0px',
            padding: '0px',
        },
        logos: {
             width: '200px',
             height: '130px',
             marginBottom: '30px'
        },
       lists: {
           marginBottom: '10px'
       }
}))


// function of listlink 
function ListItemLink(props) {
    return <ListItem button component="a" {...props} />
}
const SideBarMenu = () =>{
   const classes = useStyle();

    return(
      <div className={classes.container}>

         <img  src='Images/logo-banner.jpg' alt="logos" className={classes.logos} component="Box" />
        <List component="nav" >
                            
           <ListItemLink href="/" className={classes.lists}>
            <ListItemIcon>
             <DashboardSharpIcon/>
            </ListItemIcon>
             <ListItemText>Dashboard</ListItemText>   
          </ListItemLink>
            
          <ListItemLink href="/create_exercise" className={classes.lists}>
            <ListItemIcon>
             <CreateNewFolderTwoToneIcon/>
            </ListItemIcon>
             <ListItemText> Create Exercise</ListItemText>   
          </ListItemLink>

          <ListItemLink href="/create_user" className={classes.lists}>
            <ListItemIcon>
             <PersonAddTwoToneIcon/>
            </ListItemIcon>
             <ListItemText> Create User</ListItemText>   
          </ListItemLink>
          
          <ListItemLink href="/#" className={classes.lists}>
            <ListItemIcon>
             <PermContactCalendarSharpIcon/>
            </ListItemIcon>
             <ListItemText> User Contact Number</ListItemText>   
          </ListItemLink>

          <ListItemLink href="/#" className={classes.lists}>
            <ListItemIcon>
             <TimelineSharpIcon/>
            </ListItemIcon>
             <ListItemText>Analytics</ListItemText>   
          </ListItemLink>

           
          <ListItemLink href="/#" className={classes.lists}>
            <ListItemIcon>
             <ExitToAppSharpIcon/>
            </ListItemIcon>
             <ListItemText>Logout</ListItemText>   
          </ListItemLink>

        </List>
      </div>
    )
}

export default SideBarMenu;