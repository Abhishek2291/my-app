import React from "react";

const SocialLinks = (props) => {
  return (
    <div>
      {props.sociallink.map((i) => {
        return <span>{i}</span>
      })}
    </div>
  );
};

export default SocialLinks;
