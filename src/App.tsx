import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import Layout from "./Components/Layout";
import ListArticleExcerpts from "./Components/ListArticleExcerpts";
import Article from "./Components/Article";
import NotFound from "./Components/404";
import { ExcerptType } from "./Types/Article";
import "./App.css";

import data from "./data.json";

const App: React.FC = () => {
  const excerpts: Array<ExcerptType> = data.articles;

  const { isLoading, isAuthenticated, user } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <div className="App">
        <Layout>
          <Switch>
            <Route exact path="/stories/:articleId">
              <Article />
            </Route>
            <Route exact path="/">
              {isAuthenticated && (
                <div>{user ? user.name : ""} Udało się zalogować</div>
              )}
              <ListArticleExcerpts excerpts={excerpts} />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Layout>
      </div>
    </Router>
  );
};

export default App;
