import React from "react";
import { useDispatch } from "react-redux";
function TodoItem({ data }) {
	const dispatch = useDispatch();

	const handelDelete = () => {
		const action = {
			type: "DELETE",
			payload: { id: data.id },
		};
		dispatch(action);
	};
	const handelStatus = (id) => {
		const action = {
			type: "STATUS",
			payload: {
				id: id,
			},
		};
		console.log(id);
		dispatch(action);
	};
	return (
		<>
			<div className='todo'>
				<li className={`todo-item ${data.completed ? "completed" : ""}`}>{data.name}</li>
				<button className='complete-btn' onClick={() => handelStatus(data.id)}>
					<i className='fas fa-check'></i>
				</button>
				<button className='trash-btn' onClick={handelDelete}>
					<i className='fas fa-trash'></i>
				</button>
			</div>
		</>
	);
}

export default TodoItem;
