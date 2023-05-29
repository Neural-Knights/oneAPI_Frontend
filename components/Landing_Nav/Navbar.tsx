import { useLog } from "@/context/Landing";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface loginn {
	login: () => void;
	signup: () => void;
}

const Navbar = () => {
	const { login, signup } = useLog() as loginn;
	const nav = [
		{ name: "Home", link: "/authenticate" },
		{ name: "About", link: "/authenticate#about" },
		{ name: "Contact", link: "/authenticate#contact" },
	];
	const router = useRouter();
	return (
		<div className="lg:grid lg:grid-cols-3 mx-3 lg:mx-0 flex justify-between items-center pt-4 font-popsans">
			<div className="lg:flex hidden space-x-6 ml-8 font-bold">
				{nav.map((n, i) => (
					<Link href={n.link} key={i}>
						<h3
							className={`hover:bg-0-Lprimary p-1 rounded-3xl px-3 ${
								router.pathname === n.link ? "bg-0-Lprimary" : ""
							}`}
						>
							{n.name}
						</h3>
					</Link>
				))}
			</div>
			<div className="flex justify-center">
				<Link href="/" className="">
					<Image
						src="/logo.svg"
						width={90}
						height={45}
						className="lg:w-[131px] lg:h-[65]"
						alt="Neural Knights"
					/>
				</Link>
			</div>
			<div className="flex justify-end lg:mr-8 space-x-3 font-semibold">
				<button
					onClick={login}
					className="hover:bg-0-black lg:w-24 w-20 hover:text-0-white p-1 rounded-3xl text-sm lg:text-base px-3"
				>
					Login
				</button>
				<button
					onClick={signup}
					className="bg-0-black lg:w-24 w-20 hover:bg-0-white hover:border-2 text-0-white text-sm lg:text-base hover:text-black hover:border-black p-1 rounded-3xl px-3"
				>
					SignUp
				</button>
			</div>
		</div>
	);
};

export default Navbar;
