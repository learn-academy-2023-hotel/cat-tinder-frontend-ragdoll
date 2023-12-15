import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const DogEdit = ({ dogs, updateDog }) => {
	const { id } = useParams();
	const navigate = useNavigate();
	let currentDog = dogs?.find((dog) => dog.id === +id);

	const [editDog, setEditDog] = useState({
		name: currentDog?.name,
		age: currentDog?.age,
		enjoys: currentDog?.enjoys,
		image: currentDog?.image,
		id: currentDog?.id,
	});
	const handleChange = (e) => {
		setEditDog({ ...editDog, [e.target.name]: e.target.value });
	};

	const handleSubmit = () => {
		updateDog(editDog, currentDog.id);
		navigate(`/dogshow/${id}`);
	};

	return (
		<Form>
			<FormGroup>
				<Label for="name">Name</Label>
				<Input
          id="name"
					type="text"
					name="name"
					onChange={handleChange}
					value={editDog.name}
				/>
			</FormGroup>
			<FormGroup>
				<Label for="age">Age</Label>
				<Input
          id="age"
					type="number"
					name="age"
					onChange={handleChange}
					value={editDog.age}
				/>
			</FormGroup>
			<FormGroup>
				<Label for="enjoys">Enjoys</Label>
				<Input
          id="enjoys"
					type="text"
					name="enjoys"
					onChange={handleChange}
					value={editDog.enjoys}
				/>
			</FormGroup>
			<FormGroup>
				<Label for="image">Image URL</Label>
				<Input
          id="image"
					type="text"
					name="image"
					onChange={handleChange}
					value={editDog.image}
				/>
			</FormGroup>
			<Button onClick={handleSubmit}>Submit Updated Dog</Button>
		</Form>
	);
};

export default DogEdit;
