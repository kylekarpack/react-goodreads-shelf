import React from "react";

const bookStyle = {
	textAlign: "left"
}

const imageStyle = {
	width: "100%"
};

const authorStyle = {
	fontSize: "0.8rem",
	opacity: .5,
	display: "block",
	padding: "0.5rem 0"
};

const titleStyle = {
	fontSize: "1.2rem",
	borderBottom: "1px solid #eee",
	display: "block",
	whiteSpace: "nowrap",
	textOverflow: "ellipsis",
	overflow: "hidden",
	paddingBottom: "0.5rem",
	marginBottom: "1rem"
}

class Book extends React.Component {
	
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div style={bookStyle}>
				<img style={imageStyle} src={this.props.book.image_url} />
				<small style={authorStyle}>{this.props.book.authors.author.name}</small>
				<span style={titleStyle}>{this.props.book.title}</span>
				<p>{this.props.book.description.toString()}</p>
			</div>
		)
	}

}

export default Book;