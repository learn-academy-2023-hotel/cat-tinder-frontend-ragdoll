import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const DogEdit = ({ dogs, updateDog }) => {
  const { id } = useParams();
  let currentDog = dogs?.find((dog) => dog.id === +id);
  
  const [editDog, setEditDog] = useState({
    name: currentDog.name,
    age: currentDog.age,
    enjoys: currentDog.enjoys,
    image: currentDog.image,
  });
  const handleChange = (e) => {
    setEditDog({ ...editDog, [e.target.name]: e.target.value });
  };
  
  const navigate = useNavigate()
  const handleSubmit = () => {
    updateDog(editDog, currentDog.id)
    navigate("/dogindex");
  };
  return (
    <Form>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input type="text" name="name" onChange={handleChange} />
      </FormGroup>
      <FormGroup>
        <Label for="age">Age</Label>
        <Input type="number" name="age" onChange={handleChange} />
      </FormGroup>
      <FormGroup>
        <Label for="enjoys">Enjoys</Label>
        <Input type="text" name="enjoys" onChange={handleChange} />
      </FormGroup>
      <FormGroup>
        <Label for="image">Image URL</Label>
        <Input type="text" name="image" onChange={handleChange} />
      </FormGroup>
      <Button onClick={handleSubmit} name="submit">
        Submit Updated Dog
      </Button>
    </Form>
  );
};

export default DogEdit;
