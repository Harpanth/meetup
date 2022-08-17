import { Route, Switch } from "react-router-dom";
import NewMeetupPage from "./pages/NewMeetup";
import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import Navigation from "./layout/Navigation";
import Layout from "./layout/Layout";

function App() {
  return (
    <div>
      <Navigation />
      <Layout>
        <Switch>
          <Route path="/new">
            <NewMeetupPage />
          </Route>
          <Route path="/favorites">
            <FavoritesPage />
          </Route>
          <Route path="/" exact>
            <AllMeetupsPage />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
