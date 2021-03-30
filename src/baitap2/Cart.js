import React, { Component } from "react";

export default class Cart extends Component {
	render() {
		const { productCarts, deleteCart } = this.props;
		let totals = productCarts.reduce((total, product) => {
			return (total += product.quantity * product.giaBan);
		}, 0);
		return (
			<div>
				{/* Modal */}
				<div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
					<div className="modal-dialog modal-lg" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title">Carts</h5>
								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">×</span>
								</button>
							</div>
							<div className="modal-body">
								<table className="table">
									<thead>
										<tr>
											<th scope="col">#</th>
											<th scope="col">Image</th>
											<th scope="col">Name</th>
											<th scope="col">Quantity</th>
											<th scope="col">Price</th>
											<th scope="col">Total</th>
											<th scope="col">Action</th>
										</tr>
									</thead>
									<tbody>
										{productCarts.map((product) => {
											return (
												<tr key={product.maSP}>
													<th scope="row">{product.maSP}</th>
													<td>
														<img src={product.hinhAnh} style={{ width: "50px" }} alt="" />
													</td>
													<td>{product.tenSP}</td>
													<td>
														<button className="btn btn-success">+</button>
														<input type="text" value={product.quantity} style={{ width: "20px" }} />
														<button className="btn btn-danger">-</button>
													</td>
													<td>{product.giaBan}</td>
													<td>{product.giaBan * product.quantity}</td>
													<td>
														<button className="btn btn-danger" onClick={() => deleteCart(product.maSP)}>
															Delete
														</button>
													</td>
												</tr>
											);
										})}
									</tbody>
								</table>
							</div>
							<div className="modal-footer">
								<h1>Total: {totals}</h1>
								<button type="button" className="btn btn-secondary" data-dismiss="modal">
									Close
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
