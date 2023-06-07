import connectDB from "../../database/connect";
import Users from "../../model/registration";
import { hash } from "bcryptjs";

type handle = {
	name: string;
	email: string;
	password: string;
};

export default async function handler(req: any, res: any) {
	connectDB().catch((error) => res.json({ error: "Connection Failed . . . " }));

	if (req.method === "POST") {
		if (!req.body) {
			return res.status(404).json({ error: "Don't Have Form Data" });
		}
		const { name, email, password }: handle = req.body;

		// checking dublicate users
		const check = await Users.findOne({ email });
		console.log(check);
		if (check) return res.status(422).json({ message: "User Already Exists" });
		const hashPass: string = await hash(password, 12);
		const newUser = new Users({ name, email, password: hashPass });
		newUser.save();
		if (!newUser.save()) {
			return res.status(500).json({ message: "Something went wrong" });
		} else {
			return res.status(201).json({ message: "Registration done", newUser });
		}
	} else {
		res
			.status(500)
			.json({ message: "HTTP request is not valid only post accepted" });
	}
}
