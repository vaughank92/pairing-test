import React from 'react';
import { useState } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import IconButton from '@material-ui/core/IconButton';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';


const Form = (props) => {

    const [state, setState] = useState({
        user_name: '',
        user_email: '',
        user_phone: '',
        pairing: false,
        file: [],
        user_pin: ''
    });

    const useStyles = makeStyles({
        saveButton: {
            background: '#17d1ff',
            color: 'white',
            height: '50px',
            width: '125px',
            fontSize: '16px'
        },
        cancelButton: {
            color: '#17d1ff',
            height: '50px',
            width: '125px',
            fontSize: '16px'
        },
        textField: {
            '&after': {
                border: 'none'
            }
        },
        textInput: {
            color: 'white',
            '&::before': {
                borderBottomColor: '#2a475e'
            },
            '&:hover:not(.Mui-disabled):before': {
                borderBottomColor: '#2a475e'
            },
            '&::after': {
                borderBottomColor: '#f5f5f5'
            }
        },
        textLabel: {
            color: '#b4b8bd'
        },
        imageIcon: {
            color: 'white',
        },
        imageInput: {
            display: 'none'
        },
        avatarImage: {
            width: '150px',
            height: '150px'
        }
      });

    const classes = useStyles();

    const toggleChecked = (event) => {
        setState({ ...state, pairing: event.target.checked });
    }

    const fileUpload = (event) => {
        setState({ ...state, file: URL.createObjectURL(event.target.files[0])});
    }

    //need to be set for dynamic event.target.name
    const nameChange = (event) => {
        setState({...state, user_name: event.target.value});
    }
    const numberChange = (event) => {
        setState({...state, user_phone: event.target.value});
    }
    const emailChange = (event) => {
        setState({...state, user_email: event.target.value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let formData = new FormData();
        for(const field in state) {
            // if(field !== 'file') {
                formData.append(field, state[field]);
            // }
        }

        fetch('http://projects.codeandtrust.com/api/user/create', {
            method: 'POST',
            body:formData
        }).then((res) => res.json())
        .then((data) => {
            setState({...state, user_pin: data.data.user_pin});
            console.log(data);
        })
        .catch((err) => console.log(err))
    }

    return (
        <form className="userForm" onSubmit={handleSubmit}>
            <div className="userImage">
            {state.file.length !== 0 ? 
            <Avatar alt="User Image" classes={{root: classes.avatarImage}} src={state.file}/> : 
            <Avatar alt="User Image" classes={{root: classes.avatarImage}} ></Avatar>}
            
            <input accept="image/*"
                className={classes.imageInput}
                id="icon-button-file"
                type="file"
                onChange={fileUpload}
            />
            <label className="imageLabel" htmlFor="icon-button-file">
                <IconButton color="primary" aria-label="upload picture" component="span">
                    <AddPhotoAlternateIcon  classes={{root: classes.imageIcon}}/>
                </IconButton>
            </label>
            </div>

            <h1 className="userName">{state.user_name}</h1>
            <div className="fields">
                <TextField
                    id="standard-name-input"
                    label="Name"
                    type="text"
                    name="user_name"
                    onChange={nameChange}
                    InputProps={{className: classes.textInput}}
                    InputLabelProps={{className: classes.textLabel}}
                />
                <TextField
                    id="standard-phone-input"
                    label="Phone"
                    type="tel"
                    name="user_phone"
                    onChange={numberChange}
                    InputProps={{className: classes.textInput}}
                    InputLabelProps={{className: classes.textLabel}}
                />
                <TextField
                    id="standard-email-input"
                    label="Email"
                    type="email"
                    name="user_email"
                    onChange={emailChange}
                    InputProps={{className: classes.textInput}}
                    InputLabelProps={{className: classes.textLabel}}
                />
                <FormGroup>
                    <TextField
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        InputProps={{className: classes.textInput}}
                        InputLabelProps={{className: classes.textLabel}}
                    />
                    <span>Change Password</span>
                </FormGroup>
                <FormGroup>
                    <TextField
                        id="standard-number"
                        label="Access Code"
                        type="text"
                        color="secondary"
                        value={state.user_pin}
                        InputLabelProps={{className: classes.textLabel}}
                        InputProps={{className: classes.textInput, readOnly: true}}
                    />
                    <span>Access Pin</span>
                </FormGroup>
                <FormControlLabel
                    control={<Switch checked={state.pairing} 
                    onChange={toggleChecked} 
                    name="pairing"/>}
                    value={state.pairing}
                    label={"ENABLE PAIRING"}
                />
            </div>
            <div className="buttons">
                <Button classes={{root: classes.cancelButton}}>
                    Cancel</Button>
                <Button variant="contained"
                type="submit"
                classes={{root: classes.saveButton}}>
                    Save
                </Button>
            </div>
        </form>
    )
}

export default Form;