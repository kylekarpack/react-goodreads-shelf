import React from "react";

const bookStyle = {
	maxWidth: "100%"
}

class Book extends React.Component {
	
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<img style={bookStyle} src={this.props.data.book.image_url} />
			</div>
		)
	}

}

export default Book;