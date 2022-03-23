import { useState, useEffect } from "react";
import "./Projects.scss";
import folder from "../images/folder-v2.png";

function Projects() {
  const url = "https://api.github.com/users/devastion/repos";
  const [repos, setRepos] = useState([]);
  const reposFetch = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setRepos(data);
  };

  useEffect(async () => {
    reposFetch();
  }, []);

  const listedRepos = repos.map((repo) => (
    <div className="repo__card" key={repo.fullName}>
      <h1 key={repo.name}>
        <img src={folder} alt="folder" width="38px" height="36px" />
        {repo.name}
      </h1>
      <h2 key={repo.description}>{repo.description}</h2>
      <button type="button">
        <a href={repo.html_url} target="_blank" key={repo.html_url}>
          GitHub Repo
        </a>
      </button>
    </div>
  ));
  return <div className="repo">{listedRepos}</div>;
}

export default Projects;
