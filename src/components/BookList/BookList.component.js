import React, { useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import BookCard from "../BookCard/BookCard.component";

function MediaControlCard(props) {
	useEffect(() => {
		console.log(props.results);
	}, [props.results]);

	//title
	//authors []
	//[0].volumeInfo.imageLinks.smallThumbnail
	//description
	//canonicalVolumeLink

	return (
		<div>
			{props.results.map((result, index) => (
				<BookCard
					image={result.volumeInfo.imageLinks.smallThumbnail}
					key={index}
					title={result.volumeInfo.title}
					desc={result.volumeInfo.description}
					author={result.volumeInfo.authors}
					link={result.volumeInfo.canonicalVolumeLink}
					commandText="Save"
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
		results: state.results,
	};
};

export default connect(mapStateToProps)(MediaControlCard);
