import Navbar from "@/components/Dashboard_Header/Navbar";
import React from "react";
import type { NextPage, GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import Header from "@/components/Dashboard_Header/Header";

const Home: NextPage = ({ session }: any) => {
	if (session) {
		return (
			<div className="bg-0-Dprimary h-[100vh]">
				<Navbar />
				<div className="">
					<Header />
				</div>
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
