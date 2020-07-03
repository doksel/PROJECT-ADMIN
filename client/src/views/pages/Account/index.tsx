// import React from "react";
// import { Route } from "react-router-dom";

// import Profile from "./Profile";
// import Form from "./Form";

// const Account: React.FC = () => (
//   <>
//     <Route path="/admin/account/profile" exact render={() => <Profile />} />
//     <Route path="/admin/account/form" exact render={() => <Form />} />
//   </>
// );

// export default Account;

import { loadable } from "../../../services/loadable";

export default {
  create: loadable(() => import("./Form")),
  review: loadable(() => import("./Profile"), { review: true }),
  edit: loadable(() => import("./Form"), { edit: true }),
  name: "account",
};
