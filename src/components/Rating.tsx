import React from "react";
import { FunctionComponent } from "react";

const Rating: FunctionComponent<{ stars?: number }> = ({ stars }) => {
  if (stars) {
    const arr = new Array(stars).fill("★");
    return (
      <div>
        {arr.map((el, i) => (
          <span key={i}>{el}</span>
        ))}
      </div>
    );
  }
  return null;
};

export default Rating;
