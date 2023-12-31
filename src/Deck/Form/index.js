import React, { useState } from "react";

function DeckForm({ onSubmit, onCancel, initialState = {name:"", description:""} }) {

  const [deck, setDeck] = useState(initialState);

  //handles form changes 
  function changeHandler({ target: { name, value } }) {
    setDeck((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  //handles submission 
  function submitHandler(event) {
    event.preventDefault();
    onSubmit(deck);
  }
  
  return (
    <div>
      <form onSubmit={submitHandler} className="deck-edit">
        <fieldset>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              value={deck.name}
              required={true}
              placeholder="Deck Name"
              onChange={changeHandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              className="form-control"
              rows="4"
              required={true}
              placeholder="Brief description of the deck"
              value={deck.description}
              onChange={changeHandler}
            />
          </div>
          <button
            type="button"
            className="btn btn-secondary mr-2"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default DeckForm;
