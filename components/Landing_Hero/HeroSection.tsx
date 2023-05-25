import Image from "next/image";
import React from "react";

const HeroSection = () => {
	return (
		<div className="font-popsans">
			<div className="flex justify-between lg:mx-24 pl-6 lg:pl-0 pt-16">
				<div className="lg:max-w-[530px] max-w-full lg:text-[45px] text-2xl font-bold">
					<h2 className="lg:leading-[70px] leading-10">
						{" "}
						Expand Your
						<p className="italic lg:text-[42px] text-2xl lg:py-3 bg-0-black font-medium text-0-white px-6 rounded-3xl items-center flex w-fit">
							Horizons
						</p>
						Learn from Anywhere
					</h2>
				</div>
				<div className="max-w-[440px] text-3xl font-semibold items-center space-y-6 pt-2 lg:flex lg:flex-col hidden">
					<h2 className="bg-0-Lprimary p-2 px-3 rounded-3xl leading-[42px]">
						Understand The Concepts Faster With Modern learning Techniques
					</h2>
					<button className="flex items-center justify-center w-full text-xl font-bold">
						<h3 className="border-2 flex border-black rounded-3xl p-2 px-4 hover:bg-0-black hover:text-0-white w-fit">
							Enroll Now{" "}
							<Image
								src="/arrow1.svg"
								width="12"
								height={16}
								className="ml-2 fill-black hover:text-0-Lprimary"
								alt="Arrow Nural knights"
							/>
						</h3>
					</button>
				</div>
			</div>
			<div className="flex justify-center">
				<Image src="/lan.svg" alt="" width={610} height={460} />
			</div>
		</div>
	);
};

export default HeroSection;
