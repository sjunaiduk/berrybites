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
        placeholder="Enter password"
        textOverflow={"hidden"}
        pr={"10rem"}
      />
      <InputRightElement width="6rem">
        <Button backgroundColor={"#ff8000"} borderRadius={20}>
          Search
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}

export default SearchBar;
