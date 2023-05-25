import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
	const foot = [
		{
			title: "Platform",
			links: [
				{ name: "Android", href: "/" },
				{ name: "iOS", href: "/" },
				{ name: "Web", href: "/" },
			],
		},
		{
			title: "About",
			links: [
				{ name: "About Us", href: "#about" },
				{ name: "Contact", href: "#contact" },
				{ name: "Features", href: "#features" },
			],
		},
		{
			title: "Utility Page",
			links: [
				{ name: "SignUp", href: "/signup" },
				{ name: "SignIn", href: "/signin" },
			],
		},
		{
			title: "Get In Touch",
			links: [
				{
					name: "mustafaazad533@gmail.com",
					href: "mailto:mustafaazad533@gmail.com",
				},
				{ name: "+91 8888888888", href: "#" },
			],
		},
	];
	return (
		<>
			<Image
				src="/f2.svg"
				alt="footer neural knights"
				width={100}
				height={100}
				className="w-full h-auto overflow-x-hidden"
			/>
			<div className="flex flex-col lg:flex-row justify-around bg-0-Lprimary font-popsans pl-8 lg:pl-0">
				<Image
					src="/logo.svg"
					alt="logo neural knights"
					className="w-fit h-fit mt-8"
					width={100}
					height={100}
				/>
				{foot.map((f, i) => (
					<div key={i} className="flex flex-col mt-8 space-y-2">
						<h1 className="text-2xl font-black mv-3">{f.title}</h1>
						{f.links.map((l, j) => (
							<Link
								href={l.href}
								key={j}
								className={`hover:border-b-2 border-black text-gray-800 hover:text-black`}
							>
								{l.name}
							</Link>
						))}
					</div>
				))}
			</div>
			<div className="bg-0-Lprimary py-6 flex flex-col lg:flex-row space-y-4 lg:space-y-0 justify-between items-center pt-10">
				<p className="lg:ml-20 ml-8 text-gray-900 items-center flex">
					© 2023 Neural Knights. All rights reserved.
				</p>
				<div className="flex items-center space-x-4 lg:mr-20">
					<Link href="www.linkedin.com">
						<Image src="/linkedin.svg" alt="linkedin" width={25} height={25} />
					</Link>
					<Link href="www.facebook.com">
						<Image src="/facebook.svg" alt="facebook" width={25} height={25} />
					</Link>
					<Link href="www.instagram.com">
						<Image
							src="/instagram.svg"
							alt="instagram"
							width={25}
							height={25}
						/>
					</Link>
					<Link href="www.twitter.com">
						<Image src="/twitter.svg" alt="twitter" width={25} height={25} />
					</Link>
				</div>
			</div>
		</>
	);
};

export default Footer;
