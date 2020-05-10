import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { connect } from "react-redux";
import searchAction from "../../actions/search";

import axios from "axios";
const APIkey = "AIzaSyAd2ZiCGgg-Oq-_F8ctUABllI41pQezQsk";
const search = async (str) => {
	const url = `https://www.googleapis.com/books/v1/volumes?q=${str}&key=${APIkey}`;
	try {
		const response = await axios.get(url);

		return response.data.items;
	} catch (error) {
		console.log(error);
	}
};
const useStyles = makeStyles((theme) => ({
	root: {
		padding: "2px 4px",
		display: "flex",
		alignItems: "center",
		margin: "2em auto",
		maxWidth: 400,
	},
	input: {
		marginLeft: theme.spacing(1),
		flex: 1,
	},
	iconButton: {
		padding: 10,
	},
	divider: {
		height: 28,
		margin: 4,
	},
}));

function CustomizedInputBase(props) {
	const [formState, formStateSet] = useState("");
	const classes = useStyles();
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (formState) {
			const response = await search(formState);

			props.dispatch(searchAction(response));
		}

		// const results = await search(formState);
		// console.log(results);
	};

	return (
		<Paper component="form" className={classes.root}>
			<InputBase
				className={classes.input}
				placeholder="Search for a book"
				inputProps={{ "aria-label": "search google maps" }}
				onSubmit={handleSubmit}
				id="searchBar"
				onChange={() => {
					formStateSet(document.querySelector("#searchBar").value);
				}}
				label="Error"
			/>
			<IconButton
				type="submit"
				className={classes.iconButton}
				aria-label="search"
				onClick={handleSubmit}
			>
				<SearchIcon />
			</IconButton>
		</Paper>
	);
}
const mapStateToProps = (state) => {
	return {
		results: state.results,
	};
};

export default connect(mapStateToProps)(CustomizedInputBase);
