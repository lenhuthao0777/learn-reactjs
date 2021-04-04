import React from "react";
import { useSelector, useDispatch } from "react-redux";

function Count() {
	const count = useSelector(state => state.CartReducer);
    const color = useSelector(state => state.ColorReducer);
    const dispatch = useDispatch()
    console.log(color)
	const tangBienDem = () => {
		const action = {
			type: "up",
		};
		dispatch(action);
	};
    const handelColor =(e)=>{
        const action ={
            type:"CHANGE_COLOR",
            payload: e.target.value,
        }
        dispatch(action);
    }
	return (
		<div>
			<button onClick={tangBienDem}>+</button>
			<p>{count}</p>
			<button>-</button>
            <h1 style={{color: {color}}}>{color}</h1>
            <div className="form-group">
              <select className="form-control" onChange={handelColor}>
                <option value="red">red</option>
                <option value="blue">blue</option>
                <option value="green">green</option>           
              </select>
            </div>
		</div>
	);
}

export default Count;
