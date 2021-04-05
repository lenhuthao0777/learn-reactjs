import React from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import { useSelector } from "react-redux";
import Filter from "./Filter";

function TodoList() {
	const { data, Loading, filter } = useSelector((state) => state.TodoReducer);
	const filterData =
		filter === "all"
			? data
			: data.filter((item) => {
					if (filter === "completed") {
						return item.completed === true;
					}
					if (filter === "uncompleted") {
						return item.completed === false;
					}
			  });
	return (
		<div className="container">
			<h1>TODO LIST</h1>
			<TodoForm />
			{filterData.map((item) => (
				<TodoItem key={item.id} data={item} />
			))}
			<Filter />
		</div>
	);
}

export default TodoList;
