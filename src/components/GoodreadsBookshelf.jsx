import React from "react";
import { xml2js } from "xml-js";
import Xml2JsUtils from "../util/xml2js-utils";
import Book from "./Book";
import Loader from "./Loader";

const shelfStyle = {
	display: "grid",
	gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
	gridColumnGap: "1vw",
	margin: "1vw"
};

class GoodreadsBookshelf extends React.Component {

	constructor(props) {
		super(props);
		this.state = { books: [], loaded: false };

		this.getBooks();
	}

	async getBooks() {

		// Build a request to the Goodreads API
		const url = new URL(`https://cors-anywhere.herokuapp.com/https://www.goodreads.com/review/list/${this.props.userId}`);
		url.searchParams.set("key", this.props.apiKey);
		url.searchParams.set("per_page", this.props.limit || 10);
		url.searchParams.set("v", 2);

		const response = await fetch(url);
		const xmlText = await response.text();

		const json = xml2js(xmlText, Xml2JsUtils.options),
			books = json.GoodreadsResponse.reviews.review; // This is where the list of books is stored

		this.setState({
			books: books,
			loaded: true
		});

		console.warn("Got books", books);

	}


	render() {
		return (
			<div>
				<div style={shelfStyle}>
					{
						this.state.books.map(book => {
							return <Book key={book.id} book={book.book} />
						})
					}
				</div>
				{ this.state.loaded ? "" : <Loader /> }
			</div>
			
		)
	}

}

export default GoodreadsBookshelf;