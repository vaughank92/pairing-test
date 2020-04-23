import React from 'react';
import useState from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DevicesIcon from '@material-ui/icons/Devices';
import DraftsIcon from '@material-ui/icons/Drafts';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import Drawer from '@material-ui/core/Drawer';
import Avatar from '@material-ui/core/Avatar';

const SideDrawer = ({drawerState, closeHandler}) => {

    //find a library to grab geolocation from the ip address for the
    //location after user is created

    const list = (
        <List>
            <div className="userInfo">
                <ListItem button key="Image">
                    <Avatar alt="User Image" />
                    <ListItemText primary="Name"></ListItemText>
                    <ListItemText primary="Location"></ListItemText>
                </ListItem>
            </div>
            <div className="menuItems">
                <ListItem button key="Account Settings">
                    <AccountCircleIcon />
                    <ListItemText primary="Account Settings">
                    </ListItemText>
                </ListItem>
                <ListItem button key="Paired Devices">
                    <DevicesIcon />
                    <ListItemText primary="Paired Devices"></ListItemText>
                </ListItem>
                <ListItem button key="Invites">
                    <DraftsIcon />
                    <ListItemText primary="Invites"></ListItemText>
                </ListItem>
            </div>
            <div className="functions">
                <ListItem button key="Triggers">
                    <PlaylistAddCheckIcon />
                    <ListItemText primary="Triggers"></ListItemText>
                </ListItem>
                <ListItem button key="Logout">
                    <PowerSettingsNewIcon />
                    <ListItemText primary="Logout"></ListItemText>
                </ListItem>
            </div>
        </List>
    )

    return (
        <Drawer anchor='left' open={drawerState} onClose={() => closeHandler()}>
            {list}
        </Drawer>
    )
}

export default SideDrawer;