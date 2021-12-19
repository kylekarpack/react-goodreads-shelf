import React, { FunctionComponent } from "react";
import LoaderSvg from "../assets/loader.svg";

const Loader: FunctionComponent = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <LoaderSvg />
    </div>
  );
};

export default Loader;
