import { screen, render } from "@testing-library/react";
import DogEdit from "../pages/DogEdit";
import { BrowserRouter } from "react-router-dom";

describe("<DogEdit />", () => {
    it("renders an update dog form", () => {
        render(
            <BrowserRouter>
              <DogEdit />
            </BrowserRouter>
        )}
)})
