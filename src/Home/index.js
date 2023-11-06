import React from "react";
import {Link} from "react-router-dom"; 
import DeckList from "../Deck/List";

function Home() {
  return (
    <div>
        <Link to="/decks/new" className="btn btn-secondary">
          <span className="oi oi-plus" /> Create Deck
        </Link>
        <DeckList />
    </div>
  );
}

export default Home;
