import React, { Component } from "react";

export default class ProductDetail extends Component {
	render() {
		const { product } = this.props;
        if(!product) return null;
		return <div className="row">
            <div className="col-xl-4">
                <img src={product.hinhAnh} alt="" width="100%" height="100%"/>
            </div>
            <div className="col-xl-8">
                <h3>thong so ky thuat</h3>
                <p>man hinh: {product.manHinh}</p>
                <p>heDieuHanh: {product.heDieuHanh}</p>
                <p>camera: {product.cameraTruoc}</p>
                <p>camera: {product.cameraSau}</p>
                <p>man hinh: {product.manHinh}</p>
                <p>Ram: {product.ram}</p>
                <p>Dung luong: {product.rom}</p>
            </div>
        </div>;
	}
}
