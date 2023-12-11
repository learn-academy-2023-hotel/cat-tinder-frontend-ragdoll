import { render } from "@testing-library/react";
import NotFound from "../pages/NotFound";
import { BrowserRouter } from "react-router-dom";

describe("<NotFound />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
  });
});