import * as Yup from "yup";
import { field } from "./types";


export const createSchema = (validations: field[]) => {
	let shape: any = {};
	for (let i = 0; i < validations.length; i++) {
		let _type = validations[i].type;
		let _placeholder = validations[i].placeholder;
		let _key = validations[i].name;
		let _label = validations[i].label;
		let _required = validations[i].required;
		let _req_msg = validations[i].req_msg;
		let _err_msg = validations[i].err_msg;
		let _min_date = validations[i].min_date;
		let _max_date = validations[i].max_date;
		let _matches = validations[i].matches;
		let _min = validations[i].min;
		let _max = validations[i].max;

		if (_type === "email") {
			shape[_key] = Yup.string().email(
				_err_msg || "Please provide a valid email address"
			);
		
		} else if (_type === "date") {
			shape[_key] = Yup.date();
			if (_min_date) shape[_key] = shape[_key].min(_min_date);
			if (_max_date) shape[_key] = shape[_key].max(_max_date);
		} else if (_type === "checkbox") {
			shape[_key] = Yup.array();
		} else {
			shape[_key] = Yup.string();
			if (_matches)
				shape[_key] = shape[_key].matches(
					_matches,
					_err_msg || "Invalid value"
				);
		}
		if (_required) {
			shape[_key] = shape[_key].required(
				_req_msg ||
					"The" +
						` field ${
							_label || _placeholder || _key
						} is required`.toLowerCase()
			);
		}
		if (_key === "cpassword") {
			shape["cpassword"] = Yup.mixed().test(
				"match",
				"password and confirm- password does not match",
				function (password) {
					return password === this.parent.password;
				}
			);
		}
		const phoneRegExp =/^[- +()]*[0-9][- +()0-9]*$/
		if (_key === "num") {
			shape[_key] =Yup.string()
			.matches(phoneRegExp, 'Phone number is not valid')
			.min(5, "to short")
			.max(15, "to long")
			
			
		}
		
		const pincodeRegExp =/^([0-9]{5})(?:[-\s]*([0-9]{4}))?$/

		if(_key==="Code"){
			shape[_key]=Yup.string()
			.matches(pincodeRegExp,'wrong Credentials')
			.min(5)
			.max(10)
		}

		if(_type==="password"){
			shape[_key]=Yup.string().required('No password provided.') 
			.min(4, 'Password is too short - should be 4 chars minimum.')
			.matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
		}
		
	}
	return Yup.object().shape(shape);
};
