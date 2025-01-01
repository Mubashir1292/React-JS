import React from "react";

const ProfileCards = (props) => {
  const { title, handle, image, description } = props;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "19px",
      }}
    >
      {title && handle && image && (
        <React.Fragment>
          <div>Title is {title}</div>
          <div>Handle is {handle}</div>
          <div>Description:{description}</div>
          <img src={image} alt="image to show" />
        </React.Fragment>
      )}
    </div>
  );
};
export default ProfileCards;
