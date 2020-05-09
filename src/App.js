import React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar.component";
import HeroText from "./components/HeroText/HeroText.component";
import BookCard from "./components/BookCard/BookCard.component";
import { connect } from "react-redux";

function App(props) {
	return (
		<div className="App">
			<HeroText />
			<SearchBar />
			<BookCard />
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		results: state.results,
	};
};

export default connect(mapStateToProps)(App);
