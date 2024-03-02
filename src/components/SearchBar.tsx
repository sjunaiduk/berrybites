import {
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  InputRightElement,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";

function SearchBar() {
  const [postcode, setPostcode] = useState("");
  return (
    <FormControl isInvalid={false}>
      <InputGroup mt={8} size="lg">
        <InputLeftElement>
          <SearchIcon />
        </InputLeftElement>
        <Input
          placeholder="Search restaurants by postcode"
          textOverflow={"ellipsis"}
          value={postcode}
          onChange={(e) => setPostcode(e.target.value)}
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
      <FormErrorMessage>Email is required.</FormErrorMessage>
    </FormControl>
  );
}

export default SearchBar;
