import { createStore, combineReducers } from "redux";

import searchRedcer from "../reducers/searchReducer";
import savedBooks from "../reducers/savedBooks";

export default () => {
	const store = createStore(
		combineReducers({ results: searchRedcer, savedBooks }),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);

	return store;
};
