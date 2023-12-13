import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { useNavigate } from "react-router-dom";

const DogNew = ({ createDog }) => {
	const navigate = useNavigate();

	const [newDog, setNewDog] = useState({
		name: "",
		age: "",
		enjoys: "",
		image: "",
	});

	const handleChange = (e) => {
		// spread operator makes a copy of our state object(newDog)
		// will tell us which key we're updating
		// will tell us the value we're inputting and setting to that key
		setNewDog({ ...newDog, [e.target.name]: e.target.value });
	};

	const handleSubmit = () => {
		createDog(newDog);
		navigate("/dogindex");
	};

	return (
		<Form>
			<FormGroup>
				<Label for="name">Name</Label>
				<Input
					id="name"
					name="name"
					type="text"
					onChange={handleChange}
					value={newDog.name}
				/>
			</FormGroup>
			<FormGroup>
				<Label for="age">Age</Label>
				<Input
					id="age"
					name="age"
					type="text"
					onChange={handleChange}
					value={newDog.age}
				/>
			</FormGroup>
			<FormGroup>
				<Label for="enjoys">Enjoys</Label>
				<Input
					id="enjoys"
					name="enjoys"
					type="text"
					onChange={handleChange}
					value={newDog.enjoys}
				/>
			</FormGroup>
			<FormGroup>
				<Label for="image">Image</Label>
				<Input
					id="image"
					name="image"
					type="text"
					onChange={handleChange}
					value={newDog.image}
				/>
			</FormGroup>
			<Button onClick={handleSubmit}>Submit</Button>
		</Form>
	);
};

export default DogNew;
