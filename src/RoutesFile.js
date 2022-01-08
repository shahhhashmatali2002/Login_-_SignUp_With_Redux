import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginFile from "./Components/Login/LoginFile";
import Signup from "./Components/SignUp/signup";
import { Redirect } from "react-router";
const RoutesFile = () =>{
    return(
        <Router>
            <Switch>
                <Route exact path={'/'} component={LoginFile}/>
                <Route path={'/SignUp'} component={Signup} />
            </Switch>
        </Router>
    )
};

export default RoutesFile;