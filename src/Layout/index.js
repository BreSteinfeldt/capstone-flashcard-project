import React from "react";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "../Home";
import DeckCreate from "../Deck/Create";
import Study from "../Deck/Study";
import DeckView from "../Deck/View";
import DeckEdit from "../Deck/Edit";
import CardCreate from "../Card/Create";
import CardEdit from "../Card/Edit";

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Switch>
          <Route path="/decks/new">
            <DeckCreate />
          </Route>
          <Route path="/decks/:deckId/study">
            <Study />
          </Route>
          <Route path="/decks/:deckId/edit">
            <DeckEdit />
          </Route>
          <Route path="/decks/:deckId/cards/new">
            <CardCreate />
          </Route>
          <Route path="/decks/:deckId/cards/:cardId/edit">
            <CardEdit />
          </Route>
          <Route path="/decks/:deckId">
            <DeckView />
          </Route>
          <Route path="/decks" exact={true}>
            <Home />
          </Route>
          <Route path="/" exact={true}>
            <Home />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
