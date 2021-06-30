import axios from "axios";
import React, { useState, useEffect } from "react";
import { ExcerptType } from "../Types/Story";
import StoryExcerpt from "./StoryExcerpt";

interface ServerData {
  stories: ExcerptType[];
}

interface IState {
  excerpts: ExcerptType[];
}

const ListStoriesExcerpts: React.FC = () => {
  const [listStories, setListStories] = useState<IState["excerpts"]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get<ServerData>(
        "http://localhost:8000/api/v1/stories"
      );
      setListStories(response.data.stories);
    };
    fetchData();
  }, []);
  const renderList = (): JSX.Element[] => {
    return listStories.map((story) => (
      <StoryExcerpt
        key={story._id}
        _id={story._id}
        title={story.title}
        author={story.author}
        excerpt={story.excerpt}
      />
    ));
  };

  return <div>{renderList()}</div>;
};

export default ListStoriesExcerpts;
