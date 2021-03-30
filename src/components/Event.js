import React, { Component } from "react";

export default class Event extends Component {
	showMsg = (e) => {
		alert(e.target.value);
	};
	showMsg2 = (name) => {
		alert(`Hello ${name}`);
	};
	render() {
		return (
			<div>
				<button onClick={this.showMsg}>Click</button>
				<button onClick={()=>this.showMsg2("hung")}>Click</button>
                <input type="text" onChange={this.showMsg}/>
			</div>
		);
	}
}
