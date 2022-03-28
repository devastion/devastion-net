import { useState, useEffect } from "react";
import "./Projects.scss";
import folder from "../images/folder-v2.png";

function Projects() {
  const url = "https://api.github.com/users/devastion/repos";
  const [repos, setRepos] = useState([]);

  const reposFetch = async (link, setArray) => {
    const res = await fetch(link);
    const data = await res.json();
    setArray(data);
  };

  useEffect(async () => {
    reposFetch(url, setRepos);
  }, []);

  function addClass(lang) {
    if (lang === "JavaScript") {
      return "red";
    }

    if (lang === "PHP") {
      return "purple";
    }

    if (lang === "HTML") {
      return "green";
    }

    if (lang === "C++") {
      return "blue";
    }

    return "grey";
  }

  const listedRepos = repos.map((repo) => (
    <div
      className={`repo__card ${addClass(repo.language)}`}
      key={repo.fullName}
    >
      <div>
        <h1 key={repo.name}>
          <img src={folder} alt="folder" width="38px" height="36px" />
          {repo.name}
        </h1>
        <h2 key={repo.description}>{repo.description}</h2>

        <h3 key={repo.language}>{repo.language}</h3>
      </div>
      <div className="repo__card--buttons">
        {repo.homepage ? (
          <>
            <button type="button">
              <a
                href={repo.homepage}
                target="_blank"
                key={repo.homepage}
                rel="noreferrer"
              >
                Live Demo
              </a>
            </button>
            <button type="button">
              <a
                href={repo.html_url}
                target="_blank"
                key={repo.html_url}
                rel="noreferrer"
              >
                GitHub Repo
              </a>
            </button>
          </>
        ) : (
          <button type="button">
            <a
              href={repo.html_url}
              target="_blank"
              key={repo.html_url}
              rel="noreferrer"
            >
              GitHub Repo
            </a>
          </button>
        )}
      </div>
    </div>
  ));
  return (
    <>
      <h1 className="h-green">Repositories</h1>
      <div className="repo">{listedRepos}</div>
    </>
  );
}

export default Projects;
