import SocialButton from "./SocialButton/SocialButton";
import linkedin from "../../images/linkedin.svg";
import github from "../../images/github.svg";
import contact from "../../images/mail.svg";
import cv from "../../images/cv.svg";

export default function Card() {
  return (
    <div className="profile__me--social-buttons">
      <SocialButton
        color="blue"
        icon={linkedin}
        name="LinkedIn"
        url="https://www.linkedin.com/in/banevdimitar/"
      />
      <SocialButton
        color="green"
        icon={github}
        name="GitHub"
        url="https://github.com/devastion/"
      />
      <SocialButton
        color="red"
        icon={contact}
        name="Contact"
        url="mailto:banev_dimitar@mail.com"
      />
      <SocialButton
        color="yellow"
        icon={cv}
        name="Resume"
        url="https://devastion.net/downloads/resume-en.pdf"
      />
    </div>
  );
}
