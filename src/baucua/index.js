import React, { useState, useEffect } from "react";
import DanhSachCuoc from "./DanhSachCuoc";
import Xucxac from "./XucXac";
const DanhSachXucSac = [
	{
		ten: "bau",
		hinhAnh: "./img/bau.png",
	},
	{
		ten: "cua",
		hinhAnh: "./img/cua.png",
	},
	{
		ten: "tom",
		hinhAnh: "./img/tom.png",
	},
	{
		ten: "ca",
		hinhAnh: "./img/ca.png",
	},
	{
		ten: "nai",
		hinhAnh: "./img/nai.png",
	},
	{
		ten: "ga",
		hinhAnh: "./img/ga.png",
	},
];
export default function BauCua() {
	const [tienThuong, setTienThuong] = useState(500);
	const [danhSachCuoc, setDanhSachCuoc] = useState(() => {
		return DanhSachXucSac.map((item) => {
			return { ...item, diemcuoc: 0 };
		});
	});
	const [xucsac, setXucSac] = useState([
		{
			ten: "bau",
			hinhAnh: "./img/bau.png",
		},
		{
			ten: "bau",
			hinhAnh: "./img/bau.png",
		},
		{
			ten: "bau",
			hinhAnh: "./img/bau.png",
		},
	]);

	// useEffect(() => {
	// 	let tongDiem = 0;
	// 	const danhsachdatduoc = danhSachCuoc.filter((item) => item.diemcuoc);
	// 	console.log(danhsachdatduoc);
	// 	danhsachdatduoc.forEach((item) => {
	// 		const found = xucsac.find((xucxac) => xucxac.ten === item.ten);
	// 		if (found) {
	// 			tongDiem += item.diemcuoc;
	// 		}
	// 	});

	// 	xucsac.forEach((item) => {
	// 		const found = danhsachdatduoc.find((cuoc) => cuoc.ten === item.ten);
	// 		if (found) {
	// 			tongDiem += found.diemcuoc;
	// 		}
	// 	});
	// 	const newDanhSachCuoc = danhSachCuoc.map((item) => ({ ...item, diemcuoc: 0 }));
	// 	setTienThuong(tienThuong + tongDiem);
	// 	setDanhSachCuoc(newDanhSachCuoc);
	// }, [xucsac]);
	const handelCuoc = (item, status) => {
		// const newDanhSachCuoc = danhSachCuoc.map((cuoc) => {
		// 	if (cuoc.ten === item.ten) {
		// 		return {
		// 			...cuoc,
		// 			diemcuoc: status ? cuoc.diemcuoc + 100 : cuoc.diemcuoc - 100,
		// 		};
		// 	}
		// 	return cuoc;
		// });
		// setTienThuong(status ? tienThuong - 100 : tienThuong + 100);
		// setDanhSachCuoc(newDanhSachCuoc);
		const newDanhSachCuoc = [...danhSachCuoc];
		let index = newDanhSachCuoc.findIndex((ten) => ten.ten === item.ten);
		console.log(index);
		if (status) {
			newDanhSachCuoc[index].diemcuoc += 100;
		} else if (newDanhSachCuoc[index].diemcuoc > 0) {
			newDanhSachCuoc[index].diemcuoc -= 100;
		}
		setTienThuong(status ? tienThuong - 100 : tienThuong + 100);
		setDanhSachCuoc(newDanhSachCuoc);
	};
	const handelXucXac = () => {
		const newXucXac = xucsac.map((item) => {
			const random = Math.floor(Math.random() * 6);
			return DanhSachXucSac[random];
		});
		setXucSac(newXucXac);
	};
	return (
		<div className="bg-secondary bc-container">
			<div className="w-75 mx-auto">
				<img width="100%" src="./img/Logo.png" alt="" />
			</div>
			<div>
				<h1 className="bg-warning" style={{ backgroundColor: "orange", width: "100px", margin: "20px auto" }}>
					{tienThuong}
				</h1>
			</div>
			<div className="row">
				<div className="col-xl-8">
					<DanhSachCuoc handelCuoc={handelCuoc} tienThuong={tienThuong} danhSachCuoc={danhSachCuoc} />
				</div>
				<div className="col-xl-4">
					<Xucxac xucsac={xucsac} handelXucXac={handelXucXac}></Xucxac>
				</div>
			</div>
		</div>
	);
}
