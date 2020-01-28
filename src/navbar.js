import React from "react";
import "./navbar.css";

function navbar(props) {
  return (
    <ul className="list">
      {props.x.map(el => (
        <li className="dropdown">
          {el.title}

          {!el.drop ? null : (
            <ul className="dropdown-list">
              {el.drop.map(el => (
                <li>{el}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}

export default navbar;
