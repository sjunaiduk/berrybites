import { SimpleGrid } from "@chakra-ui/react";
import RestaurantCard from "../RestaurantCard/RestaurantCard";

interface Props {
  restaurants: Restaurant[];
}
const RestaurantsGrid = ({ restaurants }: Props) => {
  return (
    <SimpleGrid
      width={"100%"}
      mt={"4rem"}
      spacing={5}
      templateColumns={{
        base: "1fr",
        xlg: "1fr 1fr",
      }}
    >
      {restaurants.map((restaurant, index) => (
        <RestaurantCard key={index} restaurant={restaurant} />
      ))}
    </SimpleGrid>
  );
};

export default RestaurantsGrid;
