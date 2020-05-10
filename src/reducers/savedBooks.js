const savedBooks = (state = [], action) => {
	switch (action.type) {
		case "SAVE_BOOK":
			state = [...state, action.book];
			return state;

		case "DELETE_BOOK":
			let stateArray = [...state];
			const filteredArray = stateArray.filter((item) => item._id !== action.id);
			state = filteredArray;

			return state;

		default:
			return state;
	}
};

export default savedBooks;
