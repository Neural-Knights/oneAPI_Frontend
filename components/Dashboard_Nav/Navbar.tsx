import React from "react";
import { signOut } from "next-auth/react";

const Navbar = () => {
	const out = () => {
		signOut();
	};
	return (
		<div>
			<h1>Dashboard</h1>
			<div onClick={out}>Logout</div>
		</div>
	);
};

export default Navbar;
