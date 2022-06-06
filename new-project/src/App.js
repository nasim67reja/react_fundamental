import { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Header from "./components/Header";
import AllFood from "./pages/allFood";
import FavouriteFood from "./pages/FavouriteFoods";
import DetailsFood from "./pages/DetailsFood";
import NotFound from "./pages/NotFund";
function App() {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/all-food" />
        </Route>
        <Route path="/all-food" exact>
          <AllFood />
        </Route>
        <Route path="/favourite-food" exact>
          <FavouriteFood />
        </Route>
        <Route path="/all-food/:foodId" exact>
          <DetailsFood />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
