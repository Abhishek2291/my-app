import React from "react";

const Header = (props) => {
  return (
    <div className="header">
      <nav>
        <div>{props.name}</div>
        <ul>
          {
            props.data.map((i) => {
              return <li>{i}</li>
            })
          }
        </ul>
      </nav>
    </div>
  );
};

export default Header;
