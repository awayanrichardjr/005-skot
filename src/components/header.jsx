import "../style/header.css";
import bg from "../img/ciclomotor.png";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1 className="heading1">
          Super fast <br /> electric Moped
        </h1>
        <p>10k+ positive reviewers we received.</p>
      </div>
      <picture>
        <img src={bg} alt="img" />
      </picture>

      <div className="description">
        <h1 className="c45">C45</h1>
        <p className="typeee">Classic Model</p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, et?
        </p>
      </div>
    </header>
  );
}

export default Header;
