import React from "react";
import { Link } from "react-router-dom";

interface Props {
  excerptId: string;
  title: string;
  text: string;
  author: string;
}

const ArticleExcerpt: React.FC<Props> = ({ excerptId, title, text, author }) => {
  return (
    <article>
      <h2><Link to={`/stories/${excerptId}`}>{title}</Link></h2>
      <h3>{author}</h3>
      <p>{text}</p>
    </article>
  );
};

export default ArticleExcerpt;
