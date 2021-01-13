import React from "react";
import Book from "./Book";

const shelfStyle = (minWidth) => {
	minWidth = minWidth || "6rem";
	return {
		display: "grid",
		gridTemplateColumns: `repeat(auto-fill, ${minWidth})`,
		justifyContent: "space-around",
		alignItems: "center",
		gridColumnGap: "0.5rem",
		gridRowGap: "0.5rem",
	};
};

export default ({ books, bookWidth }) => {
	return (
		<div style={shelfStyle(bookWidth)}>
			{books.map((book) => {
				return <Book key={book.id} book={book} bookWidth={bookWidth} />;
			})}
		</div>
	);
};
