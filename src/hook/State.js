import React, { useState } from "react";

export default function State() {
	// [state, setState] han thay doi gia tri func se render lai
	const [count, setCount] = useState(0);
	const [product, setProduct] = useState(["iphone 12", "iphone 5s"]);
	const [students, setStudents] = useState({ userName: "", email: "" });
	const handelAdd = () => {
		setProduct((product) => {
			return [...product, "iphone 3"];
		});
	};
	const handelChange = (e) => {
		const { name, value } = e.target;
		setStudents((student) => {
			return {
				...student,
				[name]: value,
			};
		});
	};
	return (
		<div>
			<h1>{count}</h1>
			<button onClick={() => setCount(count + 1)}>click</button>

			<p>----------------------------------</p>
			<p>{product.join(", ")}</p>
			<button onClick={handelAdd}>add</button>
			<p>-----------------------------------</p>

			<div className="container">
				<div className="form-group">
					<label>user name</label>
					<input type="text" className="form-control" name="userName" value={students.userName} onChange={handelChange} />
				</div>
				<div className="form-group">
					<label>email</label>
					<input type="text" className="form-control" name="email" value={students.email} onChange={handelChange} />
				</div>
			</div>
		</div>
	);
}
