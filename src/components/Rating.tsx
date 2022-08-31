import React from "react";
import { FunctionComponent } from "react";

const Rating: FunctionComponent<{ stars: number }> = ({ stars }) => {
  if (stars) {
    const arr = new Array(stars).fill("★");
    return (
      <>
        {arr.map((el) => (
          <>{el}</>
        ))}
      </>
    );
  }
  return null;
};

export default Rating;
