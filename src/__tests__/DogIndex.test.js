import { render, screen } from "@testing-library/react";
import DogIndex from "../pages/DogIndex";
import { BrowserRouter } from "react-router-dom";
import mockDogs from "../mockDogs"

describe("<DogIndex />", () => {
	it("renders without crashing", () => {});
	it("renders dog cards", () => {
		render(
			<BrowserRouter>
				<DogIndex dogs={mockDogs} />
			</BrowserRouter>
		);
		mockDogs.forEach((dog) => {
			const dogName = screen.getByText(dog.name);
			expect(dogName).toBeInTheDocument();
		});
	});
});
