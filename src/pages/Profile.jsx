import "./Profile.scss";
import Card from "../components/Card/Card";
import me from "../images/me.png";
import Skills from "../components/Skills/Skills";
import Projects from "./Projects";
import Articles from "./Articles";

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
          <h1 className="h-red">Profile</h1>
          <p>
            Hi, my name is Dimitar and I am an entry level full stack developer.
            I have a strong passion for web technologies and motivation to keep
            improving myself. Living by the philosophy of
            <span> life-long learning</span>, the fast pace of technologies is
            what drives my passion. The creativity, logic and never running out
            of new things to discover keeps me excited every day. I am currently
            a student at
            <span> New Bulgarian University</span>. For the past couple years
            I’ve built a lot of different applications using C++, Java, Python &
            PHP, but my current passion is <span> MERN stack</span>. I’ve been
            through a lot of different build infrastructures such as gulp,
            webpack and currently using Parcel. My knowledge of JavaScript, HTML
            and CSS is pretty solid and my experience is in building fully
            responsive or adaptive pixel perfect web designs and APIs using
            Express & MongoDB.
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

      {/* <div className="profile__articles">
        <Articles />
      </div> */}
    </div>
  );
}
