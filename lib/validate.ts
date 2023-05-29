import toast from "react-hot-toast";

export function loginvalid(values: any) {
	let error: any = {};

	if (!values.email) {
		error.email = toast.error("Required Field");
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		error.email = toast.error("Invalid Details");
	}

	if (values === "admin") {
		error = toast.error("Nice try!");
	}

	if (!values.password) {
		error.password = toast.error("Required Field");
	} else if (values.password.length < 8) {
		error.password = toast.error("Worng Credentials");
	} else if (values.password.includes(" ")) {
		error.password = toast.error("Worng Credentials");
	}
	return error;
}

export function registerValidate(values: any) {
	type err = {
		name?: string;
		email?: string;
		password?: string;
	};
	const error: err = {};

	if (!values.name) {
		error.name = toast.error("Required");
	} else if (values.name.includes(" ")) {
		error.name = toast.error("Invalid Name");
	}

	if (!values.email) {
		error.email = toast.error("Required");
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		error.email = toast.error("Invalid Details");
	}

	if (!values.password) {
		error.password = toast.error("Required");
	} else if (values.password.length < 8) {
		error.password = toast.error("Must be greater than 8");
	} else if (values.password.includes(" ")) {
		error.password = toast.error("Invalid Details");
	}

	return error;
}
