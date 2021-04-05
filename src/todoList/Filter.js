import React from "react";
import { Button } from "reactstrap";
import { useDispatch } from "react-redux";
import { filterTodos } from "../redux/action/TodoAction";

function Filter() {
	const dispatch = useDispatch();
	const filterTodo = (status) => {
		// const action = {
		// 	type: "FILTER",
		// 	payload: {
		// 		status,
		// 	},
		// };
		dispatch(filterTodos(status));
	};
	return (
		<div>
			<Button color="primary" onClick={() => filterTodo("all")}>
				ALL
			</Button>
			<Button color="success" onClick={() => filterTodo("completed")}>
				Completed
			</Button>
			<Button color="danger" onClick={() => filterTodo("uncompleted")}>
				UnCompleted
			</Button>
		</div>
	);
}

export default Filter;
