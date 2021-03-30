import React, { useState, useEffect } from "react";
import useWindow from "./useWindow";
import useForm from "./useForm";
export default function Demohook() {
	// const [size, setSize] = useState({ width: 0, height: 0 });
	// useEffect(() => {
	// 	window.addEventListener("resize", handelResize);
	// }, []);
	// const handelResize = () => {
	// 	const { innerWidth, innerHeight } = window;
	// 	console.log(innerWidth, innerHeight);
	// 	setSize({ width: innerWidth, height: innerHeight });
	// };
	// const { width, height } = useWindow();
	const { values, handelChange, errors, handelBlur } = useForm({ userName: "" });
	console.log(errors.userName);
	return (
		<>
			{/* {width > 700 ? <p>width lon 700</p> : <p>width nho 700</p>} */}
			<div className="container">
				<div className="form-group">
					<label>User Name</label>
					<input type="text" name="userName" value={values.userName} onChange={handelChange} onBlur={handelBlur} className="form-control" />
					{errors.userName ? <div className="alert alert-danger">{errors.userName}</div> : null}
				</div>
			</div>
		</>
	);
}
