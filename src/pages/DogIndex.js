import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
import { NavLink } from "react-router-dom";
import "../App.css";

const DogIndex = ({ dogs }) => {
	return (
		<main className="dog-index-cards">
			{dogs?.map((dog, index) => (
				<div className="card-flex">
					<Card
						color="dark"
						inverse
						style={{
							width: "18rem",
							transition: "transform 0.2s",
						}}
						key={index}
						className="hover-card">
						<img
							alt={`profile of a dog named ${dog.name}`}
							src={dog.image}
							className="image-flex"
						/>
						<CardBody>
							<CardTitle tag="h5">{dog.name}</CardTitle>
							<CardSubtitle className="mb-2 text-muted" tag="h6">
								Age: {dog.age}
							</CardSubtitle>
							<CardText>Age: {dog.age}</CardText>
							<NavLink to={`/dogshow/${dog.id}`} className="nav-link">
							<button class="button">Click for more details</button>
							</NavLink>
						</CardBody>
					</Card>
				</div>
			))}
		</main>
	);
};

export default DogIndex;
