import React from "react";
import { useDispatch } from "react-redux";
function Todo({ data }) {
	const dispatch = useDispatch();
	const handelDelete = () => {
		const action = {
			type: "DELETE",
			payload: { id: data.id },
		};
		dispatch(action);
	};
	const handelChangeStatus = () => {
		const action = {
			type: " CHANGE_STATUS",
			payload: { id: data.id },
		};
        dispatch(action);
	};
	return (
		<>
			<ul className="list-group">
				<div>
					<button className="btn btn-success" onClick={handelChangeStatus}>{data.completed ? "Cancel" : "Completed"}</button>
					<li className="list-group-item active completed">{data.name}</li>
					<button className="btn btn-danger" onClick={handelDelete}>
						X
					</button>
					<p>---------------------------------------------------------------------------</p>
				</div>
			</ul>
		</>
	);
}

export default Todo;
