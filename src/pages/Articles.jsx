import { useState, useEffect } from "react";
import heart from "../images/heart.png";
import "./Articles.scss";

export default function Articles() {
  const url = "https://dev.to/api/articles?username=devastion";
  const [articles, setArticles] = useState([]);

  const reposFetch = async (link, setArray) => {
    const res = await fetch(link);
    const data = await res.json();
    setArray(data);
  };

  useEffect(async () => {
    reposFetch(url, setArticles);
  }, []);

  const listedArticles = articles.map((article) => (
    <div className="articles__article">
      <h2>{article.title}</h2>
      <h3>{article.description}</h3>
      <div className="articles__article--footer">
        <h4>
          <img src={heart} alt="heart" />
          {article.positive_reactions_count}
        </h4>
        <a href={article.url}>Read Full Article</a>
      </div>
    </div>
  ));
  return (
    <div className="articles">
      <h1>Articles</h1>
      {listedArticles}
    </div>
  );
}
