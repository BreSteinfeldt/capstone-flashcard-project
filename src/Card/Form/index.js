import React, { useState } from "react";

function CardForm({ onSubmit, onDone, deckName, initialState}) {

  const [card, setCard] = useState(initialState);

  //handles form change for card 
  function changeHandler({ target: { name, value } }) {
    setCard((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  //handles submit for updated card 
  function submitHandler(event) {
    event.preventDefault();
    onSubmit({ ...card });
    setCard({ front: "", back: "" });
  }

  return (
    <div>
      <form onSubmit={submitHandler} className="card-form">
        <fieldset>
          <legend>{deckName}: Add Card</legend>
          <div className="form-group">
            <label htmlFor="front">Front</label>
            <textarea
              id="front"
              name="front"
              tabIndex="1"
              className="form-control"
              required={true}
              placeholder="Front side of card"
              value={card.front}
              onChange={changeHandler}
            />
            <div className="form-group">
              <label htmlFor="back">Back</label>
              <textarea
                id="back"
                name="back"
                tabIndex="2"
                className="form-control"
                required={true}
                placeholder="Back side of card"
                value={card.back}
                onChange={changeHandler}
              />
            </div>
            <button
              className="btn btn-secondary mr-2"
              onClick={onDone}
              tabIndex="4"
            >
              Done
            </button>
            <button type="submit" className="btn btn-primary" tabIndex="3">
              Save
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default CardForm;
