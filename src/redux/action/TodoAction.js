import { FILTER_TODO, ADD, DELETE, STATUS } from "../constants/TodoConstants";

const filterTodos = (status) => {
	return {
		type: FILTER_TODO,
		payload: {
			status,
		},
	};
};
const addTodo = (Input) => {
	return {
		type: ADD,
		payload: {
			id: Math.trunc(Math.random() * 1000),
				name: Input,
				completed: false,
		},
	};
};

const deleteTodo = (id) => {
	return {
		type: DELETE,
		payload: {
			id,
		},
	};
};
const changeStatus = (id) => {
	return {
		type: STATUS,
		payload: {
			id,
		},
	};
};
export { filterTodos, addTodo, deleteTodo, changeStatus };
