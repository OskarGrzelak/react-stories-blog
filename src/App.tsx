import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import Layout from "./Components/Layout";
import Home from "./Components/Home";
import Story from "./Components/Story";
import NotFound from "./Components/404";
import "./App.css";


const App: React.FC = () => {

  const { isLoading, isAuthenticated, user } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <div className="App">
        <Layout>
          <Switch>
            <Route exact path="/stories/:storyId">
              <Story />
            </Route>
            <Route exact path="/">
              {isAuthenticated && (
                <div>{user ? user.name : ""} Udało się zalogować</div>
              )}
              <Home />
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
