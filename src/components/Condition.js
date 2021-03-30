import React, { Component } from "react";

export default class Condition extends Component {
	isLogin = false;
	toggleLogin = () => (this.isLogin = !this.isLogin);
	render() {
		if (this.isLogin) {
			return (
				<div>
					<p>da login</p>
					<p> login out</p>
				</div>
			);
		}
		return (
			<div>
				<p>chua login</p>
				<p> login</p>
			</div>
		);
	}
}
