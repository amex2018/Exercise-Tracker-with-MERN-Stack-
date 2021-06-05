
import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, makeStyles, Box} from '@material-ui/core';
import InboxIcon from '@material-ui/icons/Inbox';
import {AccountCircle} from '@material-ui/icons';
import DashboardSharpIcon from '@material-ui/icons/DashboardSharp';
import ExitToAppSharpIcon from '@material-ui/icons/ExitToAppSharp';
import PermContactCalendarSharpIcon from '@material-ui/icons/PermContactCalendarSharp';
import TimelineSharpIcon from '@material-ui/icons/TimelineSharp';

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
const SideBarMenu = () =>{
   const classes = useStyle();

    return(
      <div className={classes.container}>

         <img  src='Images/logo-banner.jpg' alt="logos" className={classes.logos} component="Box" />
        <List component="nav" >
            <ListItem button className={classes.lists}>
                <ListItemIcon>
                   <DashboardSharpIcon/>
                </ListItemIcon>
                <ListItemText>Dashboard</ListItemText>
            </ListItem>

            <ListItem button className={classes.lists}>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText>Exercise List</ListItemText>
            </ListItem>

            <ListItem button className={classes.lists}>
                <ListItemIcon>
                    <AccountCircle/>
                </ListItemIcon>
                <ListItemText>Create User</ListItemText>
            </ListItem>

            <ListItem button className={classes.lists}>
                <ListItemIcon>
                    <PermContactCalendarSharpIcon />
                </ListItemIcon>
                <ListItemText>User Contact Number</ListItemText>
            </ListItem>

            <ListItem button className={classes.lists}>
                <ListItemIcon>
                    <TimelineSharpIcon/>
                </ListItemIcon>
                <ListItemText>Analytics</ListItemText>
            </ListItem>

            <ListItem button className={classes.lists}>
                <ListItemIcon>
                    <ExitToAppSharpIcon />
                </ListItemIcon>
                <ListItemText>Logout</ListItemText>
            </ListItem>
        </List>
      </div>
    )
}

export default SideBarMenu;