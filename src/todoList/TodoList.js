import React from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import { useSelector } from "react-redux";

function TodoList() {
	const { data } = useSelector((state) => state.TodoReducer);
	console.log(data);
	return (
		<div>
			<h1>TODO LIST</h1>
			<TodoForm data={data} />
			{data.map((item) => (
				<TodoItem key={item.id} data={item} />
			))}
		</div>
	);
}

export default TodoList;
