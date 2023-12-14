import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import mockDogs from "../mockDogs";
import DogShow from "../pages/DogShow";
const renderShow = () => {
  render(
    <MemoryRouter initialEntries={["/dogshow/1"]}>
      <Routes>
        <Route path="/dogshow/:id" element={<DogShow dogs={mockDogs} />} />
      </Routes>
    </MemoryRouter>
  );
};
describe("<DogShow />", () => {
  it("renders without crashing", () => {
    renderShow();
  });
  it("renders a card with dog name", () => {
    renderShow();
    expect(screen.getByText(mockDogs[0].name, { exact: false }))
      .toBeInTheDocument();
  });
  it("renders a card with dog age", () => {
    renderShow();
    expect(screen.getByText(mockDogs[0].age, { exact: false }))
      .toBeInTheDocument();
  });
  it("renders a card with what dog enjoys", () => {
    renderShow();
    expect(
      screen.getByText(mockDogs[0].enjoys, { exact: false })
    ).toBeInTheDocument();
  });
});
