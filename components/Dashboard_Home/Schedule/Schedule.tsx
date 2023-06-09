import React, { useEffect, useState } from "react";
import Scard from "./Scard";
import { useLog } from "@/context/Landing";
import axios from "axios";

interface img {
	image: string;
}

const sessionTitles = [
	"The Future of Artificial Intelligence: Trends and Implications",
	"Exploring Blockchain Technology: Beyond Cryptocurrencies",
	"Demystifying Machine Learning: Algorithms and Applications",
	"Data Privacy in the Digital Age: Challenges and Solutions",
	"Cybersecurity Best Practices for Small Businesses",
	"The Rise of Internet of Things: Connecting the Physical World",
	"Cloud Computing: Harnessing the Power of Remote Infrastructure",
	"Emerging Trends in Virtual Reality and Augmented Reality",
	"Building Scalable and Resilient Web Applications",
	"Introduction to Quantum Computing: Concepts and Opportunities",
	"Ethical Hacking: Securing Your Digital Assets",
	"The Impact of Big Data Analytics on Business Decision Making",
	"User Experience Design: Creating Intuitive Interfaces",
	"Digital Transformation in Healthcare: Innovations and Challenges",
	"Artificial Neural Networks: Deep Learning Techniques",
	"Advancements in Natural Language Processing",
	"Cryptocurrency Mining: A Technical Overview",
	"DevOps Culture: Bridging the Gap Between Development and Operations",
	"Securing IoT Devices: Protecting the Connected World",
	"Introduction to Robotic Process Automation",
	"Advances in Biometric Authentication Systems",
	"The Evolution of Mobile App Development: From Native to Hybrid",
	"Exploring 5G Technology: The Future of Connectivity",
	"Building Resilient Infrastructure with Containerization",
	"The Role of Chatbots in Customer Service",
	"Distributed Ledger Technologies: Beyond Blockchain",
	"Demystifying Quantum Cryptography",
	"Deep Reinforcement Learning: Teaching Machines to Learn",
	"The Power of Cloud-Native Architecture",
	"Exploring Edge Computing: Bringing Computing Closer to the Source",
];

const Schedule = () => {
	const { image } = useLog() as img;
	const [schedule, setSchedule]: any = useState([]);
	const getSchedule = async () => {
		const randomSession: string =
			sessionTitles[Math.floor(Math.random() * sessionTitles.length)];
		const randomSession2: string =
			sessionTitles[Math.floor(Math.random() * sessionTitles.length - 2)];
		const randomSession3: string =
			sessionTitles[Math.floor(Math.random() * sessionTitles.length - 1)];
		const response1 = await axios.get(
			`https://api.unsplash.com/photos/random/?client_id=${
				process.env.NEXT_PUBLIC_UNSPLASH_URL
			}&query=${randomSession?.toLowerCase().replace(" ", "-")}}`
		);
		const response2 = await axios.get(
			`https://api.unsplash.com/photos/random/?client_id=${
				process.env.NEXT_PUBLIC_UNSPLASH_URL
			}&query=${randomSession2?.toLowerCase().replace(" ", "-")}}`
		);
		const response3 = await axios.get(
			`https://api.unsplash.com/photos/random/?client_id=${
				process.env.NEXT_PUBLIC_UNSPLASH_URL
			}&query=${randomSession3?.toLowerCase().replace(" ", "-")}}`
		);
		setSchedule({
			images: [
				response1?.data?.urls?.regular,
				response2?.data?.urls?.regular,
				response3?.data?.urls?.regular,
			],
			title: [randomSession, randomSession2, randomSession3],
		});
	};
	useEffect(() => {
		getSchedule();
	}, []);
	return (
		<div className="ml-8 mt-3">
			<h2 className="text-xl font-semibold mb-4">Scheduled Today</h2>
			<div className="overflow-y-scroll h-[35vh] xl:h-[36vh] space-y-3 w-full">
				<Scard
					img={
						schedule?.images?.[0] ||
						"https://images.unsplash.com/photo-1658763440438-2391eba32774?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTgwODF8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODYyNDI5OTh8&ixlib=rb-4.0.3&q=80&w=1080"
					}
					title={
						schedule?.title?.[0] ||
						"Artificial Neural Networks Deep Learning Techniques"
					}
					teacher_img={image}
					teacher_name={"jay Singh"}
					time={"2:00 PM"}
				/>
				<Scard
					img={
						schedule?.images?.[1] ||
						"https://images.unsplash.com/photo-1620712943543-bcc4688e7485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTgwODF8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODYyNDMyNjl8&ixlib=rb-4.0.3&q=80&w=1080"
					}
					title={
						schedule?.title?.[1] ||
						"Artificial Neural Networks Deep Learning Techniques"
					}
					teacher_img={image}
					teacher_name={"jay Singh"}
					time={"2:00 PM"}
				/>
				<Scard
					img={
						schedule?.images?.[2] ||
						"https://images.unsplash.com/photo-1658763440438-2391eba32774?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTgwODF8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODYyNDI5OTh8&ixlib=rb-4.0.3&q=80&w=1080"
					}
					title={
						schedule?.title?.[2] ||
						"Artificial Neural Networks Deep Learning Techniques"
					}
					teacher_img={image}
					teacher_name={"jay Singh"}
					time={"2:00 PM"}
				/>
			</div>
		</div>
	);
};

export default Schedule;
