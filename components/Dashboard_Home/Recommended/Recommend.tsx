import React, { useEffect } from "react";
import Rcard from "./Rcard";
import { useLog } from "@/context/Landing";
import axios from "axios";

const array: string[] = [
	"machine",
	"machine learning",
	"Python",
	"R",
	"TensorFlow",
	"PyTorch",
	"Keras",
	"Scikit-learn",
	"Microsoft Cognitive Toolkit",
	"Theano",
	"Apache MXNet",
	"Caffe",
	"H2O.ai",
	"Google Cloud ML Engine",
	"Amazon SageMaker",
	"IBM Watson",
	"Microsoft Azure Machine Learning",
	"AutoML",
	"Natural Language Processing",
	"Computer Vision",
	"Reinforcement Learning",
	"Deep Learning",
	"Neural Networks",
	"Generative Adversarial Networks",
	"Transfer Learning",
	"Data Preprocessing",
	"Model Deployment",
	"Big Data Analytics",
	"Data Visualization",
	"Parallel Computing",
	"Model Interpretability",
	"Explainable AI",
	"Automated Feature Engineering",
	"Model Optimization",
	"Federated Learning",
	"Edge AI",
	"Quantum Machine Learning",
	"Robotics Process Automation",
	"Internet of Things",
	"Blockchain and Machine Learning",
	"Privacy-Preserving Machine Learning",
	"AutoML",
];

const randomTechnology: string =
	array[Math.floor(Math.random() * array.length)];

const Recommend = () => {
	const { recammandData, setRecammandData }: any = useLog();

	const getRecommendation = async () => {
		const recommandationData: object = await axios.post("/api/recommendation", {
			title: randomTechnology,
		});
		const response1 = await axios.get(
			`https://api.unsplash.com/photos/random/?client_id=${
				process.env.NEXT_PUBLIC_UNSPLASH_URLS
			}&query=${"technologies-" + randomTechnology}}`
		);
		const response2 = await axios.get(
			`https://api.unsplash.com/photos/random/?client_id=${
				process.env.NEXT_PUBLIC_UNSPLASH_URLS
			}&query=${"tech-" + randomTechnology}}`
		);
		const final = [
			{
				RData: [recommandationData],
			},
			{
				images: [
					response1?.data?.urls?.regular,
					response2?.data?.urls?.regular,
				],
			},
			{
				links: [
					randomTechnology?.toLowerCase().replace(" ", "-"),
					randomTechnology?.toLowerCase().replace(" ", "_"),
				],
			},
		];
		setRecammandData(final);
	};

	useEffect(() => {
		getRecommendation();
	}, []);

	return (
		<div className="ml-8 mt-3">
			<h2 className="text-xl font-semibold">Recomendated Topics</h2>
			<div className="flex space-x-5">
				<Rcard
					img={
						recammandData?.[1]?.images?.[0] ||
						"https://images.unsplash.com/photo-1685703205838-d5c033d41fe7"
					}
					title={
						recammandData?.[0]?.RData?.[0]?.data?.[0]?.course_title ||
						"Introduction to Computer Science and Programming"
					}
					link={recammandData?.[2]?.links?.[0] + "first"}
					rating={
						recammandData?.[0]?.RData?.[0]?.data?.[0]?.course_rating ||
						0.75648444
					}
				/>
				<Rcard
					img={
						recammandData?.[1]?.images?.[1] ||
						"https://images.unsplash.com/photo-1661956602926-db6b25f75947?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTgwODF8MXwxfGFsbHw2fHx8fHx8Mnx8MTY4NjExNTM1Mnw&ixlib=rb-4.0.3&q=80&w=1080"
					}
					title={
						recammandData?.[0]?.RData?.[0]?.data?.[1]?.course_title ||
						"Introduction to Computer Programming"
					}
					link={recammandData?.[2]?.links?.[1] + "second"}
					rating={
						recammandData?.[0]?.RData?.[0]?.data?.[1]?.course_rating ||
						0.84648444
					}
				/>
			</div>
		</div>
	);
};

export default Recommend;
