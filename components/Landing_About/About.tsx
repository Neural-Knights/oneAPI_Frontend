import Image from "next/image";
import React from "react";

const About = () => {
	return (
		<div
			className="flex flex-col lg:flex-row lg:space-x-10 items-center bg-0-Lsecondary p-3 px-4 m-6 rounded-3xl"
			id="about"
		>
			<Image src="/layer1.svg" alt="About Image" width={480} height={350} />
			<div className="lg:pl-16">
				<Image
					src="/desc.svg"
					alt="Description"
					width={600}
					height={200}
					className="w-full h-auto mt-4 lg:mt-0"
				/>
				<p className="lg:text-2xl sm:text-3xl text-sm max-w-xl lg:leading-[30px] leading-4 mt-3 pb-2 lg:pb-0">
					We strive to create an interactive atmosphere in which students
					participate in thoughful two-way discussions.
				</p>
			</div>
		</div>
	);
};

export default About;
