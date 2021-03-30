import React from "react";
import Phoneitem from "./Phoneitem";
export default function Phonelist() {
	return (
		<section id="smartphone" className="container-fluid pt-5 pb-5">
			<h1 className="text-white text-center">BEST SMARTPHONE</h1>
			<div className="row">
				<Phoneitem></Phoneitem>
			</div>
		</section>
	);
}
