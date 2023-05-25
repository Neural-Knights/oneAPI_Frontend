import Image from "next/image";
import React from "react";

const Features = () => {
	return (
		<div className="font-popsans" id="features">
			<h1 className="lg:text-[55px] text-lg font-bold text-center">
				Why we are different from others?
			</h1>
			<div className="flex justify-center lg:pt-16 pt-4 pb-6">
				<Image
					src="/edu.svg"
					width={"800"}
					height="350"
					className="flex justify-center lg:w-[85%] lg:h-[50%] w-[90%] h-[60%]"
					alt=""
				/>
			</div>
		</div>
	);
};

export default Features;
