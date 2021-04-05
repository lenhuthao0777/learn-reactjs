import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/action/TodoAction";

function TodoForm() {
	const [Input, setInput] = useState("");
	const dispatch = useDispatch();
	const InputHandel = (e) => {
		const input = e.target.value;
		setInput(input);
	};
	const handelChange = (input) => {
		// e.preventDefault();
		// const action = {
		// 	type: "ADD",
		// 	payload: {
		// 		id: Math.trunc(Math.random() * 1000),
		// 		name: Input,
		// 		completed: false,
		// 	},
		// };
		dispatch(addTodo(input));
	};
	return (
		<div>
			<form className="todo-form">
				<input type="text" className="todo-input" value={Input} onChange={InputHandel} />
				<button className="todo-button" onClick={() => handelChange(Input)}>
					<i className="fas fa-plus-square" />
				</button>
				{/* <div className='select'>
					<select name='todos' className='filter-todo'>
						<option value='all'>All</option>
						<option value='completed'>Completed</option>
						<option value='uncompleted'>Uncompleted</option>
					</select>
				</div> */}
			</form>
		</div>
	);
}

export default TodoForm;
