import React, { Component } from "react";

export default class Cars extends Component {
    state = {
        img: "./img/imgBlackCar.jpg",    
    }
    handelCars = (value) => {
        // switch(value){
        //     case 'red':
        //         this.setState({img: "./img/imgRedCar.jpg"})
        //         break
        //     case 'silver':
        //         this.setState({img: "./img/imgSilverCar.jpg"})
        //         break
        //     case 'black':
        //         this.setState({img: "./img/imgBlackCar.jpg"})
        //         break
        // }
        const cars = {
            red: "./img/imgRedCar.jpg",
            silver: "./img/imgSilverCar.jpg",
            black: "./img/imgBlackCar.jpg",
        }
        this.setState({
            img: cars[value]
        })
		
	};
    
	render() {
		return (
			<>
				<div className="container d-flex">
                    <div className="col-xl-6" id="Caritem">
                        <img src={this.state.img} alt=""/>
                    </div>
                    <div className="col-xl-6">
                        <div className="d-flex">
                            <button onClick={()=>this.handelCars("red")}>car red</button>
                            <button onClick={()=>this.handelCars("silver")}>car silver</button>
                            <button onClick={()=>this.handelCars("black")}>car black</button>
                        </div>
                    </div>
                </div>
			</>
		);
	}
}
