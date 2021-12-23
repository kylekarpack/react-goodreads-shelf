import React, { FunctionComponent } from "react";

const Loader: FunctionComponent = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <svg
        width={50}
        height={50}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <path d="M20 25h60v50H20z" fill="#fdfdfd" stroke="#85a2b6" />
        <path d="M50 25l9.421-3.43v56.86L50 75" fill="#fdfdfd" stroke="#85a2b6">
          <animate
            attributeName="d"
            calcMode="linear"
            values="M50 25L80 25L80 75L50 75;M50 25L50 20L50 80L50 75;M50 25L80 25L80 75L50 75;M50 25L80 25L80 75L50 75"
            keyTimes="0;0.5;0.501;1"
            dur={1.6}
            begin="0s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            calcMode="linear"
            values="1;1;0;0"
            keyTimes="0;0.5;0.5001;1"
            dur={1.6}
            begin="0s"
            repeatCount="indefinite"
          />
        </path>
        <path d="M50 25h30v50H50" fill="#fdfdfd" stroke="#85a2b6">
          <animate
            attributeName="d"
            calcMode="linear"
            values="M50 25L80 25L80 75L50 75;M50 25L50 20L50 80L50 75;M50 25L80 25L80 75L50 75;M50 25L80 25L80 75L50 75"
            keyTimes="0;0.5;0.501;1"
            dur={1.6}
            begin="-0.2656s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            calcMode="linear"
            values="1;1;0;0"
            keyTimes="0;0.5;0.5001;1"
            dur={1.6}
            begin="-0.2656s"
            repeatCount="indefinite"
          />
        </path>
        <path d="M50 25h30v50H50" fill="#fdfdfd" stroke="#85a2b6">
          <animate
            attributeName="d"
            calcMode="linear"
            values="M50 25L80 25L80 75L50 75;M50 25L50 20L50 80L50 75;M50 25L80 25L80 75L50 75;M50 25L80 25L80 75L50 75"
            keyTimes="0;0.5;0.501;1"
            dur={1.6}
            begin="-0.528s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            calcMode="linear"
            values="1;1;0;0"
            keyTimes="0;0.5;0.5001;1"
            dur={1.6}
            begin="-0.528s"
            repeatCount="indefinite"
          />
        </path>
        <path d="M50 25l-10.379-3.27v56.54L50 75" fill="#fdfdfd" stroke="#85a2b6">
          <animate
            attributeName="d"
            calcMode="linear"
            values="M50 25L20 25L20 75L50 75;M50 25L20 25L20 75L50 75;M50 25L50 20L50 80L50 75;M50 25L20 25L20 75L50 75"
            keyTimes="0;0.499;0.5;1"
            dur={1.6}
            begin="-0.528s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            calcMode="linear"
            values="0;0;1;1"
            keyTimes="0;0.4999;0.5;1"
            dur={1.6}
            begin="-0.528s"
            repeatCount="indefinite"
          />
        </path>
        <path d="M50 25l-.539-4.91v59.82L50 75" fill="#fdfdfd" stroke="#85a2b6">
          <animate
            attributeName="d"
            calcMode="linear"
            values="M50 25L20 25L20 75L50 75;M50 25L20 25L20 75L50 75;M50 25L50 20L50 80L50 75;M50 25L20 25L20 75L50 75"
            keyTimes="0;0.499;0.5;1"
            dur={1.6}
            begin="-0.2656s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            calcMode="linear"
            values="0;0;1;1"
            keyTimes="0;0.4999;0.5;1"
            dur={1.6}
            begin="-0.2656s"
            repeatCount="indefinite"
          />
        </path>
        <path d="M50 25H20v50h30" fill="#fdfdfd" stroke="#85a2b6">
          <animate
            attributeName="d"
            calcMode="linear"
            values="M50 25L20 25L20 75L50 75;M50 25L20 25L20 75L50 75;M50 25L50 20L50 80L50 75;M50 25L20 25L20 75L50 75"
            keyTimes="0;0.499;0.5;1"
            dur={1.6}
            begin="0s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            calcMode="linear"
            values="0;0;1;1"
            keyTimes="0;0.4999;0.5;1"
            dur={1.6}
            begin="0s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
  );
};

export default Loader;
