import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navbar from "./Navbar";
import { ChakraUiWrapper } from "../../../__tests__/utils";

describe("Navbar", () => {
  afterEach(() => cleanup());
  it("Should render correctly", async () => {
    // Arrange
    const { queryByText } = render(<Navbar />);

    // Assert
    await waitFor(() => expect(queryByText("BerryBite")).toBeInTheDocument());
  });

  it("should change the class of toggle theme when toggle theme button is clicked", async () => {
    // Arrange
    const user = userEvent.setup();
    render(
      <ChakraUiWrapper>
        <Navbar />
      </ChakraUiWrapper>
    );
    const toggleThemeButton = await screen.queryByTestId("toggle-theme");
    var classesBefore = toggleThemeButton?.classList.value;

    // Act
    await user.click(toggleThemeButton as HTMLElement);
    var classesAfter = toggleThemeButton?.classList.value;

    // Assert
    expect(classesBefore).not.toEqual(classesAfter);
  });
});
