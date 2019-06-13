import React from "react";
import convert from "xml-js";
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

		const json = convert.xml2js(xmlText, { compact: true, nativeType: true }),
			books = json.GoodreadsResponse.reviews.review; // This is where the list of books is stored

		this.setState({
			books: books
		});

	}

	render() {
		return (
			<div>
				{this.state.books.length}
				{
					this.state.books.map(book => {
						return <Book data={book} />	
					})
				}
			</div>
		)
	}

}

export default GoodreadsBookshelf;