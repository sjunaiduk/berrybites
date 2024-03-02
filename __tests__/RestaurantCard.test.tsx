import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import RestaurantCard from "../src/components/RestaurantCard";

describe("Restaurant Card", () => {
  it("should show restaraunt details passed in as a prop", () => {
    // Arrange
    const restaraunt: Restaurant = {
      address: {
        city: "London",
        firstLine: "23 St Peters",
        postalCode: "LU4 9TJ",
      },
      id: "1",
      cuisines: [
        {
          name: "Chicken",
          uniqueName: "chicken",
        },
      ],
      logoUrl: "#",
      name: "Dodo Bird Delight",
      rating: {
        starRating: 5,
      },
    };

    // Act
    render(<RestaurantCard restaurant={restaraunt} />);

    // Asserte

    expect(screen.queryByText("Dodo Bird Delight")).toBeInTheDocument();
    expect(screen.queryByText("Chicken")).toBeInTheDocument();
    expect(screen.queryByText("London")).toBeInTheDocument();
  });
});
