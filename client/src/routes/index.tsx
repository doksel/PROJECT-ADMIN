import React, { useEffect, useState } from "react";
import { useDispatch, connect } from "react-redux";
import { Route, Switch } from "react-router-dom";

import DefaultRoute from "./default";
import GuestRoute from "./hoc/GuestRoute";
import PrivateRoute from "./hoc/PrivateRoute";
import MainLoader from "../views/components/MainLoader";

import Auth from "../views/pages/Auth";
import Admin from "../views/pages/Admin";
import { me } from "../store/authStore/actions";

import { UserType } from "../store/authStore/reducer";
import { AppDispatchType } from "../store/store";
import { ActionType } from "../store/saga";

type PropsType = {
  me: ActionType;
  user?: UserType;
  userId: string;
  isLoading: boolean;
};

const App: React.FC<PropsType> = ({ me, user, userId, isLoading }) => {
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(me());
    }
  }, []);

  useEffect(() => {
    if (token && !user && userId) {
      dispatch(me());
    }
    user && setLoading(false);
  }, [token, user, userId, dispatch]);

  return (
    <>
      <MainLoader loading={isLoading} />

      <div className="main token">
        <Switch>
          <Route path="/" exact component={DefaultRoute} />

          {token ? (
            <>
              <MainLoader loading={loading} />

              {!loading && (
                <>
                  <GuestRoute path="/auth/:type" exact component={Auth} />
                  <PrivateRoute
                    path="/admin/:category?/:action?/:id?"
                    exact
                    component={Admin}
                  />
                </>
              )}
            </>
          ) : (
            <>
              <GuestRoute path="/auth/:type" exact component={Auth} />
              <PrivateRoute
                path="/admin/:category?/:action?/:id?"
                exact
                component={Admin}
              />
            </>
          )}
        </Switch>
      </div>
    </>
  );
};

const mapStateToProps: AppDispatchType = ({ authStore }) => ({ ...authStore });
const mapDispatchToProps = { me };

export default connect(mapStateToProps, mapDispatchToProps)(App);
