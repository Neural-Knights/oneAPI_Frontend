import Header from "@/components/Dashboard_Header/Header";
import Navbar from "@/components/Dashboard_Header/Navbar";
import Resources from "@/components/Dashboard_Resources/Resources";
import React from "react";

const resources = () => {
	return (
		<div>
			{/* <Navbar /> */}
			<div className="fixed bg-0-Dprimary">
				<Header />
			</div>
			<Resources />
		</div>
	);
};

export default resources;
