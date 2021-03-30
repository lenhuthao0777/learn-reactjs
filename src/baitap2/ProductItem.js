import React, { Component } from "react";

export default class ProductItem extends Component {
	getProduct = () => {
		this.props.getProduct(this.props.product);
	};
	render() {
		const { product, addToCart } = this.props;
		return (
			<>
				<div className="card">
					<img className="card-img-top" src={product.hinhAnh} alt="" />
					<div className="card-body">
						<h4 className="card-title">{product.tenSP}</h4>
						<p className="card-text">{product.manHinh}</p>
						<p className="card-text">{product.heDieuHanh}</p>
						<button className="btn btn-success" onClick={() => this.getProduct()}>
							xem chi tiet
						</button>
						<button className="btn btn-primary" onClick={() => addToCart(product)}>
							Add to cart
						</button>
					</div>
				</div>
			</>
		);
	}
}
