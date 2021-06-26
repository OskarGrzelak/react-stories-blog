import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import Navbar from "./Components/Navbar";
import ListArticleExcerpts from "./Components/ListArticleExcerpts";
import Article from "./Components/Article";
import NotFound from "./Components/404";
import { ExcerptType } from "./Types/Article";
import "./App.css";

import data from "./data.json";

function App() {
  const excerpts: Array<ExcerptType> = data.articles;

  const { isLoading, isAuthenticated, user } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/stories/:articleId">
            <Navbar />
            <Article />
          </Route>
          <Route exact path="/">
            <Navbar />
            {isAuthenticated && <div>{user ? user.name : ''} Udało się zalogować</div>}
            <ListArticleExcerpts excerpts={excerpts} />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
