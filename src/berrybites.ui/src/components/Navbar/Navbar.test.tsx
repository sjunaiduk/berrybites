import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render, waitFor } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Navbar", () => {
  afterEach(() => cleanup());
  it("Should render correctly", async () => {
    // Arrange
    const { queryByText } = render(<Navbar />);

    // Assert
    await waitFor(() => expect(queryByText("BerryBites")).toBeInTheDocument());
  });
});
