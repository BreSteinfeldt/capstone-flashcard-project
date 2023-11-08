import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { readDeck, updateDeck } from "../../utils/api";
import DeckForm from "../Form";

function DeckEdit() {
  const history = useHistory();
  const { deckId } = useParams();

  const [deck, setDeck] = useState({ name: "", description: "" });

  //useEffect uses readDeck util and sets setDeck 
  useEffect(() => {
    readDeck(deckId).then(setDeck);
  }, [deckId]);

  //handles submit for updated deck 
  function submitHandler(updatedDeck) {
    updateDeck(updatedDeck).then((savedDeck) =>
      history.push(`/decks/${savedDeck.id}`)
    );
  }

  //handles cancel option 
  function cancel() {
    history.goBack();
  }

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">
              <span className="oi oi-home" /> Home
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link to={`/decks/${deckId}`}>{deck.name}</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Edit Deck
          </li>
        </ol>
      </nav>
      <h1>Edit Deck</h1>
      {deck.id && <DeckForm
        onCancel={cancel}
        onSubmit={submitHandler}
        initialState={deck}
      />}
    </div>
  );
}

export default DeckEdit;
