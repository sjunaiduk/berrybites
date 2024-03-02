import {
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  InputRightElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

function SearchBar() {
  return (
    <InputGroup mt={8} size="lg">
      <InputLeftElement>
        <SearchIcon />
      </InputLeftElement>
      <Input
        placeholder="Search restaurants by postcode"
        textOverflow={"ellipsis"}
        pr={{
          base: "7rem",
          md: "10rem",
        }}
      />
      <InputRightElement width="6rem">
        <Button
          _hover={{ bg: "#ff9000" }}
          backgroundColor={"#ff8000"}
          borderRadius={20}
          color={"white"}
        >
          Search
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}

export default SearchBar;
