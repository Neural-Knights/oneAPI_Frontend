import Image from "next/image";
import React from "react";

type rcard = {
	img: string;
	title: string;
};

const Rcard = ({ img, title }: rcard) => {
	return (
		<div className="rounded-2xl bg-white w-fit mt-3">
			<div className="bg-[#D7EFEF] rounded-2xl w-fit">
				<Image
					src={img}
					className="rounded-3xl"
					alt="machine learning"
					width={190}
					height={90}
				/>
			</div>
			<h2 className="font-bold max-w-[11rem] ml-3 mt-2 pb-2">{title}</h2>
		</div>
	);
};

export default Rcard;
