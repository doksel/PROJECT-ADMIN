import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import DefaultRoute from "./default";
import GuestRoute from "./hoc/GuestRoute.js";
import PrivateRoute from "./hoc/PrivateRoute.js";
import MainLoader from "../views/components/MainLoader"

import Auth from "../views/pages/Auth";
import Admin from "../views/pages/Admin";
import { me } from "../store/userStore/actions";


const App = ({token, isLoading}) => {
  const dispatch = useDispatch();
  const tokens = token || localStorage.getItem("token")

  useEffect(()=>{
    tokens && dispatch(me());
  },[tokens])
  
  return (
      <>
        {isLoading ? (
          <MainLoader/>
        ) :
         (
          <div className="main">
            <Switch>
              <Route path="/" exact component={DefaultRoute} /> 
              
              <GuestRoute path="/auth/:type" exact component={Auth} />
              
              <PrivateRoute
                path="/admin/:category?/:action?/:id?"
                exact
                component={Admin}
              />
            </Switch>
          </div>
        )}
      </>
    )
  }

  const mapStateToProps = ({authStore}) => ({...authStore});

  export default connect(mapStateToProps)(App);
