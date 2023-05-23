import React, { FunctionComponent } from "react";

const Rating: FunctionComponent<{ stars?: number }> = ({ stars }) => {
  if (stars) {
    const arr = new Array(stars).fill("★");
    return (
      <div role="presentation">
        {arr.map((el, i) => (
          <span key={i}>{el}</span>
        ))}
      </div>
    );
  }
  return null;
};

export default Rating;
