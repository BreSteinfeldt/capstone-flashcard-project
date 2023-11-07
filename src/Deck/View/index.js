import React, { useState, useEffect } from "react";
import { deleteCard, deleteDeck, readDeck } from "../../utils/api";
import {
  Link,
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import CardList from "../../Card/List";

function DeckView() {
  const { deckId, cardId } = useParams();
  const [deck, setDeck] = useState({ cards: [] });
  const history = useHistory();
  
  //helper function 
  function loadDeck() {
    readDeck(deckId).then(setDeck);
  }

  useEffect(() => {
    loadDeck();
  }, [deckId]);

  function deleteHandler() {
    const confimred = window.confirm(
      "Delete this deck? You will not be able to recover it."
    );
    if (confimred) {
      deleteDeck(deck.id).then(() => history.push("/decks"));
    }
  }

  function deleteCardHandler() {
    const confirmed = window.confirm(
      "Delete this card? You will not be able to recover it."
    );
    if (confirmed) {
      deleteCard(cardId).then(loadDeck);
    }
  }

  return (
    <main className="container deck-view">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">
              <span className="oi oi-home" /> Home
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {deck.name}
          </li>
        </ol>
      </nav>
      <div className="media mb-2">
        <div className="media-body">
          <h5 className="mt-0">{deck.name}</h5>
          {deck.description}
        </div>
      </div>
      <Link
        to={`/decks/${deck.id}/edit`}
        className="btn btn-secondary mr-2"
        title="edit deck"
      >
        <span className="oi oi-pencil" /> Edit
      </Link>
      <Link
        to={`/decks/${deck.id}/study`}
        className="btn btn-primary mr-2"
        title="Study deck"
      >
        <span className="oi oi-book" /> Study
      </Link>
      <Link
        to={`/decks/${deck.id}/new`}
        className="btn btn-primary"
        title="Add Card"
      >
        <span className="oi oi-plus" /> Add Cards
      </Link>
      <button className="btn btn-danger float-right" title="Delete deck">
        <span className="oi oi-trash" onClick={deleteHandler} />
      </button>
      <CardList deck={deck} onCardDelete={deleteCardHandler} />
    </main>
  );
}

export default DeckView;
