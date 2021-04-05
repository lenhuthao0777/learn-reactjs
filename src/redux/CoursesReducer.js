import { GET_COURSE } from "./constants/coursesConstants";

const initialState = {
	data: [],
};

export const CoursesReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_COURSE:
			return { ...state.data, data: action.payload.data };
		default:
			return state;
	}
};
