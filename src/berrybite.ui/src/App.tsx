import { Container, Flex } from "@chakra-ui/react";
import Navbar from "./components/Navbar/Navbar";
import RestaurantsGrid from "./components/RestaurantsGrid/RestaurantsGrid";
import { HardcodedRestaurants } from "./utils/data";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  return (
    <>
      <Navbar />
      <Container maxWidth={"800px"}>
        <Flex justifyContent={"center"} flexDirection={"column"}>
          <SearchBar />
          <RestaurantsGrid restaurants={HardcodedRestaurants} />
        </Flex>
      </Container>
    </>
  );
}

export default App;
