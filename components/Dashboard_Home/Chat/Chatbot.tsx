import { useLog } from "@/context/Landing";
import Image from "next/image";
import React from "react";

type log = {
	name: string;
	image: string;
};

const Chatbot = () => {
	const { name, image } = useLog() as log;
	return (
		<div className="flex-1 p:2 sm:p-6 justify-between h-[50vh] flex flex-col">
			<div className="flex sm:items-center justify-between py-3 border-b-2 border-gray-200">
				<div className="relative flex items-center space-x-4">
					<div className="relative">
						<span className="absolute text-0-Dprimary right-0 bottom-0">
							<svg
								width="16px"
								height="16px"
								className="bg-0-white rounded-full"
							>
								<circle cx="8" cy="8" r="6" fill="currentColor"></circle>
							</svg>
						</span>
						<Image
							src="/chatbot.svg"
							width="40"
							height="40"
							alt=""
							className="w-8 sm:w-14 h-8 sm:h-14 rounded-full"
						/>
					</div>
					<div className="flex flex-col leading-tight">
						<div className="text-lg mt-1 flex items-center">
							<span className="font-semibold mr-3">Linda</span>
						</div>
						<span className="text-sm text-0-gray">Chatbot</span>
					</div>
				</div>
				<div className="flex items-center space-x-2">
					<button
						type="button"
						className="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							className="h-6 w-6 text-gray-600"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
							></path>
						</svg>
					</button>
				</div>
			</div>
			<div
				id="messages"
				className="flex flex-col space-y-4 p-3 overflow-y-scroll scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
			>
				<div className="chat-message">
					<div className="flex items-end">
						<div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
							<div>
								<span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
									Can be verified on any platform using docker
								</span>
							</div>
						</div>
						<Image
							src="/chatbot.svg"
							width={24}
							height={24}
							alt="My profile"
							className="w-6 h-6 rounded-full order-1"
						/>
					</div>
				</div>
				<div className="chat-message">
					<div className="flex items-end justify-end">
						<div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
							<div>
								<span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-0-Dprimary text-white ">
									Your error message says permission denied, npm global installs
									must be given root privileges.
								</span>
							</div>
						</div>
						<Image
							src={image}
							alt={name}
							width={24}
							height={24}
							className="w-6 h-6 rounded-full order-2"
						/>
					</div>
				</div>
			</div>
			<div className="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
				<div className="relative flex">
					<input
						type="text"
						placeholder="Anything you want to ask!!"
						className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-4 bg-gray-200 rounded-3xl py-3"
					/>
					<div className="absolute right-0 items-center inset-y-0 hidden sm:flex">
						<button
							type="button"
							className="inline-flex items-center justify-center rounded-full px-2 py-2 transition duration-500 ease-in-out text-white bg-0-Dprimary hover:bg-blue-400 focus:outline-none"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								className="h-6 w-6 transform rotate-90"
							>
								<path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Chatbot;
