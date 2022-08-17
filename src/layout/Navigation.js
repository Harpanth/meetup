import { Link } from "react-router-dom";
import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";

import classes from "./Navigation.module.css";
function Navigation() {
  const favContext = useContext(FavoritesContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}> React Meetups </div>
      <ul>
        <li>
          <Link to="/">All Meetups</Link>
        </li>
        <li>
          <Link to="/new"> New Meetup </Link>
        </li>
        <li>
          <Link to="/favorites">
            My Favorites{" "}
            <span className={classes.badge}>{favContext.totalFavorites} </span>
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Navigation;
