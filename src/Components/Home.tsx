import React, { Fragment } from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";
import ListStoriesExcerpts from "./ListStoriesExcerpts";

const Home: React.FC = () => {
  return (
    <Fragment>
      <Navbar />
      <ListStoriesExcerpts />
      <Footer />
    </Fragment>
  )
}

export default Home;