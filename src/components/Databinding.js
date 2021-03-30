import React, { Component } from "react";

export default class Databinding extends Component {
	c = "wold";
	xuatthongtin = (name, age) => (
		<div>
			<p>{name}</p>
			<p>{age}</p>
		</div>
	);
	render() {
		
		return (
			<div>
				{this.xuatthongtin("abc", 18)}
			</div>
		);
	}
}
