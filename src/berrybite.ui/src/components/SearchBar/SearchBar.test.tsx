import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import userEvent from "@testing-library/user-event";
import App from "../../App";
import { QueryClientWrapper } from "../../../__tests__/utils";

describe("Search bar", () => {
  afterEach(() => cleanup());

  it.each(["123", "ABC", "acbscabdjals;lasd"])(
    "Should show an error message if the entered postcode is invalid when search is clicked",
    async (userInput: string) => {
      // Arrange
      const Wrapper = QueryClientWrapper();
      const user = userEvent.setup();
      render(
        <Wrapper>
          <App />
        </Wrapper>
      );
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
    const Wrapper = QueryClientWrapper();
    const user = userEvent.setup();
    render(
      <Wrapper>
        <App />
      </Wrapper>
    );
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

  it("Should NOT clear restaurant cards when user types into the search bar", async () => {
    // Arrange
    const Wrapper = QueryClientWrapper();
    const user = userEvent.setup();
    render(
      <Wrapper>
        <App />
      </Wrapper>
    );
    var searchBar = await screen.queryByTestId("postcode-searchbar");
    var searchButton = await screen.queryByTestId("postcode-search-button");

    // Act
    await user.type(searchBar as HTMLElement, "LU1 1TU");
    await user.click(searchButton as HTMLElement);
    await user.type(searchBar as HTMLElement, "LU3 9TJ");

    // Assert
    expect(
      screen.queryByTestId("searchbar-error-message")
    ).not.toBeInTheDocument();
    expect(screen.queryAllByTestId("restaurant-card").length).not.toBe(0);
  });
});
