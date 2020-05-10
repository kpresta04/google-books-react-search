import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SavedBookList from "../components/SavedBookList/SavedBookList.component";
import App from "../App";
import AppBar from "../components/AppBar/AppBar.component";

export default function AppRouter() {
	return (
		<BrowserRouter>
			<div>
				<AppBar />
				<Switch>
					<Route path="/" component={App} exact={true} />
					<Route path="/" component={SavedBookList} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}
