import { Route, Router, Switch } from "react-router-dom";
import Navbar from "components/Navbar";
import history from 'history';
import Home from "pages/Home";
import MovieCatalog from "pages/Private/MovieCatalog";
import MovieDetails from "pages/Private/MovieDetails";

const Routes = () => {
  return (
    <Router history={history}>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/movies">
          <MovieCatalog />
        </Route>
        <Route path="/movie/:movieId">
          <MovieDetails />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
