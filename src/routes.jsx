import React from "react";
import { Redirect, Route, withRouter, Link } from "react-router-dom";
import Login from './Components/Login';
import Payments from './Components/Payments';
import Mobile from './Components/Mobil';
import Header from './Components/Header';



const Routers = () => {
  return (
    <>
    <Redirect to ={{ pathname: '/login'}} />
    <Route exact path='/login' component={Login} key='login'/>
    <Route exact path='/payments' component={Payments} key='payments'/>
    <Route exact path='/Mobile' component={Mobile} key='Mobile'/>
    </>
  )
};

export default withRouter(Routers);
