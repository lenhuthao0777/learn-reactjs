import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input, Small } from "reactstrap";
export default class ModalAdd extends Component {
	constructor(props) {
		super(props);

		this.state = {
			values: {
				userName: "",
				address: "",
				phone: "",
			},
		};
	}
	componentDidUpdate(prevProps, prevState) {
		if (this.props.user.id && prevProps.user.id !== this.props.user.id) {
			this.setState({
				values: this.props.user,
			});
		}
	}
	handelChange = (event) => {
		const { name, value } = event.target;
		this.setState((state) => {
			return {
				values: {
					...state.values,
					[name]: value,
				},
			};
		});
	};
	handelAdd = () => {
		if (this.state.values.id) {
			this.props.onUpdate(this.state.values);
		} else {
			this.props.onAdd(this.state.values);
		}
		this.setState({
			values: {
				userName: "",
				address: "",
				phone: "",
			},
		});
	};
	render() {
		return (
			<>
				<Modal isOpen={this.props.isOpen} toggle={this.props.onToggle}>
					<ModalHeader>User Form</ModalHeader>
					<ModalBody>
						<FormGroup >
							<Label htmlFor />
							<small id="emailHelpId" className="form-text text-muted">
								user name
							</small>
							<Input type="text" name="userName" id="userName" onChange={this.handelChange} value={this.state.values.userName} className="form-control" />
						</FormGroup>
						<FormGroup >
							<Label htmlFor />
							<small id="emailHelpId" className="form-text text-muted">
								address
							</small>
							<Input type="text" name="address" id="address" onChange={this.handelChange} value={this.state.values.address} className="form-control" />
						</FormGroup>
						<FormGroup >
							<Label htmlFor />
							<small id="emailHelpId" className="form-text text-muted">
								phone
							</small>
							<Input type="text" name="phone" id="phone" onChange={this.handelChange} value={this.state.values.phone} className="form-control" />
						</FormGroup>
					</ModalBody>
					<ModalFooter>
						<Button color="danger" onClick={this.props.onToggle}>Close</Button>
						<Button color="primary" onClick={this.handelAdd}>
							Save
						</Button>
					</ModalFooter>
				</Modal>
			</>
		);
	}
}
