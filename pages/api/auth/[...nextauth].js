import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import TwitterProvider from "next-auth/providers/twitter";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "@/lib/mongodb";
import Users from "@/model/registration";
import connectDB from "@/database/connect";
import { compare } from "bcryptjs";
import { toast } from "react-hot-toast";

export const authOptions = {
	adapter: MongoDBAdapter(clientPromise),
	providers: [
		GoogleProvider({
			clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENTID,
			clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET,
		}),
		TwitterProvider({
			clientId: process.env.NEXT_PUBLIC_TWITTER_CLIENTID,
			clientSecret: process.env.NEXT_PUBLIC_TWITTER_SECRET,
		}),
		CredentialsProvider({
			name: "Credentials",
			async authorize(credential, req) {
				connectDB().catch((error) => {
					error: {
						("Connection Failed ...");
					}
				});
				const user = await Users.findOne({
					email: credential.email,
				});
				if (!user) {
					toast.error("No User Found in Database");
					throw new Error("No User Found in Database");
				}
				if (user.email === credential.email) {
					const checkpass = await compare(credential.password, user.password);
					if (!checkpass) {
						toast.error("Invalid Details");
						throw new Error("Invalid Details");
					} else {
						return user;
					}
				} else {
					toast.error("Invalid Details");
					throw new Error("Invalid Details");
				}
			},
		}),
	],
	// callbacks: {
	// 	async jwt({ token, user }) {
	// 		return { ...token, ...user };
	// 	},

	// 	async session({ session, token }) {
	// 		session.user = token;
	// 		return session;
	// 	},
	// },
	secret: process.env.NEXT_PUBLIC_SECRET,
};
export default NextAuth(authOptions);
