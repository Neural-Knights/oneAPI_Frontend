import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

type body = {
	text: string;
};

export default async function chatbot(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		const { text }: body = await req.body;
		const response: any = await axios.post("http://127.0.0.1:5000/chatbot", {
			text: text,
		});
		res.status(200).json(response.data);
	} catch (error) {
		console.error(error);
	}
}
