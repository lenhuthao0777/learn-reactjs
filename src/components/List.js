import React, { Component } from "react";

export default class List extends Component {
	products = [
		{
			id: 1,
			proName: "Iphone 12",
			price: "3000000vnd",
		},
		{
			id: 2,
			proName: "Iphone x",
			price: "3500000vnd",
		},
		{
			id: 3,
			proName: "Iphone 11",
			price: "3000000vnd",
		},
		{
			id: 4,
			proName: "Iphone 8",
			price: "1000000vnd",
		},
	];
	render() {
		return (
			<div>
				{this.products.map((item) => (
					<ul key={item.id}>
						<li>{item.proName}</li>
						<li>{item.price}</li>
					</ul>
				))}
			</div>
		);
	}
}
