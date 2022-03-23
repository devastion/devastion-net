/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import "./Skills.scss";

export default function Skills(props) {
  return (
    <div className="skills">
      <h1>{props.title}</h1>
      <ul>
        {props.arrayObject.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
