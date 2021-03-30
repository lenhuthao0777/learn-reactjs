import React, { Component } from "react";

export default class State extends Component {
	state = {
		isLogin: false,
		num1: 0,
		num2: 0,
	};
	toggleLogin = () => {
		this.setState({ isLogin: !this.state.isLogin }, () => console.log(this.state.isLogin));
		console.log(this.state.isLogin);
	};
	handelIncrement = () => {
		// this.setState({ num1: this.state.num1 + 1 }, () => {
		// 	this.setState({ num2: this.state.num1 * 2 });
		// });

		this.setState((state) => {
			return {
				num1: state.num1 + 1,
			};
		});
		this.setState((state) => {
			return {
				num2: state.num1 * 2,
			};
		});
	};
	render() {
		// if (this.state.isLogin) {
		// 	return (
		// 		<div>
		// 			<h1>da login</h1>
		// 			<button onClick={this.toggleLogin}> login out</button>
		// 		</div>
		// 	);
		// }
		// return (
		// 	<div>
		// 		<h1>chua login</h1>
		// 		<button onClick={this.toggleLogin}> login</button>
		// 	</div>
		// );

		return (
			<div>
				<p>NUMBER 1: {this.state.num1}</p>
				<p>NUMBER 2: {this.state.num2}</p>
				<button onClick={this.handelIncrement}>+</button>
			</div>
		);
	}
}
