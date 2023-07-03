import { render, screen } from "@testing-library/react";
import { getByText } from "@testing-library/jest-dom"; // Imports the `toBeInTheDocument` function

import App from "./App";

describe("<App />", () => {
  test("renders <App /> component correctly", () => {
    const { getByText } = render(<App />);
    expect(getByText(/sewing projects/i)).toBeInTheDocument();
  });
});
