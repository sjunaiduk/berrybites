import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import SearchBar from "./SearchBar";
import userEvent from "@testing-library/user-event";

describe("Search bar", () => {
  afterEach(() => cleanup());

  it.each(["123", "ABC", "acbscabdjals;lasd"])(
    "Should show an error message if the entered postcode is invalid when search is clicked",
    async (userInput: string) => {
      // Arrange
      const user = userEvent.setup();
      render(<SearchBar />);
      var searchBar = await screen.queryByTestId("postcode-searchbar");
      var searchButton = await screen.queryByTestId("postcode-search-button");

      // Act
      await user.type(searchBar as HTMLElement, userInput);
      await user.click(searchButton as HTMLElement);

      // Assert
      expect(
        screen.queryByTestId("searchbar-error-message")
      ).toBeInTheDocument();
    }
  );

  it("Should NOT show error message if the entered postcode is valid when search is clicked", async () => {
    // Arrange
    const user = userEvent.setup();
    render(<SearchBar />);
    var searchBar = await screen.queryByTestId("postcode-searchbar");
    var searchButton = await screen.queryByTestId("postcode-search-button");

    // Act
    await user.type(searchBar as HTMLElement, "LU1 1TU");
    await user.click(searchButton as HTMLElement);

    // Assert
    expect(
      screen.queryByTestId("searchbar-error-message")
    ).not.toBeInTheDocument();
  });
});
