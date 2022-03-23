/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import "./SocialButton.scss";

export default function SocialButton(props) {
  return (
    <button className={`${props.color} social-btn`} type="button">
      <img src={props.icon} alt="Icon of button" />
      <a href={props.url} target="_blank">
        {props.name}
      </a>
    </button>
  );
}
