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
			completed: false,
		},
	],
	isLoading: false,
};

export const TodoReducer = (state = initialState, action) => {
	switch (action.type) {
		case "DELETE": {
			// let newData = [...state.data];
			const data = state.data.filter((todo) => todo.id !== action.payload.id);
			console.log(data);
			return { ...state, data };
		}
		case "CHANGE_STATUS": {
			const { id } = action.payload.id;
			// const data = [...state.data];
			// const index = data.findIndex((item) => item.id === id);
			// data[index].completed = !data[index].completed;
			// return { ...state, data };

			const data = state.data.map((item) => {
                console.log(item.completed);
				if (item.id === id) {
					return { ...item, completed: !item.completed };
				}
				return item;
			});
			return { ...state, data };
		}

		default:
			return state;
	}
};
