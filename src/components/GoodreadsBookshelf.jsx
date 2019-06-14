import React from "react";
import Xml2JsUtils from "../util/xml2js-utils";
import Book from "./Book";
import Loader from "./Loader";

const shelfStyle = (minWidth) => ({
	display: "grid",
	alignItems: "center",
	gridTemplateColumns: `repeat(auto-fit, minmax(${minWidth}px, 1fr))`,
	gridColumnGap: "1vw",
	margin: "1vw"
});

class GoodreadsBookshelf extends React.Component {

	constructor(props) {
		super(props);
		this.state = { 
			books: [], 
			loaded: false,
			options: props.options || { width: 100 }
		};

		this.getBooks();
	}

	async getBooks() {

		// Build a request to the Goodreads API
		const url = new URL(`https://cors-anywhere.herokuapp.com/https://www.goodreads.com/review/list/${this.props.userId}`);
		url.searchParams.set("key", this.props.apiKey);
		url.searchParams.set("per_page", this.props.limit || 10);
		url.searchParams.set("v", 2);

		try {
			const response = await fetch(url);
			const xmlText = await response.text();
	
			const json = Xml2JsUtils.parse(xmlText),
				books = json.GoodreadsResponse.reviews.review; // This is where the list of books is stored
	
			this.setState({
				books: books,
				loaded: true
			});
	
			console.warn("Got books", books);
		} catch (e) {

			console.error(e);

			// Indicate that we errored
			this.setState({
				loaded: true,
				error: true
			});
		}
		
	}

	render() {
		return (
			<div>
				<div style={shelfStyle(this.state.options.width)}>
					{
						this.state.books.map(book => {
							return <Book key={book.id} book={book.book} options={this.state.options} />
						})
					}
				</div>
				{ this.state.loaded ? "" : <Loader /> }
				{ this.state.error ? <div>Sorry, we couldn't load books right now</div> : "" }
			</div>
			
			
		)
	}

}

export default GoodreadsBookshelf;