import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { connect } from "react-redux";
import search from "../../actions/search";

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
		props.dispatch(search(formState));

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
