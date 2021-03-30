import React from "react";

export default function DanhSachCuoc({ danhSachCuoc, handelCuoc, tienThuong }) {
	const upDown = (item, result) => {
		handelCuoc(item, result);
	};
	return (
		<div className="container">
			<div className="row">
				{danhSachCuoc.map((item, index) => (
					<div className="col-4" key={index} style={{ margin: "20px 0" }}>
						<img src={item.hinhAnh} width="100%" alt="" />
						<div style={{ backgroundColor: "#d3d3d3" }}>
							<button className="btn btn-success" disabled={!tienThuong} onClick={() => upDown(item, true)}>
								+
							</button>
							<span style={{ padding: "0 10px" }}>cuoc: ({item.diemcuoc})</span>
							<button className="btn btn-danger" disabled={!item.diemcuoc} onClick={() => upDown(item, false)}>
								-
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
