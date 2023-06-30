import React from "react";
import Header from "../Dashboard_Header/Header";
import Link from "next/link";
import Image from "next/image";

const Meet = () => {
	return (
		<>
			<div className="fixed bg-0-Dprimary z-50">
				<Header />
			</div>
			<section className="bg-0-Dprimary h-[100vh] flex items-center">
				<div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
					<div className="mr-auto place-self-center lg:col-span-7">
						<Link href="/">
							<Image
								src="/logolight.svg"
								width={70}
								height={70}
								alt="calendar"
								className="mr-20 w-16 h-16"
							/>
						</Link>
						<h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
							Scheduling and
							<br /> Joining Meetings to
							<br /> Enhance Student and User Experience
						</h1>
						<p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
							We provide a platform for students and teachers to join meetings
							and schedule meetings for their classes.
						</p>
						<div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
							<a
								href="https://meetingslive.vercel.app/preview/649c34315892a6f3dcaae474/guest"
								className="inline-flex items-center space-x-2 justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
							>
								<div className="mr-2">
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M20 12.2V13.9C20 17.05 18.2 18.4 15.5 18.4H6.5C3.8 18.4 2 17.05 2 13.9V8.5C2 5.35 3.8 4 6.5 4H9.2C9.07 4.38 9 4.8 9 5.25V9.15C9 10.12 9.32 10.94 9.89 11.51C10.46 12.08 11.28 12.4 12.25 12.4V13.79C12.25 14.3 12.83 14.61 13.26 14.33L16.15 12.4H18.75C19.2 12.4 19.62 12.33 20 12.2Z"
											stroke="white"
											stroke-width="1.5"
											stroke-miterlimit="10"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											d="M7.40039 22H14.6004M11.0004 18.4V22M22.0004 5.25V9.15C22.0004 10.64 21.2404 11.76 20.0004 12.2C19.6204 12.33 19.2004 12.4 18.7504 12.4H16.1504L13.2604 14.33C12.8304 14.61 12.2504 14.3 12.2504 13.79V12.4C11.2804 12.4 10.4604 12.08 9.89039 11.51C9.32039 10.94 9.00039 10.12 9.00039 9.15V5.25C9.00039 4.8 9.07039 4.38 9.20039 4C9.64039 2.76 10.7604 2 12.2504 2H18.7504C20.7004 2 22.0004 3.3 22.0004 5.25Z"
											stroke="white"
											stroke-width="1.5"
											stroke-miterlimit="10"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											d="M18.4945 7.25H18.5045M15.6955 7.25H15.7045M12.8945 7.25H12.9045"
											stroke="white"
											stroke-width="1.5"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>{" "}
								</div>
								Join Meeting
							</a>
							<a
								href="https://meetingslive.vercel.app/preview/649c34315892a6f3dcaae474/host"
								className="inline-flex items-center space-x-2 justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium border rounded-lg sm:w-auto focus:outline-none focus:z-10 focus:ring-4 focus:ring-gray-700 bg-0-Dsecondary/10 text-gray-400 border-gray-600 hover:text-white hover:bg-0-Dsecondary/40"
							>
								<div className="mr-2">
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M20 12.2V13.9C20 17.05 18.2 18.4 15.5 18.4H6.5C3.8 18.4 2 17.05 2 13.9V8.5C2 5.35 3.8 4 6.5 4H9.2C9.07 4.38 9 4.8 9 5.25V9.15C9 10.12 9.32 10.94 9.89 11.51C10.46 12.08 11.28 12.4 12.25 12.4V13.79C12.25 14.3 12.83 14.61 13.26 14.33L16.15 12.4H18.75C19.2 12.4 19.62 12.33 20 12.2Z"
											stroke="white"
											stroke-width="1.5"
											stroke-miterlimit="10"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											d="M7.40039 22H14.6004M11.0004 18.4V22M22.0004 5.25V9.15C22.0004 10.64 21.2404 11.76 20.0004 12.2C19.6204 12.33 19.2004 12.4 18.7504 12.4H16.1504L13.2604 14.33C12.8304 14.61 12.2504 14.3 12.2504 13.79V12.4C11.2804 12.4 10.4604 12.08 9.89039 11.51C9.32039 10.94 9.00039 10.12 9.00039 9.15V5.25C9.00039 4.8 9.07039 4.38 9.20039 4C9.64039 2.76 10.7604 2 12.2504 2H18.7504C20.7004 2 22.0004 3.3 22.0004 5.25Z"
											stroke="white"
											stroke-width="1.5"
											stroke-miterlimit="10"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											d="M18.4945 7.25H18.5045M15.6955 7.25H15.7045M12.8945 7.25H12.9045"
											stroke="white"
											stroke-width="1.5"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>{" "}
								</div>
								Create Meeting
							</a>
						</div>
					</div>
					<div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
						<img src="/hero.png" alt="hero image" />
					</div>
				</div>
			</section>
		</>
	);
};

export default Meet;
