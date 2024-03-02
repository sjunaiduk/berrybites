import { Container, Flex } from "@chakra-ui/react";
import Navbar from "./components/Navbar/Navbar";
import RestaurantsGrid from "./components/RestaurantsGrid/RestaurantsGrid";
import SearchBar from "./components/SearchBar/SearchBar";
import { useRestaurants } from "./hooks/useRestaurants";
import { useMemo, useState } from "react";

function App() {
  const [postcode, setPostcode] = useState("");

  const { data, refetch, isFetching } = useRestaurants(postcode);

  // When postcode state changes, the data return changes automatically
  // By only 'computing' restaraunt data when isFetching changes
  // the restaraunts currently shown will only change when the user clicks 'search' for a valid postcode.
  const restaurantData = useMemo(() => data, [isFetching]);
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
          <RestaurantsGrid restaurants={restaurantData?.slice(0, 10) || []} />
        </Flex>
      </Container>
    </>
  );
}

export default App;
