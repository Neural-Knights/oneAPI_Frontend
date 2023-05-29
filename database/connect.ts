import mongoose from "mongoose";

const connectDB = async () => {
	const uri = process.env.NEXT_PUBLIC_MONGODB_URI as string;
	try {
		const { connection } = await mongoose.connect(uri);
		if (connection.readyState == 1) {
			console.log("MongoDB Connected");
			return Promise.resolve(true);
		}
	} catch (error) {
		return Promise.reject(error);
	}
};

export default connectDB;
