import React from "react";
import { xml2js } from "xml-js";
import Xml2JsUtils from "../util/xml2js-utils";
import Book from "./Book";

const shelfStyle = {
	display: "grid",
	gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
	gridColumnGap: "1vw"
};

class GoodreadsBookshelf extends React.Component {

	constructor(props) {
		super(props);
		this.state = { books: [] };

		this.getBooks();
	}

	async getBooks() {

		const response = await fetch(`https://cors-anywhere.herokuapp.com/https://www.goodreads.com/review/list/${this.props.userId}?key=${this.props.apiKey}&per_page=${this.props.limit || 10}&v=2`);
		const xmlText = await response.text();

		const json = xml2js(xmlText, Xml2JsUtils.options),
			books = json.GoodreadsResponse.reviews.review; // This is where the list of books is stored

		this.setState({
			books: books
		});

		console.warn("Got books", books);

	}


	render() {
		return (
			<div style={shelfStyle}>
				{
					this.state.books.map(book => {
						return <Book key={book.id} book={book.book} />
					})
				}
			</div>
		)
	}

}

export default GoodreadsBookshelf;