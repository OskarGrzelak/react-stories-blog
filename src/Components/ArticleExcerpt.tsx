import React from "react";
import { Link } from "react-router-dom";
import { ExcerptType as IProps } from "../Types/Article";
import "./Article.css";

const ArticleExcerpt: React.FC<IProps> = ({ _id, title, excerpt, author }) => {
  return (
    <article className="excerpt">
      <div className="excerpt-header">
        <h2>
          <Link to={`/stories/${_id}`}>{title}</Link>
        </h2>
        <h3>{author}</h3>
      </div>
      <p>{excerpt}</p>
      <Link to={`/stories/${_id}`}>Czytaj dalej</Link>
    </article>
  );
};

export default ArticleExcerpt;
