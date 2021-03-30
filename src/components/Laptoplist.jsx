import React from "react";
import Laptopitem from "./Laptopitem";
export default function Laptoplist() {
	return (
		<section id="laptop" className="container-fluid pt-5 pb-5 bg-light text-dark">
			<h1 className="text-center">BEST LAPTOP</h1>
			<div className="row">
				<Laptopitem></Laptopitem>
			</div>
		</section>
	);
}
