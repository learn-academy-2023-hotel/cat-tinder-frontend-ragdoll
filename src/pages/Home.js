import React from "react";
import FrontPage from "../assets/cropped-1920-1080-301720.png";
import "../App.css";

const Home = () => {
	return (
		<>
			<h1 className="home-title">
				Dog Tinder: Where Dogs Rule the Social Media Pack!
			</h1>
			<div className="home-flex">
				<img
					src={FrontPage}
					alt="bunch of smiling dogs"
					style={{ width: "75%", height: "auto" }}
				/>
			</div>
		</>
	);
};

export default Home;
