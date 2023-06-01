import React, { useState } from "react";
import { signOut } from "next-auth/react";
import Image from "next/image";

const Navbar = () => {
	const out = () => {
		signOut();
	};
	const [show, setShow] = useState<boolean>(false);
	return (
		<header className="flex w-full items-center justify-between px-2">
			<div className="flex items-center pl-8">
				<Image
					src="/logolight.svg"
					alt="neural logo"
					className=""
					width={82}
					height={82}
				/>
				{/* search field */}
				<div className="ml-10 flex items-center bg-0-white rounded-3xl">
					<input
						type="text"
						placeholder="Search"
						className="bg-0-white placeholder:text-[#777] rounded-full w-64 h-10 pl-4 pr-8 py-2 outline-none"
					/>
					<Image
						src="/search.svg"
						alt="search"
						width={20}
						height={20}
						className="relative -left-4"
					/>
				</div>
			</div>
			<div className="pr-8">
				<button
					type="button"
					onClick={() => setShow(!show)}
					className="w-28 h-12 overflow-hidden flex items-center justify-between rounded-full"
				>
					<Image
						src="/logolight.svg"
						alt="neural logo"
						className="w-10 h-10 rounded-full ml-3"
						width={60}
						height={60}
					/>
					<Image
						src="/arrow.svg"
						alt="arrow"
						width={20}
						height={20}
						className="mr-4"
					/>
				</button>

				<div
					className={` ${
						show ? "scale-100" : "scale-0 -translate-y-20 translate-x-14"
					} ease-in-out duration-150 absolute right-2 mt-1 w-48 divide-y divide-gray-200 rounded-md border border-gray-200 bg-white shadow-md`}
				>
					<div className="flex items-center space-x-2 p-2">
						<Image
							src="/logo.svg"
							alt="plchldr.co"
							width={40}
							height={40}
							className="h-9 w-9 rounded-full"
						/>
						<div className="font-medium">Neural Knights</div>
					</div>

					<div className="flex flex-col space-y-3 p-2">
						<a href="#" className="transition hover:text-blue-600">
							My Profile
						</a>
						<a href="#" className="transition hover:text-blue-600">
							Settings
						</a>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
