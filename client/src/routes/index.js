import React, { useState, useEffect } from "react";
import { useDispatch, connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";

import DefaultRoute from "./default";
import GuestRoute from "./hoc/GuestRoute.js";
import PrivateRoute from "./hoc/PrivateRoute.js";
import MainLoader from "../views/components/MainLoader"

import Auth from "../views/pages/Auth";
import Admin from "../views/pages/Admin";
import { me } from "../store/authStore/actions";


// const App = ({ userId, isLoading, isLogged }) => {  
  const App = ({ me, userId, isLoading, isLogged }) => {  
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch();
  const token = localStorage.getItem("token")

  const getMe = async() => {
    if(token){
      await me()
    }
    setLoading(false)
  }

  useEffect(()=>{
    getMe()
  },[])

  useEffect(()=>{
    if(isLogged && userId) {
      setLoading(true)
      getMe()}
  },[userId])

  // useEffect(()=>{
  //   token && dispatch(me());
  // },[])

  // useEffect(()=>{
  //   token && isLogged && userId && dispatch(me());
  // },[userId])

  return (
    <>
    <MainLoader loading={loading}/> 

        {!loading && ( 
          <div className="main">
            <Switch>
              <Route path="/" exact component={DefaultRoute} /> 
              
              <GuestRoute path="/auth/:type" exact component={Auth} />
              
              <PrivateRoute
                path="/admin/:category?/:action?/:id?"
                exact
                component={Admin}
              />
              <Redirect to="/" />
            </Switch>
          </div>
        )}
      </>
    )
  }

  const mapStateToProps = ({ authStore }) => ({...authStore});
  const mapDispatchToProps = { me };

  export default connect(mapStateToProps, mapDispatchToProps)(App);
