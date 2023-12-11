import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
// defines a Jest test suite using the 'describe' function, named "<App />"
describe ("<App />", () => {
  // defines a specific test case witin the "<App />" test suite. The test case is named "renders home link"
  it("renders home link", () => {
    // 'render' function renders a React component. In this case, it is rendering the <App /> component within a '<BrowserRouter>'
    render(
      <BrowserRouter>
      <App />
    </BrowserRouter>
    )
    // function 'getByText' used to find an element in the rendered component that contains the text "home" case-sensitively, due to the regex '/home/i'
    // the result of 'getByText' is stored in homeElement
    const homeElement = screen.getByText(/home/i);
    // asserts that the 'homeElement' should be present in the document. if it is not, the test will fail.
    expect(homeElement).toBeInTheDocument();
  })
})
