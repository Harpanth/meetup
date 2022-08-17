import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

function FavoritesPage() {
  const favContext = useContext(FavoritesContext);

  let content;
  if (favContext.totalFavorites === 0) {
    content = <p>You got no Favorites.Start adding some.</p>;
  } else {
    content = <MeetupList meetups={favContext.favorites} />;
  }

  return (
    <div>
      <h1> My Favorites </h1>
      {content}
    </div>
  );
}
export default FavoritesPage;
