import Navbar from "@/components/Dashboard_Nav/Navbar";
import React from "react";
import type { NextPage, GetServerSideProps } from "next";
import { getSession } from "next-auth/react";

const Home: NextPage = ({ session }: any) => {
	if (session) {
		return (
			<div>
				<Navbar />
			</div>
		);
	} else {
		return (
			<div>
				<h1 className="w-full h-full flex justify-center items-center">
					Sorry To Say <br /> Some Error Occured
				</h1>
			</div>
		);
	}
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
	const session = await getSession({ req });

	if (!session) {
		return {
			redirect: {
				destination: "/authenticate",
				permanent: false,
			},
		};
	}
	return {
		props: {
			session,
		},
	};
};

export default Home;
