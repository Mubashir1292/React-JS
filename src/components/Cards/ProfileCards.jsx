import React from "react";

const ProfileCards = (props) => {
  const { title, handle, image } = props;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
      }}
    >
      {title && handle && image && (
        <React.Fragment>
          <div>Title is {title}</div>
          <div>Handle is {handle}</div>
          <img src={image} alt="image to show" />
        </React.Fragment>
      )}
    </div>
  );
};
export default ProfileCards;
