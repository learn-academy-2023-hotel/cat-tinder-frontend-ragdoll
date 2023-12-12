import { render } from "@testing-library/react";
import Home from "../pages/Home";
import App from "../App";

describe("<Home />", () => {
    it("renders without crashing", () => {
        // The document.createElement("div") creates a new HTML div element. This is used as a container where the <Home /> component will be rendered.
        const div = document.createElement("div")
        // The render function is used to render the <Home /> component inside the previously created div. This is often done for isolated component testing.
        render(<Home />, div)
    })
})