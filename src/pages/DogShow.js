import React from "react";
import { useParams } from "react-router-dom";

const DogShow = ({ dogs }) => {
	const { id } = useParams();
	let currentDog = dogs.find((dog) => dog.id === +id);

	return (
		<main className="dog-show-cards">
			{currentDog && (
				<>
					<img
						alt={`profile of a dog named ${currentDog.name}`}
						src={currentDog.image}
						className="dog-show-img"
					/>
					Name {currentDog.name}
					Age {currentDog.age}
          Enjoys of Life: {currentDog.enjoys}
				</>
			)}
		</main>
	);
};

export default DogShow;
