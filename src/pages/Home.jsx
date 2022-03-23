import "./Home.scss";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <h1>
        Hi, my name is <span>Dimitar</span>
      </h1>
      <h2 className="typed-out">I am entry level fullstack developer</h2>
      <button type="button" className="button">
        <Link path="profile" to="/profile">
          Check out my <span>profile</span>!
        </Link>
      </button>
    </div>
  );
}
