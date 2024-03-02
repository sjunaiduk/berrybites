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
import { IsPostcodeValid } from "../../utils/postcodeChecker";

function SearchBar() {
  const [postcode, setPostcode] = useState("");
  const [isValid, setisValid] = useState(true);

  const onSearch = () => setisValid(IsPostcodeValid(postcode));
  const onInputChange = (text: string) => {
    setPostcode(text);
    setisValid(true);
  };
  return (
    <FormControl isInvalid={!isValid}>
      <InputGroup mt={8} size="lg">
        <InputLeftElement>
          <SearchIcon />
        </InputLeftElement>
        <Input
          data-testid={"postcode-searchbar"}
          placeholder="Search restaurants by postcode"
          textOverflow={"ellipsis"}
          value={postcode}
          onChange={(e) => {
            onInputChange(e.target.value);
          }}
          pr={{
            base: "7rem",
            md: "10rem",
          }}
        />
        <InputRightElement width="6rem">
          <Button
            data-testid={"postcode-search-button"}
            _hover={{ bg: "#ff9000" }}
            backgroundColor={"#ff8000"}
            borderRadius={20}
            color={"white"}
            onClick={() => onSearch()}
          >
            Search
          </Button>
        </InputRightElement>
      </InputGroup>
      <FormErrorMessage data-testid="searchbar-error-message">
        Postcode entered is invalid.
      </FormErrorMessage>
    </FormControl>
  );
}

export default SearchBar;
