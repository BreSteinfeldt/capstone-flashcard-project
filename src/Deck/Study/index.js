import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { readDeck } from "../../utils/api";
import StudyNotEnough from "./StudyNotEnough";
import StudyCard from "./StudyCard";

function Study(){
    const {deckId} = useParams(); 
    const [deck, setDeck] = useState({name:"", cards:[]}); 
    const [cardNumber, setCardNumber] = useState(1); 
    const history = useHistory(); 

    //useEffect hook to read and set deck 
    useEffect(()=> {
        readDeck(deckId).then(setDeck); 
    }, [deckId]); 

    //tracker variables for card
    const cardCount = deck.cards.length; 
    const cardTitle = `Card ${cardNumber} of ${cardCount}`; 
    const card = deck.cards[cardNumber - 1]; 


// handles next logic 
  function nextHandler() {
    if(cardNumber === cardCount) {
        const returnHome = window.confirm(
            "Reset cards? Click 'cancel' to return to the home page."
        ); 
        return returnHome ? setCardNumber(1) : history.push("/"); 
    }
    setCardNumber((prevState) => Math.min(cardCount, prevState + 1)); 
  }; 

  return cardCount <= 2 ? (
    <main className="container study-page">
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
                    Study
                </li>
            </ol>
        </nav>
        <h1>Study: {deck.name}</h1>
        <StudyNotEnough deckId={deckId} cardCount={cardCount} />
    </main>
  ) : (
    <main className="container study-page">
        <nav aria-label="breadcrumb">
            <ol className="breadCrumb">
                <li className="breadcrumb-item">
                    <Link to="/">
                        <span className="oi oi-home" /> Home
                    </Link>
                </li>
                <li className="breadcrumb-item">
                    <Link to={`/decks/${deckId}`}>{deck.name}</Link>             
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                    Study
                </li>
            </ol>
        </nav>
        <h1>Study: {deck.name}</h1>
        <StudyCard card={card} title={cardTitle} nextHandler={nextHandler} />
    </main>
  ); 
    
}

export default Study; 