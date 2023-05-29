import Image from "next/image";
import React from "react";

const Login_right = () => {
	return (
		<div className="lg:m-6 m-3 bg-0-Lprimary rounded-2xl space-y-40 font-popsans text-5xl font-bold flex flex-col justify-center items-center">
			<h2 className="py-8 mt-6 ml-3 lg:ml-0">
				Login & Dive Into{" "}
				<p className="font-poly font-normal py-2">the Limitless</p> Learning!
			</h2>
			<Image
				src="/hands.svg"
				className="lg:w-[60%] h-auto"
				alt="education"
				width={200}
				height={200}
			/>
		</div>
	);
};

export default Login_right;
