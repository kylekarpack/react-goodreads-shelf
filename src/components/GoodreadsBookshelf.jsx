import React from "react";
import Xml2JsUtils from "../util/xml2js-utils";
import Book from "./Book";
import Loader from "./Loader";

const shelfStyle = (minWidth) => ({
	display: "grid",
	alignItems: "center",
	gridTemplateColumns: `repeat(auto-fit, minmax(${minWidth}px, 1fr))`,
	gridColumnGap: "1vw",
	margin: "1vw",
	textAlign: "center",
});

class GoodreadsBookshelf extends React.Component {

	constructor(props) {
		super(props);
		this.state = { 
			books: [], 
			loaded: false,
			options: props.options || { width: 100 }
		};
	}

	componentWillMount() {
		this.getBooks();
	}

	getUrl() {
		// Build a request to the Goodreads API
		const url = new URL(`https://cors-anywhere.herokuapp.com/https://www.goodreads.com/review/list/${this.props.userId}`);
		url.searchParams.set("key", this.props.apiKey);
		url.searchParams.set("per_page", this.props.limit || 10);
		url.searchParams.set("shelf", this.props.shelf || "read");
		url.searchParams.set("sort", this.props.sort || "date_read");
		url.searchParams.set("v", 2);
		return url;
	}

	async getBooksJson() {
		if (typeof window !== "undefined" && window.fetch) {
			const url = this.getUrl();
			const response = await fetch(url);
			const xmlText = await response.text();

			const json = Xml2JsUtils.parse(xmlText);
			return json.GoodreadsResponse.reviews.review; // This is where the list of books is stored
		} else {
			throw "Error: fetch is not defined in this environment";
		}
	}

	async getBooks() {

		try {
			const books = await this.getBooksJson();
	
			this.setState({
				books: books,
				loaded: true
			});
	
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
			<div class="goodreads-shelf">
				<div style={shelfStyle(this.state.options.width)}>
					{this.state.books.map(book => {
						return <Book key={book.id} book={book.book} options={this.state.options} />
					})}
				</div>
				{ this.state.loaded ? "" : <Loader /> }
				{ this.state.error ? <div>Sorry, we couldn't load books right now</div> : "" }
			</div>
			
			
		)
	}

}

export default GoodreadsBookshelf;