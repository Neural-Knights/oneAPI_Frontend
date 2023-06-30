import React, { useState } from "react";
import Image from "next/image";
import { useLog } from "@/context/Landing";

export default function CreateEventButton() {
	const { setShowEventModal } = useLog() as any;
	return (
		<button
			onClick={() => setShowEventModal(true)}
			className="border p-2 rounded-full flex items-center text-white"
		>
			<Image
				src="/plus.svg"
				width={30}
				height={30}
				alt="create_event"
				className="w-4 h-4 ml-2"
			/>
			<span className="pl-3 pr-7"> Create</span>
		</button>
	);
}
