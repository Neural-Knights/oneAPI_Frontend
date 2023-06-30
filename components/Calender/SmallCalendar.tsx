import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { getMonth } from "../Utils/UtilCalander";
import { useLog } from "@/context/Landing";
import Image from "next/image";

export default function SmallCalendar() {
	const [currentMonthIdx, setCurrentMonthIdx] = useState(
		dayjs().month()
	) as any;
	const [currentMonth, setCurrentMonth] = useState(getMonth());
	useEffect(() => {
		setCurrentMonth(getMonth(currentMonthIdx));
	}, [currentMonthIdx]);

	const { monthIndex, setSmallCalendarMonth, setDaySelected, daySelected } =
		useLog() as any;

	useEffect(() => {
		setCurrentMonthIdx(monthIndex);
	}, [monthIndex]);

	function handlePrevMonth() {
		setCurrentMonthIdx(currentMonthIdx - 1);
	}
	function handleNextMonth() {
		setCurrentMonthIdx(currentMonthIdx + 1);
	}
	function getDayClass(day: any) {
		const format = "DD-MM-YY";
		const nowDay = dayjs().format(format);
		const currDay = day.format(format);
		const slcDay = daySelected && daySelected.format(format);
		if (nowDay === currDay) {
			return "bg-0-Dsecondary rounded-full text-black";
		} else if (currDay === slcDay) {
			return "bg-0-Lprimary rounded-full text-black font-bold";
		} else {
			return "";
		}
	}
	return (
		<div className="mt-9">
			<header className="flex justify-between">
				<p className="text-white font-bold">
					{dayjs(new Date(dayjs().year(), currentMonthIdx)).format("MMMM YYYY")}
				</p>
				<div>
					<button onClick={handlePrevMonth} className="mx-4 mt-2">
						<span className="cursor-pointer">
							<Image src="/leftarrow.svg" alt="arrows" width={15} height={15} />
						</span>
					</button>
					<button onClick={handleNextMonth} className="mx-4 mt-2">
						<span className="cursor-pointer">
							<Image
								src="/rightarrow.svg"
								alt="arrows"
								width={15}
								height={15}
							/>
						</span>
					</button>
				</div>
			</header>
			<div className="grid grid-cols-7 grid-rows-6">
				{currentMonth[0].map((day: any, i: number) => (
					<span key={i} className="text-sm text-white py-1 text-center">
						{day.format("dd").charAt(0)}
					</span>
				))}
				{currentMonth.map((row: any, i: number) => (
					<React.Fragment key={i}>
						{row.map((day: any, idx: number) => (
							<button
								key={idx}
								onClick={() => {
									setSmallCalendarMonth(currentMonthIdx);
									setDaySelected(day);
								}}
								className={`py-1 w-full text-white ${getDayClass(day)}`}
							>
								<span className="text-sm">{day.format("D")}</span>
							</button>
						))}
					</React.Fragment>
				))}
			</div>
		</div>
	);
}
