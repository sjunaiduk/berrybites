import { renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { useRestaurants } from "./useRestaurants";
import { QueryClientWrapper } from "../../__tests__/utils";

describe("useRestaurants hook", () => {
  it("should return a list of restaraunts", () => {
    // Arrange
    const wrapper = QueryClientWrapper();

    // Act
    const { result } = renderHook(useRestaurants, { wrapper });

    // Assert
    expect(result.current.isError).toBeFalsy();
    expect(result.current.data?.length).not.toBe(0);
  });
});
