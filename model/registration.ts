import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	image: {
		type: String,
	},
	role: {
		type: String,
		default: "Student",
	},
});

const Users = models.user || model("user", userSchema);

export default Users;
