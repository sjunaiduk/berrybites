import { Container, Flex } from "@chakra-ui/react";
import Navbar from "./components/Navbar/Navbar";
import RestaurantsGrid from "./components/RestaurantsGrid/RestaurantsGrid";
import SearchBar from "./components/SearchBar/SearchBar";
import { useRestaurants } from "./hooks/useRestaurants";

function App() {
  const { data } = useRestaurants("LU11TU");
  return (
    <>
      <Navbar />
      <Container maxWidth={"800px"}>
        <Flex justifyContent={"center"} flexDirection={"column"}>
          <SearchBar />
          <RestaurantsGrid restaurants={data || []} />
        </Flex>
      </Container>
    </>
  );
}

export default App;
