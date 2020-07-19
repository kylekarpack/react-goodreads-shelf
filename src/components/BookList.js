import React from "react";
import Book from "./Book";

const shelfStyle = (minWidth) => ({
	display: "grid",
	alignItems: "center",
	gridTemplateColumns: `repeat(auto-fit, minmax(${minWidth}px, 1fr))`,
	gridColumnGap: "1vw",
	margin: "1vw",
	textAlign: "center",
});

export default ({ books, options }) => {
	return (
		<div style={shelfStyle(options?.width)}>
			{books.map((book) => {
				return <Book key={book.id} book={book.book} options={options} />;
			})}
		</div>
	);
};
