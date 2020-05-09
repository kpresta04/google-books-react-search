import axios from "axios";
import APIkey from "../apiKey";

const search = async (str) => {
	const url = `https://www.googleapis.com/books/v1/volumes?q=${str}&key=${APIkey}`;
	try {
		const response = await axios.get(url);
		return response.data.items;
	} catch (error) {
		console.error(error);
	}
};

const searchReducer = async (state = [], action) => {
	switch (action.type) {
		case "SEARCH":
			const results = await search(action.searchTerm);

			state = results;

			return state;

		default:
			return state;
	}
};

export default searchReducer;
