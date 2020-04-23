import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Form from './Form';
import NotFound from './NotFound';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles'

const Router = () => {

    const newTheme = createMuiTheme({
        typography: {
            "fontFamily": "\"Play-Regular\", \"Helvetica\", \"Arial\", sans-serif",
            "fontSize": 14,
            "fontWeightLight": 300,
            "fontWeightRegular": 400,
            "fontWeightMedium": 500
        }
    });
    

    return (
        <ThemeProvider theme={newTheme}>
            <BrowserRouter>
                <div className="Router">
                    <App />
                    <Switch>
                        <Route exact path="/" component={Form}/>
                        <Route component={NotFound}/>
                    </Switch>
                </div>
            </BrowserRouter>
        </ThemeProvider>
        
    )
}

export default Router;