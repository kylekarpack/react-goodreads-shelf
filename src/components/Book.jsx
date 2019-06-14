import React from "react";

const bookStyle = {
	textAlign: "left"
}

const imageStyle = {
	width: "100%"
};

const authorStyle = {
	fontSize: "0.8rem",
	opacity: 0.5,
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

const descriptionStyle = {
	opacity: 0.9,
	fontSize: "0.8rem"
}

class Book extends React.Component {
	
	constructor(props) {
		super(props);

		this.props.book.description = this.props.book.description.toString().substring(0, 200) + "..."
	}

	render() {
		return (
			<div style={bookStyle}>
				<img style={imageStyle} src={this.props.book.image_url} />
				<small style={authorStyle}>{this.props.book.authors.author.name}</small>
				<span style={titleStyle}>{this.props.book.title}</span>
				<p style={descriptionStyle} dangerouslySetInnerHTML={{ __html: this.props.book.description }}></p>
			</div>
		)
	}

}

export default Book;