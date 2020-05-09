import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import Typography from "@material-ui/core/Typography";

import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
	},
	details: {
		display: "flex",
		flexDirection: "column",
	},
	content: {
		flex: "1 0 auto",
		alignItems: "center",
	},
	cover: {
		width: 128,
		height: 190,
	},
	controls: {
		display: "flex",
		alignItems: "center",
		paddingLeft: theme.spacing(1),
		paddingBottom: theme.spacing(1),
	},
	playIcon: {
		height: 38,
		width: 38,
	},
}));

function MediaControlCard(props) {
	useEffect(() => {
		console.log(props.results);
	}, [props.results]);

	const classes = useStyles();

	//title
	//authors []
	//[0].volumeInfo.imageLinks.smallThumbnail
	//description
	//canonicalVolumeLink

	return (
		<div>
			{props.results.map((result, index) => (
				<Card
					className={classes.root}
					key={index}
					style={{ outline: "4px black solid" }}
				>
					<CardMedia
						className={classes.cover}
						image={result.volumeInfo.imageLinks.smallThumbnail}
						title="Live from space album cover"
					/>
					<div className={classes.details}>
						<CardContent className={classes.content}>
							<Typography component="h5" variant="h5">
								{result.volumeInfo.title}
							</Typography>
							<Typography variant="subtitle1" color="textSecondary">
								{
									result.volumeInfo.authors
									/* result.volumeInfo.authors.map((author) => {
										return author + " ";
									}) */
								}
							</Typography>
						</CardContent>
					</div>
					<div>{result.volumeInfo.description}</div>
				</Card>
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
