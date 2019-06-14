import React from "react";

class Loader extends React.Component {

	render() {
		return (
			<svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
				<path d="M20 25L80 25L80 75L20 75Z"
					fill="#fdfdfd" stroke="#85a2b6" strokeWidth="4"></path>
				<path d="M 50 25 L 59.4214 21.5702 L 59.4214 78.4298 L 50 75"
					strokeLinejoin="round"
					strokeLinecap="round" fill="#fdfdfd" stroke="#85a2b6" strokeWidth="4">
					<animate attributeName="d" calcMode="linear"
						values="M50 25L80 25L80 75L50 75;M50 25L50 20L50 80L50 75;M50 25L80 25L80 75L50 75;M50 25L80 25L80 75L50 75"
						keyTimes="0;0.5;0.501;1" dur="1.6" begin="0s" repeatCount="indefinite"></animate>
					<animate attributeName="opacity" calcMode="linear" values="1;1;0;0" keyTimes="0;0.5;0.5001;1" dur="1.6"
						begin="0s" repeatCount="indefinite"></animate>
				</path>
				<path d="M 50 25 L 80 25 L 80 75 L 50 75"
					strokeLinejoin="round" strokeLinecap="round" fill="#fdfdfd"
					stroke="#85a2b6" strokeWidth="4">
					<animate attributeName="d" calcMode="linear"
						values="M50 25L80 25L80 75L50 75;M50 25L50 20L50 80L50 75;M50 25L80 25L80 75L50 75;M50 25L80 25L80 75L50 75"
						keyTimes="0;0.5;0.501;1" dur="1.6" begin="-0.2656s" repeatCount="indefinite"></animate>
					<animate attributeName="opacity" calcMode="linear" values="1;1;0;0" keyTimes="0;0.5;0.5001;1" dur="1.6"
						begin="-0.2656s" repeatCount="indefinite"></animate>
				</path>
				<path d="M 50 25 L 80 25 L 80 75 L 50 75"
					strokeLinejoin="round" strokeLinecap="round" fill="#fdfdfd"
					stroke="#85a2b6" strokeWidth="4">
					<animate attributeName="d" calcMode="linear"
						values="M50 25L80 25L80 75L50 75;M50 25L50 20L50 80L50 75;M50 25L80 25L80 75L50 75;M50 25L80 25L80 75L50 75"
						keyTimes="0;0.5;0.501;1" dur="1.6" begin="-0.528s" repeatCount="indefinite"></animate>
					<animate attributeName="opacity" calcMode="linear" values="1;1;0;0" keyTimes="0;0.5;0.5001;1" dur="1.6"
						begin="-0.528s" repeatCount="indefinite"></animate>
				</path>
				<path d="M 50 25 L 39.6214 21.7298 L 39.6214 78.2702 L 50 75"
					strokeLinejoin="round"
					strokeLinecap="round" fill="#fdfdfd" stroke="#85a2b6" strokeWidth="4">
					<animate attributeName="d" calcMode="linear"
						values="M50 25L20 25L20 75L50 75;M50 25L20 25L20 75L50 75;M50 25L50 20L50 80L50 75;M50 25L20 25L20 75L50 75"
						keyTimes="0;0.499;0.5;1" dur="1.6" begin="-0.528s" repeatCount="indefinite"></animate>
					<animate attributeName="opacity" calcMode="linear" values="0;0;1;1" keyTimes="0;0.4999;0.5;1" dur="1.6"
						begin="-0.528s" repeatCount="indefinite"></animate>
				</path>
				<path d="M 50 25 L 49.4614 20.0898 L 49.4614 79.9102 L 50 75"
					strokeLinejoin="round"
					strokeLinecap="round" fill="#fdfdfd" stroke="#85a2b6" strokeWidth="4">
					<animate attributeName="d" calcMode="linear"
						values="M50 25L20 25L20 75L50 75;M50 25L20 25L20 75L50 75;M50 25L50 20L50 80L50 75;M50 25L20 25L20 75L50 75"
						keyTimes="0;0.499;0.5;1" dur="1.6" begin="-0.2656s" repeatCount="indefinite"></animate>
					<animate attributeName="opacity" calcMode="linear" values="0;0;1;1" keyTimes="0;0.4999;0.5;1" dur="1.6"
						begin="-0.2656s" repeatCount="indefinite"></animate>
				</path>
				<path d="M 50 25 L 20 25 L 20 75 L 50 75"
					strokeLinejoin="round" strokeLinecap="round" fill="#fdfdfd"
					stroke="#85a2b6" strokeWidth="4">
					<animate attributeName="d" calcMode="linear"
						values="M50 25L20 25L20 75L50 75;M50 25L20 25L20 75L50 75;M50 25L50 20L50 80L50 75;M50 25L20 25L20 75L50 75"
						keyTimes="0;0.499;0.5;1" dur="1.6" begin="0s" repeatCount="indefinite"></animate>
					<animate attributeName="opacity" calcMode="linear" values="0;0;1;1" keyTimes="0;0.4999;0.5;1" dur="1.6"
						begin="0s" repeatCount="indefinite"></animate>
				</path>
			</svg>
		)
	}
}

export default Loader;