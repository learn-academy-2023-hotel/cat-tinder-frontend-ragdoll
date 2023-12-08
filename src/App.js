import logo from "./logo.svg";
import "./App.css";
import mockDogs from "./mockDogs";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import DogEdit from "./pages/DogEdit";
import DogIndex from "./pages/DogIndex";
import DogNew from "./pages/DogNew";
import DogShow from "./pages/DogShow";
import NotFound from "./pages/NotFound";


const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dogedit" element={<DogEdit />} />
        <Route path="/dogindex" element={<DogIndex />} />
        <Route path="/dognew" element={<DogNew />} />
        <Route path="/dogshow" element={<DogShow />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;