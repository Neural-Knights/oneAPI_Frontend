import Image from "next/image";
import Link from "next/link";
import React from "react";

const Resources = () => {
	const RCard = [
		{
			title: "Video Tutorial",
			img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
			link: "/resources/videos",
			members: "55 Videos",
		},
		{
			title: "Audio Book",
			img: "https://images.unsplash.com/photo-1542641806058-922fa0dae86b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1185&q=80",
			link: "/resources/audios",
			members: "132 Audios",
		},
		{
			title: "E-Book",
			img: "https://images.unsplash.com/photo-1512503959943-9d35a3636b51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
			link: "/resources/ebooks",
			members: "45 E-Books",
		},
		{
			title: "Classes",
			img: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
			link: "/resources/classes",
			members: "120 Classes",
		},
		{
			title: "Articles",
			img: "https://images.unsplash.com/photo-1570382160267-c233b329f78b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=424&q=80",
			link: "/resources/articles",
			members: "200 Articles",
		},
		{
			title: "Quizes",
			img: "https://images.unsplash.com/photo-1606326608690-4e0281b1e588?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
			link: "/resources/quizes",
			members: "100 Quizes",
		},
	];
	return (
		<div className="h-[100vh] z-50 flex justify-center items-center bg-0-Dprimary">
			<div className="m-auto grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-[80vw]">
				{RCard.map((card, i) => (
					<div
						key={i}
						className="antialiased w-fit h-fit text-0-Dprimary group"
					>
						<Link href={card.link}>
							<Image
								src={card.img}
								alt={card.title}
								width={200}
								height={200}
								className="w-80 h-52 object-cover object-center rounded-lg shadow-md"
							/>

							<div className="relative px-4 -top-6">
								<div className="bg-white group-hover:bg-0-Lsecondary p-6 rounded-lg shadow-lg">
									<div className="flex items-baseline">
										<span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
											New
										</span>
										<div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
											{card.members}
										</div>
									</div>

									<h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">
										{card.title}
									</h4>
								</div>
							</div>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default Resources;
