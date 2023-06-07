import React, { useState } from "react";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { useLog } from "@/context/Landing";

interface detail {
	name: string;
	image: string;
}

const Navbar = () => {
	const out = () => {
		signOut();
	};
	const [show, setShow] = useState<boolean>(false);
	const { image, name } = useLog() as detail;
	return (
		<header className="flex fixed w-full items-center justify-between px-2">
			<div className="flex items-center pl-8">
				<Image
					src={"/logolight.svg"}
					alt="neural logo"
					className=""
					width={60}
					height={60}
				/>
				{/* search field */}
				<div className="ml-10 flex items-center bg-0-white rounded-3xl">
					<input
						type="text"
						placeholder="Search"
						className="bg-0-white placeholder:text-sm placeholder:text-0-gray rounded-full w-64 h-9 pl-4 pr-8 py-2 outline-none"
					/>
					<Image
						src="/search.svg"
						alt="search"
						width={18}
						height={18}
						className="relative -left-4"
					/>
				</div>
			</div>

			{/* User Profile and Menu */}
			<div className="pr-8">
				<button
					type="button"
					onClick={() => setShow(!show)}
					className="w-28 h-12 overflow-hidden flex items-center justify-between rounded-full"
				>
					<Image
						src={typeof image == undefined ? "/logolight.svg" : image}
						alt={typeof name == undefined ? "neural logo" : name}
						className="w-8 h-8 rounded-full ml-5"
						width={60}
						height={60}
					/>
					<Image
						src="/arrow.svg"
						alt="arrow"
						width={16}
						height={16}
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
							src={typeof image == undefined ? "/logolight.svg" : image}
							alt={typeof name == undefined ? "neural logo" : name}
							width={40}
							height={40}
							className="h-9 w-9 rounded-full"
						/>
						<div className="font-medium">
							{typeof name == undefined ? "neural knights" : name}
						</div>
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
