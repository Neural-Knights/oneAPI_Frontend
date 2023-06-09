import Image from "next/image";
import React from "react";

type detail = {
	img: string;
	title: string;
	teacher_name: string;
	teacher_img: string;
	time: string;
};

const Scard = ({ img, title, teacher_name, teacher_img, time }: detail) => {
	return (
		<div className="flex space-x-4 bg-white w-[96%] rounded-3xl">
			<Image
				src={img}
				alt="image cards"
				width={115}
				height={95}
				className="w-[115px] h-[95px] object-cover rounded-2xl"
			/>
			<div className="flex flex-col p-2">
				<h2 className="font-black text-lg truncate max-w-[15rem]">{title}</h2>
				<div className="flex space-x-4 mt-2 items-center">
					<Image
						src={teacher_img}
						alt={teacher_name}
						width={30}
						className="rounded-full"
						height={30}
					/>
					<p className="font-semibold text-0-gray">{teacher_name}</p>
				</div>
				<div className="flex justify-between mt-4">
					<h3 className="font-semibold text-0-gray">Online Class</h3>
					<p className="mr-4 font-semibold text-0-gray">{time} </p>
				</div>
			</div>
		</div>
	);
};

export default Scard;
