import React, { Component } from "react";

export default class Card_2 extends Component {
	render() {
		const { title, button } = this.props;
		return (
			<div className="col-xl-4">
				<div>
					<div className="card">
						<div className="card-header">{title}</div>
						<div className="card-body">{this.props.children}</div>
						<div className="card-footer text-muted">{button && button()}</div>
					</div>
				</div>
			</div>
		);
	}
}
