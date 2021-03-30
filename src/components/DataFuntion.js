import React from "react";

export const DataFuntion = () => {
	
	const xuatThongTin = (fullName, age) => (
		<div>
			<p>{fullName}</p>
			<p>{age}</p>
		</div>
	);
	return <div>
        {xuatThongTin('tai', 19)}
    </div>;
};
