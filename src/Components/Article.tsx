import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ArticleType } from "../Types/Article";
import NotFound from "./404";

import data from "../data.json";

const Article: React.FC = () => {
  type ArticleParams = {
    articleId: string;
  };
  let { articleId } = useParams<ArticleParams>();

  const [article, setArticle] = useState<ArticleType>();
  useEffect(() => {
    const article = data.articles.find((art) => art._id === articleId);
    setArticle(article);
  }, [articleId]);

  const renderArticleBody = (article: ArticleType): JSX.Element => {
    return (
      <div>
        {article.text.split("\n\n").map((paragraph) => {
          return <p>{paragraph}</p>;
        })}
      </div>
    );
  };

  const renderArticle = (): JSX.Element => {
    return article ? (
      <article className="article">
        <div className="article-header">
          <h2>{article.title}</h2>
          <h3>{article.author}</h3>
        </div>
        {renderArticleBody(article)}
      </article>
    ) : (
      <NotFound />
    );
  };

  return renderArticle();
};

export default Article;
