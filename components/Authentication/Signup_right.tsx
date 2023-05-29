import Image from "next/image";
import React from "react";

const Signup_right = () => {
	return (
		<div className="lg:m-6 m-3 bg-0-Lprimary rounded-2xl space-y-40 font-popsans text-5xl font-bold flex flex-col justify-center items-center">
			<h2 className="py-8 mt-6 ml-3 lg:ml-0">
				Start Your{" "}
				<p className="font-poly font-normal py-2">Incredible Journey</p> By
				Signing Up Now
			</h2>
			<Image
				src="/hands.svg"
				alt="education"
				className="lg:w-[60%] h-auto"
				width={200}
				height={200}
			/>
		</div>
	);
};

export default Signup_right;
