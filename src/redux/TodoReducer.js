import { FILTER_TODO, ADD, DELETE, STATUS } from "./constants/TodoConstants";

const initialState = {
	data: [
		{
			id: 1,
			name: "nhay day",
			completed: false,
		},
		{
			id: 2,
			name: "dua xe",
			completed: false,
		},
		{
			id: 3,
			name: "cau ca",
			completed: true,
		},
	],
	Loading: false,
	filter: "all",
};

export const TodoReducer = (state = initialState, action) => {
	console.log(action);
	switch (action.type) {
		case DELETE: {
			const data = state.data.filter((todo) => todo.id !== action.payload.id);
			console.log(data);
			return { ...state, data };
		}
		case STATUS: {
			const id = action.payload.id;
			let data = state.data.map((item) => {
				if (item.id === id) {
					return { ...item, completed: !item.completed };
				}
				return item;
			});
			return { ...state, data };
		}
		case ADD: {
			// let newArr = action.payload;
			// state.data.push(newArr);
			const data = [...state.data, { ...action.payload }];
			return { ...state, data };
		}
		case FILTER_TODO: {
			const { status } = action.payload;
			return { ...state, filter: status };
		}
		default:
			return state;
	}
};
