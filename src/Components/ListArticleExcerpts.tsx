import React from "react";
import { ExcerptType } from "../Types/Article";
import ArticleExcerpt from "./ArticleExcerpt";

interface Props {
  excerpts?: Array<ExcerptType>;
}

const ListArticleExcerpts: React.FC<Props> = ({ excerpts = [] }) => {
  return (
    <div>
      {excerpts.map((excerpt) => (
        <ArticleExcerpt
          key={excerpt.id}
          excerptId={excerpt.id}
          title={excerpt.title}
          author={excerpt.author}
          text={excerpt.excerpt}
        />
      ))}
    </div>
  );
};

export default ListArticleExcerpts;
