import React from "react";
import Scard from "./Scard";
import { useLog } from "@/context/Landing";

interface img {
	image: string;
}

const Schedule = () => {
	const { image } = useLog() as img;
	return (
		<div className="ml-8 mt-4">
			<h2 className="text-2xl font-semibold mb-2">Scheduled Today</h2>
			<div className="overflow-y-scroll h-[33vh] w-[28rem]">
				<Scard
					img={"/cattle.png"}
					title={"basic tea making class"}
					teacher_img={image}
					teacher_name={"jay Singh"}
					time={"2:00 PM"}
				/>
				<Scard
					img={"/cattle.png"}
					title={"basic tea making class"}
					teacher_img={image}
					teacher_name={"jay Singh"}
					time={"2:00 PM"}
				/>
			</div>
		</div>
	);
};

export default Schedule;
