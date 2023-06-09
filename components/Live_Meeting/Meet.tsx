import Image from "next/image";
import React from "react";

const Meet = () => {
	return (
		<div className="grid grid-cols-2 h-[100vh] w-full overflow-hidden">
			<div className=""></div>
			<div className="flex justify-end">
				<Image
					src="/meet.png"
					alt="meeting photo"
					width={400}
					height={500}
					className="w-max -mt-4 h-max object-cover"
				/>
			</div>
		</div>
	);
};

export default Meet;
