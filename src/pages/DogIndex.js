import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
import { NavLink } from "react-router-dom";
import "../App.css"

const DogIndex = ({ dogs }) => {
	return (
		<main className="dog-index-cards">
			{dogs?.map((dog, index) => (
				<div className="card-flex">
				<Card
					color="dark"
					inverse
					style={{
						width: "20rem",
					}}
					key={index}>
					<img alt={`profile of a dog named ${dog.name}`} src={dog.image} className="image-flex" />
					<CardBody>
						<CardTitle tag="h5">{dog.name}</CardTitle>
						<CardSubtitle className="mb-2 text-muted" tag="h6">
							Age: {dog.age}
						</CardSubtitle>
						<CardText>
							Some quick example text to build on the card title and make up the
							bulk of the card‘s content.
						</CardText>
						<NavLink to={`/dogshow/${dog.id}`} className="nav-link">
							See More Details
						</NavLink>
					</CardBody>
				</Card>
				</div>
			))}
		</main>
	);
};

export default DogIndex;
