import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import DogEdit from "./pages/DogEdit";
import DogIndex from "./pages/DogIndex";
import DogNew from "./pages/DogNew";
import DogShow from "./pages/DogShow";
import NotFound from "./pages/NotFound";
import "./App.css";

const App = () => {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    readDog();
  }, []);

  const readDog = () => {
    fetch("http://localhost:3000/dogs")
      .then((response) => response.json())
      .then((payload) => setDogs(payload))
      .catch((error) => console.log(error));
  };

  const createDog = (createdDog) => {
    fetch("http://localhost:3000/dogs", {
      body: JSON.stringify(createdDog),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((response) => response.json())
      .then(() => readDog())
      .catch((error) => console.log("Dog create errors:", error));
  };

  const updateDog = (dog, id) => {
    fetch(`http://localhost:3000/dogs/${id}`, {
      body: JSON.stringify(dog),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PATCH",
    })
      .then((response) => response.json())
      .then(() => readDog())
      .catch((errors) => console.log("Dog update errors:", errors));
  };

  const deleteDog = (id) => {
    fetch(`http://localhost:3000/dogs/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => readDog())
      .catch((errors) => console.log("delete errors:", errors));
  };

  return (
    <>
      <Header />
      <body className="main-body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/dogedit/:id"
            element={<DogEdit dogs={dogs} updateDog={updateDog} />}
          />
          <Route path="/dogindex" element={<DogIndex dogs={dogs} />} />
          <Route path="/dognew" element={<DogNew createDog={createDog} />} />
          <Route
            path="/dogshow/:id"
            element={<DogShow dogs={dogs} deleteDog={deleteDog} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </body>
      <Footer />
    </>
  );
};

export default App;
