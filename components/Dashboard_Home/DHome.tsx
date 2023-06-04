import { useLog } from "@/context/Landing";
import React from "react";
import Recommend from "./Recommended/Recommend";
import Schedule from "./Schedule/Schedule";
import Linegraph from "./Graph/Linegraph";

type name = {
	name: string;
};

const DHome = () => {
	const { name } = useLog() as name;
	return (
		<div className="bg-0-Dsecondary w-full flex space-x-4 h-[87vh] mr-3 rounded-3xl">
			<div className="w-[30rem] h-full">
				<div className="ml-8 mt-4 space-y-2">
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
					<div className="h-full">
						<div className="h-fit">
							<Linegraph />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DHome;
