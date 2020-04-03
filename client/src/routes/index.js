import React, { useState, useEffect } from "react";
import { Layout, message } from "antd";
import { Route, Switch } from "react-router-dom";

import DefaultRoute from "./default";
import GuestRoute from "./hoc/GuestRoute.js";
import PrivateRoute from "./hoc/PrivateRoute.js";


import Auth from "../views/pages/Auth";
import Admin from "../views/pages/Admin";

const App = () => {
  const [ loading, setLoading ] = useState(false);

  return (
      <>
        {!loading && (
          <>
            <Layout >
              <Switch>
                <Route path="/" exact component={DefaultRoute} /> <GuestRoute path="/login" exact component={Auth} />

                <PrivateRoute
                  path="/admin"
                  exact
                  component={Admin}
                />
              </Switch>
            </Layout>
          </>
        )}
      </>
    )
  }

export default App;
