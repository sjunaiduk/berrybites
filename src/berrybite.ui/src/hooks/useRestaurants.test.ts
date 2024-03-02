import { renderHook, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { useRestaurants } from "./useRestaurants";
import { QueryClientWrapper } from "../../__tests__/utils";

describe("useRestaurants hook", () => {
  it("should return a list of restaraunts", async () => {
    // Arrange
    const wrapper = QueryClientWrapper();

    // Act
    const { result } = renderHook(() => useRestaurants("LU1 1TU"), { wrapper });
    result.current.refetch();
    // Assert
    await waitFor(() => expect(result.current.data).toBeTruthy(), {
      timeout: 5000,
    });
  });
});
