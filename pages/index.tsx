import Navbar from "@/components/Dashboard_Header/Navbar";
import React from "react";
import type { NextPage, GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import Header from "@/components/Dashboard_Header/Header";
import DHome from "@/components/Dashboard_Home/DHome";
import Head from "next/head";

const Home: NextPage = ({ session }: any) => {
	if (session) {
		return (
			<>
				<Head>
					<title>Neural Knights</title>
					<meta
						name="description"
						content="A Student Learning Platform By Increasing Interactivity"
					/>
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<div className="bg-0-Dprimary max-h-[100vh] font-popsans">
					<Navbar />
					<div className="flex h-full">
						<Header />
						<DHome />
					</div>
				</div>
			</>
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
