import React, { Component } from "react";

export default class UserList extends Component {
	render() {
		const { users, onDelete, onGetUser } = this.props;
		return (
			<table className="table">
				<thead>
					<tr>
						<th>ID</th>
						<th>UserName</th>
						<th>Address</th>
						<th>Phone</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user) => (
						<tr key={user.id}>
							<td>{user.id}</td>
							<td>{user.userName}</td>
							<td>{user.address}</td>
							<td>{user.phone}</td>
							<td>
								<button className="btn btn-danger" onClick={() => onDelete(user.id)}>
									Delete
								</button>
								<button className="btn btn-primary" onClick={(() => onGetUser(user.id))}>
									Edit
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		);
	}
}
