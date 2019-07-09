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
		if (this.props.book) {
			this.props.book.description = this.props.book.description.toString().substring(0, 200) + "..."
		}
	}

	render() {

		const { book, options } = this.props;

		if (!book) {
			return "";
		}
 
		return (
			<div style={bookStyle} title={book.title}>
				<a href={book.link} target="_blank">
					<img style={imageStyle} src={book.image_url} />
				</a>
				{
					options.details && 
						<div>
							<small style={authorStyle}>{book.authors.author.name}</small>
							<span style={titleStyle}>{book.title}</span>
							<p style={descriptionStyle} dangerouslySetInnerHTML={{ __html: book.description }}></p>
						</div>
				}
				
			</div>
		)
	}

}

export default Book;