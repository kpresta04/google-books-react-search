import { createStore, combineReducers } from "redux";

import searchRedcer from "../reducers/searchReducer";

export default () => {
	const store = createStore(
		combineReducers({ results: searchRedcer }),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);

	return store;
};
