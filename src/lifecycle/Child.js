import React, { Purecomponent } from "react";
// purecomponent react se tu su ly shouldcomponent cho minh no se tu dong so sanh props hoac state voi state props moi neu thay doi se render lai con ko thi se ko render lai
//  chi so sanh dc primitives value (string, number null, undefind) khi so sanh object hoac array no se luon tra ve true
export default class Child extends Purecomponent {
	constructor(props) {
		super(props);
		this.state = {
			total: props.count * 1000,
		};
	}
	// chay sau khi props or state thay doi va chay trc render
	// new return ve true chay tiep tuc toi render
	// new return ve false render ko chay
	// cung cap gia tri moi cua props va state
	// shouldComponentUpdate(nextProps, NextState) {
	// 	if (nextProps.count !== this.props.count) {
	// 		return true;
	// 	}
	// 	return false;
	// }
	componentDidUpdate(prevProps, prevState) {
		console.log("prevprops", prevProps);
		console.log("rops", this.props);
		if (prevProps.count !== this.props.count) {
			this.setState({ total: this.props.count * 1000 });
		}
	}
	render() {
		return (
			<div>
				<h1>{this.state.total}</h1>
			</div>
		);
	}
}
