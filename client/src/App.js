import React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar.component";
import HeroText from "./components/HeroText/HeroText.component";
import BookList from "./components/BookList/BookList.component";
import { connect } from "react-redux";

function App(props) {
	return (
		<div className="App">
			<HeroText />
			<SearchBar />
			<BookList />
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		results: state.results,
	};
};

export default connect(mapStateToProps)(App);
