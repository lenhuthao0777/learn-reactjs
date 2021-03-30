import React from "react";

export default function Xucxac({ xucsac, handelXucXac }) {
	return (
		<div>
			{xucsac.map((item, index) => {
				return <img key={index} src={item.hinhAnh} style={{ width: "200px", display: "flex" }} alt="" />;
			})}
			<img src="./img/soc.png" style={{ width: "200px" }} onClick={handelXucXac} alt="" />
		</div>
	);
}
