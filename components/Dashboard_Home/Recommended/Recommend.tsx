import React from "react";
import Rcard from "./Rcard";

const Recommend = () => {
	return (
		<div className="ml-8 mt-4">
			<h2 className="text-2xl font-semibold">Recomendated Topics</h2>
			<div className="flex space-x-4">
				<Rcard img={"/ml.png"} title={"Introduction to machine learning"} />
				<Rcard img={"/washing.png"} title={"advanced washing techniques"} />
			</div>
		</div>
	);
};

export default Recommend;
