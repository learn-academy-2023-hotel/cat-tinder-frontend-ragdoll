import { screen, render } from "@testing-library/react";
import DogNew from "../pages/DogNew";
import { BrowserRouter } from "react-router-dom";

describe("<DogNew />", () => {
	it("renders a new dog form", () => {
		render(
			<BrowserRouter>
				<DogNew />
			</BrowserRouter>
		);

		const nameInput = screen.getByRole("textbox", {
			name: /name/i,
		});
		expect(nameInput).toBeInTheDocument();

		const enjoysInput = screen.getByRole("textbox", {
			name: /enjoys/i,
		});
		expect(enjoysInput).toBeInTheDocument();
	});

	it("has a form with entries for name, age, enjoys, image", () => {
		const formName = screen.getByText(/name/i);
		expect(formName.getAttribute("for")).toEqual("name");
	});
});
