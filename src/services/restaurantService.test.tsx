import { describe, expect, it } from "vitest";
import { RestaurantService } from "./restaurantService";

describe("Restaurant Service", () => {
  it("should successfully call the justeat endpoint and return a response", async () => {
    // Arrange
    const postcode = "LU11TU";
    var service = new RestaurantService();

    // Act
    var result = await service.GetAll(postcode);

    // Assert
    expect(result.length).not.toBe(0);
    expect(result[0].name).not.toBeUndefined();
  });
});
