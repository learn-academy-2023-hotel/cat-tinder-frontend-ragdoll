import React from "react";
import { useParams, NavLink } from "react-router-dom";
import { Button } from "reactstrap";

const DogShow = ({ dogs, deleteDog }) => {
	const { id } = useParams();
	let currentDog = dogs.find((dog) => dog.id === +id);

  const handleDelete = () => {
    deleteDog(currentDog.id)
  }

	return (
		<main className="dog-show-cards">
			{currentDog && (
				<>
					<img
						alt={`profile of a dog named ${currentDog.name}`}
						src={currentDog.image}
						className="dog-show-img"
					/>
					<div>
						<p>Name {currentDog.name}</p>
						<p>Age {currentDog.age}</p>
						<p>Enjoys of Life: {currentDog.enjoys}</p>
					</div>
					<NavLink to={`/dogedit/${currentDog.id}`} className="nav-link">
						Edit Dog Profile
					</NavLink>
					<NavLink to="/dogindex">
						<Button onClick={handleDelete()}>Delete Dog Profile</Button>
					</NavLink>
				</>
			)}
		</main>
	);
};

export default DogShow;
