import "./Profile.scss";
import Card from "../components/Card/Card";
import me from "../images/me.png";
import Skills from "../components/Skills/Skills";
import Projects from "./Projects";

export default function Profile() {
  const languages = ["Javascript", "HTML & CSS", "PHP", "Java", "C++", "SQL"];
  const frameworks = [
    "ReactJS",
    "ExpressJS",
    "Laravel",
    "jQuery",
    "Bootstrap",
    "Bulma",
  ];
  const other = ["Git", "Linux", "Figma", "Bash", "Docker", "MongoDB & MySQL"];

  return (
    <div className="profile">
      <div className="profile__me">
        <div className="profile__me--img">
          <img src={me} alt="Dimitar Banev" />
        </div>
        <Card />
      </div>

      <div className="profile__skills">
        <div className="profile__skills--paragraph">
          <p>
            Twenty three years old computer science student. I love lifting
            weights, actually I'm a competitive powerlifter, but also I have had
            a strong passion for web technologies since I was a kid. On a first
            look two very different things, but in reality they are very
            similar. You can’t slack on, because technologies are moving at such
            a pace and I love it. I have a competitive and versatile
            personality. Consistency and dedication are the keys of success in
            my beliefs.
          </p>
        </div>
        <div className="profile__skills--langs">
          <Skills arrayObject={languages} title="Languages" />
          <Skills arrayObject={frameworks} title="Frameworks" />
          <Skills arrayObject={other} title="Other" />
        </div>
      </div>
      <div className="profile__projects">
        <Projects />
      </div>
    </div>
  );
}
