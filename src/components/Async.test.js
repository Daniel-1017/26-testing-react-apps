import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  test("renders post if the request succeeds", async () => {
    // Arrage
    render(<Async />);

    // Assert
    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).not.toHaveLength(0);
  });
});

// difference between find and get
// find returns a promise so it will wait, the default is 1s

// with async it will wait until our test is really done
