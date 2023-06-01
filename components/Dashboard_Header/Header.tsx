import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import React from "react";

type nav = {
	link: string;
	img: string;
	name: string;
};

const Header = () => {
	const router: NextRouter = useRouter();
	const out: () => void = () => {
		signOut();
	};
	const { pathname } = router;
	const nav = [
		{
			link: "/",
			img: "/home.svg",
			name: "Home",
		},
		{
			link: "/resources",
			img: "/resources.svg",
			name: "Resources",
		},
		{
			link: "/community",
			img: "/community.svg",
			name: "Community",
		},
		{
			link: "/live",
			img: "/live.svg",
			name: "Live",
		},
		{
			link: "/discussion",
			img: "/discussion.svg",
			name: "Discussion",
		},
		{
			link: "/calender",
			img: "/calender.svg",
			name: "Calender",
		},
	];
	return (
		<aside className="flex items-center h-[85vh] w-40 -ml-1">
			<div className="flex w-20 mx-auto flex-col items-center justify-center space-y-10 py-6">
				<div className="space-y-32 rounded-md">
					<ul>
						{nav.map((item: nav, i: number) => (
							<li key={i} className="p-5">
								<Link
									href={item.link}
									className={`flex items-center justify-center rounded-md hover:opacity-100 border-b-2 pb-2 border-0-white ${
										item.link !== pathname && "opacity-70 border-none pb-1"
									}`}
								>
									<Image
										src={item.img}
										alt={item.name}
										width={35}
										height={35}
									/>
								</Link>
							</li>
						))}
					</ul>
					<div className="flex items-center justify-center">
						<div
							onClick={out}
							className="flex items-center cursor-pointer justify-center rounded-md hover:opacity-100"
						>
							<Image src="/logout.svg" alt="logout" width={35} height={35} />
						</div>
					</div>
				</div>
			</div>
		</aside>
	);
};

export default Header;
