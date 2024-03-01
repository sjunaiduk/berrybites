import { describe, expect, it } from "vitest";
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Navbar from "../src/components/Navbar";
describe("Navbar", () => {
  it("Should render correctly", async () => {
    render(<Navbar />);
    await waitFor(() =>
      expect(screen.queryByText("BerryBite")).toBeInTheDocument()
    );
  });
});
