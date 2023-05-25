import Image from "next/image";
import React, { useRef, useState } from "react";

const Contact = () => {
	const [open, setOpen] = useState<boolean>(true);
	const namee: any = useState({ namee: "" });
	const email: any = useState({ email: "" });
	const message: any = useState({ message: "" });
	const cont = () => {
		setOpen(!open);
		alert("Your message has been sent. We will contact you soon.");
	};
	return (
		<div
			className="grid lg:grid-cols-2 grid-cols-1 mt-6 font-popsans"
			id="contact"
		>
			<div className="lg:ml-14 ml-2">
				<h2 className="font-semibold lg:text-7xl text-3xl">Contact</h2>
				<p className="lg:text-2xl max-w-lg lg:mt-4 mt-1 ml-2">
					We bring ideas to life by combining years of experiences of our very
					talented team.
				</p>
				<Image
					src="/f.svg"
					alt="contact"
					className=""
					width="500"
					height="500"
				/>
			</div>
			{open && (
				<form
					action="https://formsubmit.co/hacksapne@gmail.com"
					className="flex flex-col lg:justify-center lg:items-center space-y-8 w-full"
				>
					<div className="flex flex-col justify-center mx-4 lg:mx-0 lg:flex-none">
						<h2 className="font-semibold lg:text-2xl text-gray-700 ml-1 mb-1">
							Name
						</h2>
						<input
							type="text"
							name="namee"
							required
							id=""
							className="border-2 border-gray-500 rounded-[22px] p-3 pl-4 bg-0-white lg:pr-52 pr-[28%]"
						/>
					</div>
					<div className="flex flex-col justify-center mx-4">
						<h2 className="font-semibold lg:text-2xl text-gray-700 ml-1 mb-1">
							Email
						</h2>
						<input
							type="text"
							name="email"
							required
							id=""
							className="border-2 border-gray-500 rounded-[22px] p-3 pl-4 bg-0-white lg:pr-52 pr-[28%]"
						/>
					</div>
					<div className="flex flex-col justify-center mx-4">
						<h2 className="font-semibold lg:text-2xl text-gray-700 ml-1 mb-1">
							Message
						</h2>
						<input
							type="text"
							name="message"
							required
							id=""
							className="border-2 border-gray-500 rounded-[22px] p-3 pl-4 bg-0-white lg:pr-52 pr-[28%] pb-36"
						/>
					</div>
					<button
						onClick={cont}
						disabled={namee == "" || email.includes("@gmail.com" || ".edu.in")}
						className="rounded-[22px] py-3 lg:px-[12rem] mx-4 lg:mx-0 px-24 bg-black text-0-white"
					>
						Send
					</button>
				</form>
			)}
		</div>
	);
};

export default Contact;
