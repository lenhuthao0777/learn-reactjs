import React, { useState, useEffect } from "react";

export default function Lifecycel() {
	const [count, setCount] = useState(0);
	const [count1, setCount1] = useState(0);
	useEffect(() => {
		console.log("count:", count);
	});
	useEffect(() => {
		// tuong duong componentdidmount chi chay 1 lan sau khi render, tham so thu 2 array rong []
		console.log("countdid");
		return () => {
			console.log("chay trc khi component bi huy");
			// return ve 1 func , func nay chay trc khi bi huy => componentwillunmount
			// chi nen return ben trong useefect co tham so thu 2 la rong
		};
	}, []);
	useEffect(() => {
		// so sanh gia tri thay doi thi moi chay
		console.log("thay doi", count1);
	}, [count1]);
	return (
		<div>
			<h1>demo</h1>
			<p>{count}</p>
			<button onClick={() => setCount1(count + 1)}>click</button>

			<h1>demo</h1>
			<p>{count1}</p>
			<button onClick={() => setCount1(count1 + 1)}>click</button>
		</div>
	);
}
