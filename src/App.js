import { Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./App.css";
import mockDogs from "./mockDogs";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import DogEdit from "./pages/DogEdit";
import DogIndex from "./pages/DogIndex";
import DogNew from "./pages/DogNew";
import DogShow from "./pages/DogShow";
import NotFound from "./pages/NotFound";

const App = () => {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    readDogs()
  }, [])

  const readDogs = () => {
    fetch("http://localhost:3000/dogs")
    .then((response) => response.json())
    .then((payload) => setDogs(payload))
    .catch((error) => console.log(error))
  }

  const updateDog = (dog, id) => {
    console.log("dog: ", dog);
    console.log("id: ", id);
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/dogedit/:id"
          element={<DogEdit dogs={dogs} updateDog={updateDog} />}
        />
        <Route path="/dogindex" element={<DogIndex dogs={dogs} />} />
        <Route path="/dognew" element={<DogNew />} />
        <Route path="/dogshow/:id" element={<DogShow dogs={dogs} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
