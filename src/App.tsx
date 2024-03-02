import { Container, Flex } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import RestaurantsGrid from "./components/RestaurantsGrid";
import { HardcodedRestaurants } from "./utils";
import SearchBar from "./components/SearchBar";

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
