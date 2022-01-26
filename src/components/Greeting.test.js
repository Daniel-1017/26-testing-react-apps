import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

test("renders hello world as a text", () => {
  // Arrange
  render(<Greeting />);

  // Act
  // ...Nothing

  // Assert
  const helloWorldElement = screen.getByText("Hello World");
  expect(helloWorldElement).toBeInTheDocument();
});
