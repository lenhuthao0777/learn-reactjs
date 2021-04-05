import { GET_COURSE } from "../constants/coursesConstants";
import axios from "axios";
export const getCourse = () => {
	return async (dispatch) => {
		const { data } = await axios({
			method: "GET",
			url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP08",
		});
		dispatch({
			type: GET_COURSE,
			payload: { data },
		});
	};
	// return {
	// 	type: GET_COURSE,
	// 	payload: { data },
	// };
};
