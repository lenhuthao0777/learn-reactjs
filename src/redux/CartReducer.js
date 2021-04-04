// const stateCart = {
// 	cart: [{ quantity: 0 }],
// };

export const CartReducer = (state = 0, action) => {
	console.log(action)
	switch (action.type) {
		case "up":
			return state + 1;

		default:
			return state
	}

};
