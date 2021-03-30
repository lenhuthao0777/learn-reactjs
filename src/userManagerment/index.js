import React, { Component } from "react";
import axios from "axios";
import UserList from "./UserList";
import ModalAdd from "./ModalAdd";
import { Button } from "reactstrap";
export default class Baitap3 extends Component {
	constructor(props) {
		super(props);

		this.state = {
			users: [],
			selectedUser: [],
			isOpen: false,
		};
	}
	async componentDidMount() {
		this.fetchUser();
	}
	fetchUser = async () => {
		try {
			const result = await axios({
				method: "GET",
				url: "https://603b5b0ff1d6aa0017a11a83.mockapi.io/api/data",
			});
			this.setState({ users: result.data });
			console.log(result);
		} catch (error) {
			console.log(error);
		}
	};
	handelDelete = async (userId) => {
		try {
			await axios({
				method: "DELETE",
				url: `https://603b5b0ff1d6aa0017a11a83.mockapi.io/api/data/${userId}`,
			});
			this.fetchUser();
		} catch (error) {
			console.log(error);
		}
	};
	handelAdd = async (e) => {
		try {
			await axios({
				method: "POST",
				url: `https://603b5b0ff1d6aa0017a11a83.mockapi.io/api/data`,
				data: e,
			});
			this.fetchUser();
			this.handelToggle();
		} catch (error) {
			console.log(error);
		}
	};
	handelGetUser = async (id) => {
		try {
			const result = await axios({
				method: "GET",
				url: `https://603b5b0ff1d6aa0017a11a83.mockapi.io/api/data/${id}`,
			});
			this.setState({
				selectedUser: result.data,
			});
			this.handelToggle();
		} catch (error) {
			console.log(error);
		}
	};
	handelUpdateUser = async (user) => {
		const { id, ...data } = user;
		try {
			await axios({
				method: "PUT",
				url: `https://603b5b0ff1d6aa0017a11a83.mockapi.io/api/data/${id}`,
				data,
			});
			this.fetchUser();
			this.handelToggle();
		} catch (error) {
			console.log(error);
		}
	};
	handelToggle = () => {
		this.setState((state) => ({ isOpen: !state.isOpen }));
	};
	render() {
		return (
			<div className="container">
				<h1 className="text-center">User Managerment</h1>
				<Button type="button" outline block color="primary" onClick={this.handelToggle}>
					Add
				</Button>
				<ModalAdd isOpen={this.state.isOpen} onToggle={this.handelToggle} onAdd={this.handelAdd} onUpdate={this.handelUpdateUser} user={this.state.selectedUser}></ModalAdd>
				<UserList users={this.state.users} onDelete={this.handelDelete} onGetUser={this.handelGetUser}></UserList>
			</div>
		);
	}
}
