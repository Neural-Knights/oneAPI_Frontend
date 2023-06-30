import React, { useState } from "react";
import EventModal from "./EventModal";
import CalendarHeader from "./CalendarHeader";
import Month from "./Month";
import Sidebar from "./Sidebar";
import { useLog } from "@/context/Landing";
import { getMonth } from "../Utils/UtilCalander";
import Header from "../Dashboard_Header/Header";

const FinalCalendar = () => {
	const [currenMonth, setCurrentMonth] = useState(getMonth());
	const { monthIndex, showEventModal } = useLog() as any;
	return (
		<div>
			{showEventModal && <EventModal />}

			<div className="h-screen flex flex-col overflow-hidden">
				<CalendarHeader />
				<div className="flex flex-1">
					<div className="bg-0-Dprimary -mt-20">
						<Header />
					</div>
					<Month month={currenMonth} />
					<Sidebar />
				</div>
			</div>
		</div>
	);
};

export default FinalCalendar;
