import React, { useEffect, useState } from "react";
//sets values for view 
const nextView = {
  front: "back",
  back: "front",
};

function StudyCard({ card = {}, title, nextHandler }) {
  const [view, setView] = useState("front");
  const [flipped, setFlipped] = useState("false");

  //handles flip logic 
  function flipHandler() {
    setView((prevState) => nextView[prevState]);
    setFlipped(true);
  }

  //uesEffect sets the view and flipped state
  useEffect(() => {
    setView("front");
    setFlipped(false);
  }, [card]);

  return (
    <div className={`card ${view} study-card`}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{card[view]}</p>
        <button
          type="button"
          className="btn btn-secondary mr-2"
          onClick={flipHandler}
        >
          Flip
        </button>
        {flipped && (
          <button
            type="button"
            className="btn btn-primary"
            onClick={nextHandler}>
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default StudyCard;
