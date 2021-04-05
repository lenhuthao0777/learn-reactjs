import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCourse } from "../redux/action/CourseAction";
function Courses() {
	const [courses, setCourses] = useState([]);
	const { data } = useSelector((state) => state.CoursesReducer);
	const dispatch = useDispatch();
	useEffect(() => {
		// async function fetchData() {
		// 	const { data } = await axios({
		// 		method: "GET",
		// 		url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP08",
		// 	});
		// 	console.log(data);
		// 	dispatch(getCourse(data));
		// }
		// fetchData();
		dispatch(getCourse());
	}, []);
	return (
		<div className="container">
			<div className="row">
				{data.map((item) => (
					<div className="col-xl-4" key={item.maKhoaHoc}>
						<div className="card">
							<img className="card-img-top" src={item.hinhAnh} alt="" />
							<div className="card-body">
								<h4 className="card-title">Title</h4>
								<p className="card-text">{item.moTa}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Courses;
