import { useRouter } from "next/router";
import React from "react";

const ResourceShowcase = () => {
	const router = useRouter();
	const Heading: string | string[] | undefined = router.query.name;
	return (
		<div>
			<div className="flex justify-center items-center">
				<div className="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
					<div
						role="main"
						className="flex flex-col items-center justify-center"
					>
						<h1 className="text-4xl capitalize font-semibold leading-9 text-center text-gray-800 dark:text-gray-50">
							All {Heading}
						</h1>
						<p className="text-base leading-normal text-center text-gray-600 dark:text-white mt-4 lg:w-1/2 md:w-10/12 w-11/12">
							If you&rsquo;re looking for educational {Heading}, you&rsquo;ve
							come to the right place.
						</p>
					</div>
					<div className="lg:flex items-stretch md:mt-12 mt-8">
						<div className="lg:w-1/2">
							<div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
								<div className="sm:w-1/2 relative">
									<div>
										<p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
											12 April 2021
										</p>
										<div className="absolute bottom-0 left-0 p-6">
											<h2 className="text-xl font-semibold 5 text-white">
												The Decorated Ways
											</h2>
											<p className="text-base leading-4 text-white mt-2">
												Dive into minimalism
											</p>
											<a
												href="javascript:void(0)"
												className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
											>
												<p className="pr-2 text-sm font-medium leading-none">
													Read More
												</p>
												<svg
													className="fill-stroke"
													width="16"
													height="16"
													viewBox="0 0 16 16"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M5.75 12.5L10.25 8L5.75 3.5"
														stroke="currentColor"
														stroke-width="2"
														stroke-linecap="round"
														stroke-linejoin="round"
													/>
												</svg>
											</a>
										</div>
									</div>
									<img
										src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWR1Y2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
										className="w-full"
										alt="chair"
									/>
								</div>
								<div className="sm:w-1/2 sm:mt-0 mt-4 relative">
									<div>
										<p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
											12 April 2021
										</p>
										<div className="absolute bottom-0 left-0 p-6">
											<h2 className="text-xl font-semibold 5 text-white">
												The Decorated Ways
											</h2>
											<p className="text-base leading-4 text-white mt-2">
												Dive into minimalism
											</p>
											<a
												href="javascript:void(0)"
												className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
											>
												<p className="pr-2 text-sm font-medium leading-none">
													Read More
												</p>
												<svg
													className="fill-stroke"
													width="16"
													height="16"
													viewBox="0 0 16 16"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M5.75 12.5L10.25 8L5.75 3.5"
														stroke="currentColor"
														stroke-width="2"
														stroke-linecap="round"
														stroke-linejoin="round"
													/>
												</svg>
											</a>
										</div>
									</div>
									<img
										src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWR1Y2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
										className="w-full"
										alt="wall design"
									/>
								</div>
							</div>
							<div className="relative">
								<div>
									<p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
										12 April 2021
									</p>
									<div className="absolute bottom-0 left-0 md:p-10 p-6">
										<h2 className="text-xl font-semibold 5 text-white">
											The Decorated Ways
										</h2>
										<p className="text-base leading-4 text-white mt-2">
											Dive into minimalism
										</p>
										<a
											href="javascript:void(0)"
											className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
										>
											<p className="pr-2 text-sm font-medium leading-none">
												Read More
											</p>
											<svg
												className="fill-stroke"
												width="16"
												height="16"
												viewBox="0 0 16 16"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M5.75 12.5L10.25 8L5.75 3.5"
													stroke="currentColor"
													stroke-width="2"
													stroke-linecap="round"
													stroke-linejoin="round"
												/>
											</svg>
										</a>
									</div>
								</div>
								<img
									src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
									alt="sitting place"
									className="w-full mt-8 md:mt-6 hidden sm:block"
								/>
								<img
									className="w-full mt-4 sm:hidden"
									src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
									alt="sitting place"
								/>
							</div>
						</div>
						<div className="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
							<div className="relative">
								<div>
									<p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
										12 April 2021
									</p>
									<div className="absolute bottom-0 left-0 md:p-10 p-6">
										<h2 className="text-xl font-semibold 5 text-white">
											The Decorated Ways
										</h2>
										<p className="text-base leading-4 text-white mt-2">
											Dive into minimalism
										</p>
										<a
											href="javascript:void(0)"
											className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
										>
											<p className="pr-2 text-sm font-medium leading-none">
												Read More
											</p>
											<svg
												className="fill-stroke"
												width="16"
												height="16"
												viewBox="0 0 16 16"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M5.75 12.5L10.25 8L5.75 3.5"
													stroke="currentColor"
													stroke-width="2"
													stroke-linecap="round"
													stroke-linejoin="round"
												/>
											</svg>
										</a>
									</div>
								</div>
								<img
									src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
									alt="sitting place"
									className="w-full sm:block hidden"
								/>
								<img
									className="w-full sm:hidden"
									src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
									alt="sitting place"
								/>
							</div>
							<div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
								<div className="relative w-full">
									<div>
										<p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
											12 April 2021
										</p>
										<div className="absolute bottom-0 left-0 p-6">
											<h2 className="text-xl font-semibold 5 text-white">
												The Decorated Ways
											</h2>
											<p className="text-base leading-4 text-white mt-2">
												Dive into minimalism
											</p>
											<a
												href="javascript:void(0)"
												className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
											>
												<p className="pr-2 text-sm font-medium leading-none">
													Read More
												</p>
												<svg
													className="fill-stroke"
													width="16"
													height="16"
													viewBox="0 0 16 16"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M5.75 12.5L10.25 8L5.75 3.5"
														stroke="currentColor"
														stroke-width="2"
														stroke-linecap="round"
														stroke-linejoin="round"
													/>
												</svg>
											</a>
										</div>
									</div>
									<img
										src="https://images.unsplash.com/photo-1610210752279-e19c66c31e9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjMxfHxlZHVjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
										className="w-full"
										alt="chair"
									/>
								</div>
								<div className="relative w-full sm:mt-0 mt-4">
									<div>
										<p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
											12 April 2021
										</p>
										<div className="absolute bottom-0 left-0 p-6">
											<h2 className="text-xl font-semibold 5 text-white">
												The Decorated Ways
											</h2>
											<p className="text-base leading-4 text-white mt-2">
												Dive into minimalism
											</p>
											<a
												href="javascript:void(0)"
												className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
											>
												<p className="pr-2 text-sm font-medium leading-none">
													Read More
												</p>
												<svg
													className="fill-stroke"
													width="16"
													height="16"
													viewBox="0 0 16 16"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M5.75 12.5L10.25 8L5.75 3.5"
														stroke="currentColor"
														stroke-width="2"
														stroke-linecap="round"
														stroke-linejoin="round"
													/>
												</svg>
											</a>
										</div>
									</div>
									<img
										src="https://images.unsplash.com/photo-1624254009481-94fb3b9cf16e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA0fHxlZHVjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
										className="w-full"
										alt="wall design"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ResourceShowcase;
