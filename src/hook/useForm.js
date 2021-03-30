import React, { useState } from "react";
// customhook: giup lam viec voi form
export default function useForm(initialValues) {
	const [values, setValues] = useState(initialValues);
	const [errors, setErrors] = useState({});
	const handelChange = (e) => {
		const { name, value } = e.target;
		setValues((values) => ({ ...values, [name]: value }));
	};
	const handelBlur = (e) => {
		const { value, name } = e.target;
		if (!value) {
			setErrors((err) => ({...err, [name]: "error :(" }));
		}
	};
	return { values, errors, handelChange, handelBlur };
}
