import { describe, expect, it } from "vitest";
import { IsPostcodeValid } from ".";

describe("Postcode checker", () => {
  it("Should return true for valid postcode permutations", () => {
    // Arrange
    var postcodes = [
      "SW1A 1AA",
      "W1A 0AX",
      "EH1 1BB",
      "B1 1TF",
      "G1 1XW",
      "M1 1AG",
    ];

    // Act
    var results = postcodes.map((code) => IsPostcodeValid(code));

    // Assert
    results.forEach((result) => expect(result).toBeTruthy());
  });

  it("Should return false for invalid postcode permutations", () => {
    // Arrange
    var postcodes = ["abc", "123", "LLL BHX", "LU1 JJJ"];

    // Act
    var results = postcodes.map((code) => IsPostcodeValid(code));

    // Assert
    results.forEach((result) => expect(result).toBeFalsy());
  });
});
