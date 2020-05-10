import React, { useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import saveBook from "../../actions/saveBook";
import BookCard from "../BookCard/BookCard.component";

function MediaControlCard(props) {
	useEffect(() => {
		axios
			.get("/books")
			.then(function (response) {
				// handle success
				const dbObject = response.data;

				dbObject.forEach((book) => {
					props.dispatch(saveBook(book));
				});
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			});
	}, []);

	//title
	//authors []
	//[0].volumeInfo.imageLinks.smallThumbnail
	//description
	//canonicalVolumeLink

	return (
		<div>
			{props.savedBooks.map((book, index) => (
				<BookCard
					image={book.image}
					key={index}
					title={book.title}
					desc={book.desc}
					author={book.author}
					link={book.link}
					commandText="Delete"
					id={book._id}
				/>
				/* <Card
					className={classes.root}
					key={index}
					style={{ outline: "4px black solid" }}
				>
					<CardMedia
						className={classes.cover}
						title="Live from space album cover"
					/>
					<div className={classes.details}>
						<CardContent className={classes.content}>
							<Typography component="h5" variant="h5">
								
							</Typography>
							<Typography variant="subtitle1" color="textSecondary">
								{
									
									/* result.volumeInfo.authors.map((author) => {
										return author + " ";
									}) */

				/*
				 */
			))}
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		savedBooks: state.savedBooks,
	};
};

export default connect(mapStateToProps)(MediaControlCard);
