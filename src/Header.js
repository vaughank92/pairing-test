import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';

const Header = ({clickHandler}) => {

    const useStyles = makeStyles({
        menuButton: {
            color: 'white',
        },
    });

    const classes = useStyles();

    return (
        <div className="header">
            <IconButton className="menu" onClick={() => clickHandler()}>
                <MenuIcon classes={{root: classes.menuButton}}/>
            </IconButton>
            <IconButton className="dots">
                <MoreVertIcon classes={{root: classes.menuButton}}/>
            </IconButton>
        </div>
    )
}

export default Header;