import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";

import mockDogs from "../mockDogs";
import DogEdit from "../pages/DogEdit";

const renderEdit = () => {
	render(
		<MemoryRouter initialEntries={["/dogedit/1"]}>
			<Routes>
				<Route path="/dogedit/:id" element={<DogEdit dogs={mockDogs} />} />
			</Routes>
		</MemoryRouter>
	);
};

describe("<DogEdit />", () => {
	it("display a form to update dog info", () => {
		renderEdit();
		const nameInput = screen.getByRole("textbox", {
			name: /name/i,
		});
		expect(nameInput).toBeInTheDocument();

		const ageInput = screen.getByRole("textbox", {
			name: /age/i,
		});
		expect(ageInput).toBeInTheDocument();

		const enjoysInput = screen.getByRole("textbox", {
			name: /enjoys/i,
		});
		expect(enjoysInput).toBeInTheDocument();

		const imageInput = screen.getByRole("textbox", {
			name: /image/i,
		});
		expect(imageInput).toBeInTheDocument();
	});
});