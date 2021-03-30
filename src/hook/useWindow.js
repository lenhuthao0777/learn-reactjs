import { useEffect, useState } from "react";

export default function useWindow() {
	// neu usestate nhan vao tham so la 1 func thi no chi chay 1 lan duy nhat
	const [size, setSize] = useState(() => {
		return { width: window.innerWidth, height: window.innerHeight };
	});
	// const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });

	useEffect(() => {
		window.addEventListener("resize", handelResize);
	}, []);
	const handelResize = () => {
		const { innerWidth, innerHeight } = window;
		console.log(innerWidth, innerHeight);
		setSize({ width: innerWidth, height: innerHeight });
	};
	// return [size.width, size.height];
	return { width: size.width, height: size.height };
}
