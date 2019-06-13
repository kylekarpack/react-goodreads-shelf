import React from "react";
import { xml2js } from "xml-js";
import Book from "./Book";


class GoodreadsBookshelf extends React.Component {

	constructor(props) {
		super(props);
		this.state = { books: [] };

		this.getBooks();
	}

	async getBooks() {

		const response = await fetch(`https://cors-anywhere.herokuapp.com/https://www.goodreads.com/review/list/${this.props.userId}?key=${this.props.apiKey}&v=2`);
		const xmlText = await response.text();

		const json = xml2js(xmlText, { compact: true, nativeType: true }),
			books = json.GoodreadsResponse.reviews.review; // This is where the list of books is stored

		this.setState({
			books: books
		});

		console.warn("Got books", books);

	}

	shelfStyle = {
		display: "grid",
		gridTemplateColumns: "repeat(auto-fit, minmax(50px, 1fr))",
	};

	render() {
		return (
			<div style={this.shelfStyle}>
				{
					this.state.books.map(book => {
						return <Book key={book.id._text} data={book} />	
					})
				}
			</div>
		)
	}

}

export default GoodreadsBookshelf;