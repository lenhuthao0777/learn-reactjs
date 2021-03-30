import React, { Component } from "react";

export default class Student extends Component {
	render() {
		const { student } = this.props;
		return (
            
			<p>
				name: {student.fullName} - age: {student.age} - score: {student.score}
			</p>
		);
	}
}
