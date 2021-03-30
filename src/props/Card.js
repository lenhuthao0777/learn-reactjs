import React from "react";

export default function Card({student}) {
	return (
		<div >
			<div > 
				<div className="card">
					<div className="card-header">Sinh Vien</div>
					<div className="card-body">
						<h4 className="card-title">Name:{student.fullName}</h4>
						<p className="card-text">age:{student.age}</p>
					</div>
					<div className="card-footer text-muted">Footer</div>
				</div>
			</div>
		</div>
	);
}
