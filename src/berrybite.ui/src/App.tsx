import {
  Box,
  Container,
  Flex,
  Heading,
  Skeleton,
  Stack,
  Text,
} from "@chakra-ui/react";
import Navbar from "./components/Navbar/Navbar";
import RestaurantsGrid from "./components/RestaurantsGrid/RestaurantsGrid";
import SearchBar from "./components/SearchBar/SearchBar";
import { useRestaurants } from "./hooks/useRestaurants";
import { useMemo, useState } from "react";
import { HardcodedRestaurants } from "./utils/data";
import RestaurantCard from "./components/RestaurantCard/RestaurantCard";

function App() {
  const [postcode, setPostcode] = useState("");

  const { data, refetch, isLoading, isFetched } = useRestaurants(postcode);

  // When postcode state changes, the data return changes automatically
  // By only 'computing' restaraunt data when isLoading changes
  // the restaraunts currently shown will only change when the user clicks 'search' for a valid postcode.
  const restaurantData = useMemo(() => data, [isLoading]);

  if (isFetched && restaurantData?.length === 0) {
    return (
      <Box mt={4} textAlign="center" p={5}>
        <Heading size="lg" mb={2}>
          No Restaurants Found
        </Heading>
        <Text fontSize="md">
          We couldn't find any restaurants matching your search.
        </Text>
      </Box>
    );
  }
  return (
    <>
      <Navbar />
      <Container maxWidth={"800px"}>
        <Flex justifyContent={"center"} flexDirection={"column"}>
          <SearchBar
            fetchData={refetch}
            postcode={postcode}
            setPostcode={setPostcode}
          />
          {isLoading ? (
            <Stack mt={"4rem"}>
              {HardcodedRestaurants.map((restaurant, index) => (
                <Skeleton key={index} borderRadius={4}>
                  <RestaurantCard restaurant={restaurant} />
                </Skeleton>
              ))}
            </Stack>
          ) : (
            <RestaurantsGrid restaurants={restaurantData?.slice(0, 10) || []} />
          )}
        </Flex>
      </Container>
    </>
  );
}

export default App;
