import React from "react";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "../Home";
import DeckCreate from "../Deck/Create";
import Study from "../Deck/Study";
import DeckView from "../Deck/View"; 

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Switch>
          <Route exact ={true} path="/">
            <Home />
          </Route>
          <Route path="/decks/new">
            <DeckCreate />
          </Route>
          <Route path="/decks/:deckId/study">
            <Study />
          </Route>
          <Route path="/decks/:deckId">
            <DeckView />
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
