import React, { Component } from "react";
import Card from "./Card";
import Card_2 from "./Card_2";
import Child from "./Child";
import Student from "./Student";
export default class Parent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			students: [
				{
					id: 1,
					fullName: "le van tai",
					age: 19,
					score: 7,
				},
				{
					id: 2,
					fullName: "le van tu",
					age: 20,
					score: 6,
				},
				{
					id: 3,
					fullName: "le van nam",
					age: 19,
					score: 9,
				},
			],
			products: [
				{
					id: 1,
					name: "iphone 11",
					price: "3000000",
				},
				{
					id: 2,
					name: "iphone 12",
					price: "20000000",
				},
				{
					id: 3,
					name: "iphone 7 plus",
					price: "10000000",
				},
			],
		};
	}

	render() {
		return (
			<div className="container">
				<Child msg="hello"></Child>
				<Child msg="hi"></Child>
				<Child msg="hola"></Child>
				{this.state.students.map((student) => {
					return <Student key={student.id} student={student}></Student>;
				})}

				<h1>Props Funtions</h1>
				<div className="row">
					{this.state.students.map((student) => {
						return <Card key={student.id} student={student}></Card>;
					})}
				</div>

				<h1>props children</h1>
				<div className="row">
					{this.state.students.map((student) => {
						return (
							<Card_2 key={student.id} title="Student">
								<h3 className="text-secondary">{student.fullName}</h3>
								<p>score: {student.score}</p>
								<button className="btn btn-success">Detail</button>
							</Card_2>
						);
					})}
				</div>
				<h1>Product</h1>

				<div className="row">
					{this.state.products.map((product) => (
						<Card_2
							key={product.id}
							title="product"
							button={() => {
								return <button className="btn btn-success">Detail</button>;
							}}
						>
							<h3>Name: {product.name}</h3>
							<p>price: {product.price}</p>
						</Card_2>
					))}
				</div>
			</div>
		);
	}
}
