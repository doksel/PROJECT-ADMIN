import React, { useEffect } from "react";
import { useDispatch, connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";

import DefaultRoute from "./default";
import GuestRoute from "./hoc/GuestRoute.js";
import PrivateRoute from "./hoc/PrivateRoute.js";
import MainLoader from "../views/components/MainLoader"

import Auth from "../views/pages/Auth";
import Admin from "../views/pages/Admin";
import { me } from "../store/authStore/actions";

const App = ({ me, user, userId, isLoading }) => {  
  const dispatch = useDispatch();
  const token = localStorage.getItem("token")

  useEffect(()=>{
    if(token) {
      dispatch(me())
    };
  },[])

  useEffect(()=>{
    if(token && !user && userId) {
      dispatch(me());
    }
  },[token, user, userId, dispatch])

  return (
    <>
      <MainLoader loading={isLoading}/> 

      {!isLoading && ( 
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
    </>)
  }

  const mapStateToProps = ({ authStore }) => ({...authStore});
  const mapDispatchToProps = { me };

  export default connect(mapStateToProps, mapDispatchToProps)(App);
