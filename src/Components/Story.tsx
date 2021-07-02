import axios from "axios";
import React from "react";
import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { StoryType } from "../Types/Story";
import ScrollHandler from "./ScrollHandler";
import Overlay from "./Overlay";
import Navbar from "./Navbar";
import Footer from "./Footer";
import StoryOptions from "./StoryOptions";
import NotFound from "./404";

interface ServerData {
  story: StoryType;
}

const Story: React.FC = () => {
  type StoryParams = {
    storyId: string;
  };
  let { storyId } = useParams<StoryParams>();

  const [story, setStory] = useState<StoryType>();
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get<ServerData>(
        `http://localhost:8000/api/v1/stories/${storyId}`
      );
      setStory(response.data.story);
    };
    fetchData();
  }, [storyId]);

  const renderStoryBody = (story: StoryType): JSX.Element => {
    return (
      <div>
        {story.text.split("\\n\\n").map((paragraph, index) => {
          return <p key={index}>{paragraph}</p>;
        })}
      </div>
    );
  };

  const renderStory = (): JSX.Element => {
    return story ? (
      <article className="article">
        <div className="article-header">
          <h2>{story.title}</h2>
          <h3>{story.author}</h3>
        </div>
        {renderStoryBody(story)}
      </article>
    ) : (
      <NotFound />
    );
  };

  return (
    <ScrollHandler render={scrollingUp => (
      <Fragment>
        <Overlay scrollingUp={scrollingUp} position="top">
          <Navbar />
        </Overlay>
        {renderStory()}
        <Overlay scrollingUp={scrollingUp} position="bottom">
          <StoryOptions />
        </Overlay>
        <Footer />
      </Fragment>
    )}>
    </ScrollHandler>
  );
};

export default Story;
