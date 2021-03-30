import React, { Component } from "react";
import Child from "./Child";

export default class Lifecycle extends Component {
	constructor(props) {
		super(props);

		console.log("run constructor");
		this.state = {
			count: 0,
			count1: 0,
		};
	}
	// goi api, tuong tac vs DOM
	// thuc hien tac vu bat dong bo settimeout, setinterval
	// chi chay 1 lan duy nhat sau khi render lan dau
	// componentDidMount() {
	// 	console.log("run didmount");
	// 	document.getElementById("life").addEventListener("click", () => {
	//         console.log("hello")
	//     });
	// 	this.timer = settimeout(() => {
	//         console.log("hello")
	//     }, 1000);
	// }
	/*
    goi api 
    set state
    tuong tac dom
    
    */
	componentDidUpdate(prevProps, prevState) {
		console.log("", prevState, prevProps);
		console.log("", this.state, this.props);
		// cai dat dk dung lai
		// tranh truong hop bi lap vo tan
	}
	// chay trc khi component bi huy
	// lam tac vu clear
	// componentWillUnmount() {
	// 	document.getElementById("life").removeEventListener("click");
	// 	clearTimeout(this.timer);
	// }
	incre = () => {
		this.setState((state) => {
			return { count: state.count + 1 };
		});
	};
	incre1 = () => {
		this.setState((state) => {
			return { count1: state.count1 + 1 };
		});
	};
	render() {
		// console.log(this.incre)
		return (
			<div>
				<h1 id="life">lifecycle</h1>
				<button onClick={() => this.incre()}>Click</button>
				<button onClick={() => this.incre1()}>Click1</button>

				<Child count={this.state.count}></Child>
			</div>
		);
	}
}
