
export const ColorReducer = (state = "red", action) => {
	switch (action.type) {
		case "CHANGE_COLOR":
			return action.payload;

		default:
			return state;
	}
};
