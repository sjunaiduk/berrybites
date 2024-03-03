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
import { IsPostcodeValid } from "../../utils/postcodeChecker";
import { useState } from "react";

interface Props {
  postcode: string;
  setPostcode: (value: string) => void;
  fetchData: () => void;
}
function SearchBar({ postcode, setPostcode, fetchData }: Props) {
  const [isValid, setisValid] = useState(true);

  const onSearch = () => {
    var valid = IsPostcodeValid(postcode);
    if (valid) {
      fetchData();
    }
    setisValid(valid);
  };
  const onInputChange = (text: string) => {
    setPostcode(text);
    setisValid(true);
  };

  return (
    <FormControl isInvalid={!isValid}>
      <InputGroup mt={8} size="lg" background={"white"}>
        <InputLeftElement>
          <SearchIcon />
        </InputLeftElement>
        <Input
          border={"1.5px solid #760085"}
          _focus={{
            borderColor: "#760085",
          }}
          _hover={{}}
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
            _hover={{ bg: "#900085" }}
            backgroundColor={"#760085"}
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
