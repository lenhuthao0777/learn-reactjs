import React, { Component } from "react";
import Cart from "./Cart";
import ProductList from "./ProductList";

export default class Baitap2 extends Component {
	constructor(props) {
		super(props);

		this.state = {
			products: [
				{
					maSP: 1,
					tenSP: "VinSmart Live",
					manHinh: 'AMOLED, 6.2", Full HD+',
					heDieuHanh: "Android 9.0 (Pie)",
					cameraTruoc: "20 MP",
					cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
					ram: "4 GB",
					rom: "64 GB",
					giaBan: 5000000,
					hinhAnh: "https://cdn.tgdd.vn/Products/Images/42/208847/vsmart-live-blue-600x600.jpg",
				},

				{
					maSP: 2,
					tenSP: "Meizu 16Xs",
					manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
					heDieuHanh: "Android 9.0 (Pie); Flyme",
					cameraTruoc: "20 MP",
					cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
					ram: "4 GB",
					rom: "64 GB",
					giaBan: 7000000,
					hinhAnh: "https://www.giztop.com/media/catalog/product/cache/dc206057cdd42d7e34b9d36e347785ca/m/e/meizu_16xs-1.jpg",
				},

				{
					maSP: 3,
					tenSP: "Iphone XS Max",
					manHinh: 'OLED, 6.5", 1242 x 2688 Pixels',
					heDieuHanh: "iOS 12",
					cameraSau: "Chính 12 MP & Phụ 12 MP",
					cameraTruoc: "7 MP",
					ram: "4 GB",
					rom: "64 GB",
					giaBan: 20000000,
					hinhAnh: "https://www.xtmobile.vn/vnt_upload/product/12_2019/thumbs/600_600_600_600_xs_max_gold_800x800_3_1_1.jpg",
				},
			],
			productCarts: [],
		};
	}
	addToCart = (product) => {
		let productCart = {
			...product,
			quantity: 1,
		};
		let updateCarts = [...this.state.productCarts];
		let index = updateCarts.findIndex((sp) => sp.maSP === productCart.maSP);
		if (index !== -1) {
			updateCarts[index].quantity += 1;
		} else {
			updateCarts.push(productCart);
		}
		this.setState({ productCarts: updateCarts });
		console.log(product);
	};
	updateCarts = () => {};
	deleteCart = (maSP) => {
		let updateCarts = [...this.state.productCarts];
		let index = updateCarts.findIndex((sp) => sp.maSP === maSP);
		if (index !== -1) {
			updateCarts.splice(index, 1);
		}
		this.setState({ productCarts: updateCarts });
	};
	componentDidMount(){
		const cart = localStorage.getItem('productCarts')
		if(cart){
			this.setState({productCarts: JSON.parse(cart)})
		}
	}
	componentDidUpdate(prevProps, prevState) {
		// KIEM TRA STATE GIO HANG THAY DOI
		// so sanh dia chi vung nho
		// const products = [...productCarts];
		if (this.state.productCarts !== prevState.productCarts) {
			localStorage.setItem("productCarts", JSON.stringify(this.state.productCarts));
		}
	}
	render() {
		let quantity = this.state.productCarts.reduce((cur, ac, index) => {
			return (cur += ac.quantity);
		}, 0);
		return (
			<div className="container">
				<h1>Product Carts</h1>
				<h3 style={{ color: "red", cursor: "pointer", textAlign: "right" }} data-toggle="modal" data-target="#modelId">
					Cart <span>({quantity})</span>
				</h3>
				<ProductList addToCart={this.addToCart} products={this.state.products}></ProductList>
				<Cart deleteCart={this.deleteCart} productCarts={this.state.productCarts}></Cart>
			</div>
		);
	}
}
