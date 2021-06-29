import React, { useState, useEffect } from "react";
import { ExcerptType } from "../Types/Article";
import ArticleExcerpt from "./ArticleExcerpt";

import data from "../data.json";

interface IState {
  excerpts: ExcerptType[];
}

const ListArticleExcerpts: React.FC = () => {
  const [listArticles, setListArticles] = useState<IState["excerpts"]>([]);
  useEffect(() => {
    setListArticles(data.articles);
  }, []);
  const renderList = (): JSX.Element[] => {
    return listArticles.map((article) => (
      <ArticleExcerpt
        key={article._id}
        _id={article._id}
        title={article.title}
        author={article.author}
        excerpt={article.excerpt}
      />
    ));
  };

  return <div>{renderList()}</div>;
};

export default ListArticleExcerpts;
