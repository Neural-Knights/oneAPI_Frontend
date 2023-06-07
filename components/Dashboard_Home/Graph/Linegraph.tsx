import React from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

const Linegraph = () => {
	const options = {
		radius: 5,
		responsive: true,
		plugins: {
			legend: {
				display: false,
				labels: {
					usePointStyle: true,
				},
				position: "top" as const,
			},
			title: {
				display: false,
				text: "Learning Curve",
			},
		},
	};

	const labels = ["January", "February", "March", "April", "May", "June"];

	const data = {
		labels,
		datasets: [
			{
				data: [100, 200, 50, 80, 1000, 200, 500, 600],
				borderColor: "#7016D0",
				backgroundColor: "#7016D0",
				pointBackgroundColor: "#fff",
				pointBorderRadius: "100",
				pointStyle: "circle",
			},
			{
				data: [50, 100, 150, 500, 400, 300, 800, 400, 600],
				borderColor: "#3FF0B9",
				backgroundColor: "#3FF0B9",
				pointBackgroundColor: "#fff",
				pointBorderRadius: "100",
			},
			{
				data: [150, 0, 50, 400, 400, 700, 900, 400, 1000],
				borderColor: "#ACA4BC",
				backgroundColor: "#ACA4BC",
				pointBackgroundColor: "#fff",
				pointBorderRadius: "100",
			},
		],
	};
	return (
		<div className="w-[80%] flex justify-center mx-auto mt-3">
			<Line className="w-72 h-72" options={options} data={data} />
		</div>
	);
};

export default Linegraph;
