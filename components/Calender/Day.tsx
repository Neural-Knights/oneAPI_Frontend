import { useLog } from "@/context/Landing";
import dayjs from "dayjs";
import React, { useState, useEffect } from "react";

export default function Day({ day, rowIdx }: any) {
	const [dayEvents, setDayEvents] = useState([]);
	const {
		setDaySelected,
		setShowEventModal,
		filteredEvents,
		setSelectedEvent,
	} = useLog() as any;

	useEffect(() => {
		const events = filteredEvents.filter(
			(evt: any) => dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY")
		);
		setDayEvents(events);
	}, [filteredEvents, day]);

	function getCurrentDayClass() {
		return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
			? "bg-0-Dprimary text-white rounded-full w-7"
			: "";
	}
	return (
		<div className="border border-gray-200 flex flex-col">
			<header className="flex flex-col items-center">
				{rowIdx === 0 && (
					<p className="text-sm mt-1">{day.format("ddd").toUpperCase()}</p>
				)}
				<p className={`text-sm p-1 my-1 text-center  ${getCurrentDayClass()}`}>
					{day.format("DD")}
				</p>
			</header>
			<div
				className="flex-1 cursor-pointer"
				onClick={() => {
					setDaySelected(day);
					setShowEventModal(true);
				}}
			>
				{dayEvents.map((evt: any, idx) => (
					<div
						key={idx}
						onClick={() => setSelectedEvent(evt)}
						className={`bg-${evt.label}-200 p-1 mr-3 text-gray-600 font-bold text-sm rounded mb-1 truncate`}
					>
						{evt.title}
					</div>
				))}
			</div>
		</div>
	);
}
