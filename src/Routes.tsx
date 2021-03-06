/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import * as React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./views/Home/Home";
import NotFound from "./views/NotFound/NotFound";
import Maintenance from "./views/Maintenance/Maintenance";

export default function Routes() {
  return (
    <>
      <Switch>
        <Route path={"/"} exact component={Maintenance} />
        <Route path="*" component={NotFound} />
      </Switch>
    </>
  );
}
