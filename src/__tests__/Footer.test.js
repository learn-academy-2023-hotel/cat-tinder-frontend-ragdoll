import { render } from "@testing-library/react";
import Footer from "../components/Footer";
import { BrowserRouter } from "react-router-dom";

describe("<Footer />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
  });
});