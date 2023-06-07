import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

type body = {
	title: string;
};

export default async function recommendation(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		const { title }: body = await req.body;
		const response: any = await axios.post(
			"https://flask-api-or5d.onrender.com/recommend",
			{
				title: title,
			}
		);
		res.status(200).json(response.data);
	} catch (error) {
		res.status(500).send(error);
	}
}
