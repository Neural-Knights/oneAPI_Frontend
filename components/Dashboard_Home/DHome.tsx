import { useLog } from "@/context/Landing";
import React from "react";
import Recommend from "./Recommended/Recommend";
import Schedule from "./Schedule/Schedule";
import Linegraph from "./Graph/Linegraph";
import Chatbot from "./Chat/Chatbot";

type name = {
	name: string;
};

const DHome = () => {
	const { name } = useLog() as name;
	return (
		<div className="bg-0-Dsecondary overflow-hidden w-full flex flex-col lg:flex-row space-x-4 h-[90vh] lg:mt-[8vh] md:mt-[10vh] mr-3 rounded-3xl">
			<div className="w-[40%] h-full">
				<div className="ml-8 mt-4 space-y-1">
					<h1 className="font-bold text-2xl flex space-x-2">
						<p>Hello,</p> <p className="font-medium">{name}</p>
						<p>👋</p>
					</h1>
					<p className="font-medium text-0-gray max-w-[16rem]">
						what a nice day to learn something new
					</p>
				</div>
				<Recommend />
				<Schedule />
			</div>
			<div className="w-[80%] justify-center flex">
				<div className="w-[70%]">
					<div className="flex justify-between">
						<h2 className="text-xl font-bold ml-8 mt-4 text-0-gray">
							Your Progress
						</h2>
						{/* labels for chart  */}
						<div className="flex space-x-4 mt-4">
							<div className="flex space-x-2 items-center">
								<div className="w-1 h-1 bg-[#7016D0] rounded-full"></div>
								<p className="font-semibold text-xs text-0-gray">Completed</p>
							</div>
							<div className="flex space-x-2 items-center">
								<div className="w-1 h-1 bg-[#3FF0B9] rounded-full"></div>
								<p className="font-semibold text-xs text-0-gray">In Progress</p>
							</div>
							<div className="flex space-x-2 items-center">
								<div className="w-1 h-1 bg-[#ACA4BC] rounded-full"></div>
								<p className="font-semibold text-xs text-0-gray">Not Started</p>
							</div>
						</div>
					</div>
					<div className="h-[80vh]">
						<div className="h-fit">
							<Linegraph />
						</div>
						<Chatbot />
					</div>
				</div>
			</div>
		</div>
	);
};

export default DHome;
