import { useLog } from "@/context/Landing";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CalendarHeader() {
	const { monthIndex, setMonthIndex } = useLog() as any;
	function handlePrevMonth() {
		setMonthIndex(monthIndex - 1);
	}
	function handleNextMonth() {
		setMonthIndex(monthIndex + 1);
	}
	function handleReset() {
		setMonthIndex(
			monthIndex === dayjs().month()
				? monthIndex + Math.random()
				: dayjs().month()
		);
	}
	return (
		<header className="px-3 py-2 flex items-center z-50 bg-0-Dprimary">
			<Link href="/">
				<Image
					src="/logolight.svg"
					width={70}
					height={70}
					alt="calendar"
					className="mr-20 w-12 h-12"
				/>
			</Link>
			<button
				onClick={handleReset}
				className="border rounded-3xl text-white py-2 px-6 mr-5"
			>
				Today
			</button>
			<button onClick={handlePrevMonth} className="mx-4">
				<span className="cursor-pointer rotate-90">
					<Image src="/leftarrow.svg" alt="arrows" width={15} height={15} />
				</span>
			</button>
			<button onClick={handleNextMonth} className="mx-4">
				<span className="cursor-pointer">
					<Image src="/rightarrow.svg" alt="arrows" width={15} height={15} />
				</span>
			</button>
			<h2 className="ml-4 text-xl text-white font-bold">
				{dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
			</h2>
		</header>
	);
}
