import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useNavigate } from "react-router-dom";

const DogNew = ({ createDog }) => {
  const navigate = useNavigate();

  const [newDog, setNewDog] = useState({
    name: "",
    age: "",
    enjoys: "",
    image: "",
  });

  const [dogConfirm, setDogConfirm] = useState(false);

  const dogConfirmModal = () => {
    setDogConfirm(!dogConfirm);
  };

  const handleChange = (e) => {
    setNewDog({ ...newDog, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    createDog(newDog);
    dogConfirmModal();
  };

  const handleConfirm = () => {
    dogConfirmModal();
    navigate("/dogindex");
  };

  return (
    <>
      <Form>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input id="name" name="name" type="text" onChange={handleChange} value={newDog.name} />
        </FormGroup>
        <FormGroup>
          <Label for="age">Age</Label>
          <Input id="age" name="age" type="text" onChange={handleChange} value={newDog.age} />
        </FormGroup>
        <FormGroup>
          <Label for="enjoys">Enjoys</Label>
          <Input id="enjoys" name="enjoys" type="text" onChange={handleChange} value={newDog.enjoys} />
        </FormGroup>
        <FormGroup>
          <Label for="image">Image</Label>
          <Input id="image" name="image" type="text" onChange={handleChange} value={newDog.image} />
        </FormGroup>
        <Button onClick={handleSubmit}>Submit</Button>
      </Form>

      {/* Confirmation Modal */}
      <Modal isOpen={dogConfirm} toggle={dogConfirmModal}>
        <ModalHeader toggle={dogConfirmModal}>Confirmation</ModalHeader>
        <ModalBody>
          Yayyy!!! New Dog Added. Greatly Appreciate It!
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleConfirm}>
            OK
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default DogNew;
