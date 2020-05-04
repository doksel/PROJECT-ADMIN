import React, { Fragment } from "react";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";

import { WrapBreadcrumb } from "./styles";

type CrumbType = {
  name: string;
  to: string;
};

type BreadcrumbType = {
  crumbs: Array<CrumbType>;
  history: any;
};

const Breadcrumb: React.FC<RouteComponentProps & BreadcrumbType> = ({
  crumbs,
  history
}) => (
  <WrapBreadcrumb>
    <Link to="/">
      <span>Main</span>
    </Link>

    {crumbs && crumbs[0] && <span>/</span>}

    {crumbs.map((crumb, index) => (
      <Fragment key={index}>
        {history.location.pathname === crumb.to ? (
          <span>{crumb.name}</span>
        ) : (
          <Link to="/">
            <span>{crumb.name}</span>
          </Link>
        )}

        {crumbs.length - 1 !== index && <span>/</span>}
      </Fragment>
    ))}
  </WrapBreadcrumb>
);

export default withRouter(Breadcrumb);
