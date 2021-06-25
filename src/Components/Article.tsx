import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ExcerptType } from "../Types/Article";
import NotFound from "./404";

import data from "../data.json";

const Article: React.FC = () => {

  type ArticleParams = {
    articleId: string;
  }
  let { articleId } = useParams<ArticleParams>();

  const [article, setArticle] = useState<ExcerptType>();
  useEffect(() => {
    const excerpt: (ExcerptType | undefined) = data.articles.find(art => art.id === articleId);
    setArticle(excerpt);
  }, [articleId]);

  return (
    article ? (
      <article>
        <h2>{article.title}</h2>
        <h3>{article.author}</h3>
        <p>{article.excerpt}</p>
      </article>
    ) : <NotFound />
  );
}

export default Article;