import { Container, Flex } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import RestaurantsGrid from "./components/RestaurantsGrid";
import { HardcodedRestaurants } from "./utils";

function App() {
  return (
    <>
      <Navbar />
      <Container maxWidth={"800px"}>
        <Flex justifyContent={"center"}>
          <RestaurantsGrid restaurants={HardcodedRestaurants} />
        </Flex>
      </Container>
    </>
  );
}

export default App;
