import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { listDecks, deleteDeck } from "../../utils/api";

function DeckList() {
  const [decks, setDecks] = useState([]);
  const history = useHistory();

  //helper function
  function loadDecks() {
    listDecks().then(setDecks);
  }

  //useEffect loads decks 
  useEffect(() => {
    loadDecks();
  }, []);

  //handles delete window.confirm & deletion 
  function deleteHandler(deckId) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this Deck?"
    );
    confirmed && deleteDeck(deckId).then(loadDecks()).then(history.push("/"));
  }

  return (
    <ul className="list-group">
      {decks.map((deck) => {
        return (
          <li className="list-group-item" key={deck.id}>
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{deck.name}</h5>
              <small>{deck.cards.length} cards</small>
            </div>
            <p className="mb-1">{deck.description}</p>
            <Link to={`/decks/${deck.id}`} className="btn btn-secondary">
              <span className="oi oi-eye" /> View
            </Link>
            <Link to={`/decks/${deck.id}/study`} className="btn btn-secondary">
              <span className="oi oi-book" /> Study
            </Link>
            <button
              className="btn btn-danger"
              onClick={() => deleteHandler(deck.id)}
            >
              <span className="oi oi-trash"></span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default DeckList;
