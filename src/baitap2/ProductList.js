import React, { Component } from "react";
import ProductDetail from "./ProductDetail";
import ProductItem from "./ProductItem";
export default class ProductList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			productDetail: null,
		};
	}

	getProduct = (product) => {
		console.log(product);
		this.setState({ productDetail: product });
	};
	render() {
		const { products, addToCart } = this.props;
		return (
			<>
				<div className="row">
					{products.map((product) => (
						<div className="col-xl-4">
							<ProductItem addToCart={addToCart} product={product} getProduct={this.getProduct}></ProductItem>
						</div>
					))}
				</div>
				<ProductDetail product={this.state.productDetail}></ProductDetail>
			</>
		);
	}
}
