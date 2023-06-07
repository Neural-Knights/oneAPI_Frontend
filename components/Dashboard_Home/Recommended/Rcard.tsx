import Image from "next/image";
import Link from "next/link";
import React from "react";

type rcard = {
	img: string;
	title: string;
	link: string;
	rating: number;
};

const Rcard = ({ img, title, link, rating }: rcard) => {
	const rate = (rating * 100).toFixed(1);
	return (
		<Link href={link}>
			<div className="rounded-2xl bg-white w-fit mt-3">
				<div className="bg-[#D7EFEF] rounded-2xl w-fit">
					<Image
						src={img}
						className="rounded-3xl w-[200px] h-[95px] object-cover"
						alt="machine learning"
						width={200}
						height={95}
					/>
				</div>
				<h2 className="font-bold max-w-[12rem] ml-2 mt-2 pb-2 text-sm">
					{title}
				</h2>
				<div className="text-xs text-0-gray font-medium flex ml-2 pb-2">
					Course Rating : <p className="font-extrabold pl-1">{rate}%</p>{" "}
				</div>
			</div>
		</Link>
	);
};

export default Rcard;
