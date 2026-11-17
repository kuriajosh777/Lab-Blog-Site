import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import App from "../components/App";

test("renders the correct child components", () => {
  const { container } = render(<App />);
  expect(container.querySelector(".App")).toBeInTheDocument();
  expect(container.querySelector(".App header")).toBeInTheDocument();
  expect(container.querySelector(".App aside")).toBeInTheDocument();
  expect(container.querySelector(".App main")).toBeInTheDocument();
});

test("passes blog data down as props to the children", () => {
  const { container } = render(<App />);
  expect(container.querySelector("h1")).toHaveTextContent("Underreacted");
  expect(container.querySelector("aside p")).toHaveTextContent(
    "A blog about learning React"
  );
  expect(container.querySelectorAll("article")).toHaveLength(3);
});
