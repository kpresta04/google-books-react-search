import React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar.component";
import HeroText from "./components/HeroText/HeroText.component";

function App() {
	return (
		<div className="App">
			<HeroText />
			<SearchBar />
		</div>
	);
}

export default App;
