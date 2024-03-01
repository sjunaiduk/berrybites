import { Button, HStack, Image, Text, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import logo from "../assets/berrybitelogo.svg";
const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack
      justifyContent={"space-between"}
      px={3}
      py={3}
      bg={`${colorMode == "dark" ? "#ff8000" : "white"}`}
      color={`${colorMode == "dark" ? "white" : "#ff8000"}`}
    >
      <HStack spacing={0}>
        <Image src={logo} />
        <Text fontWeight={600} fontSize={"x-large"}>
          BerryBite
        </Text>
      </HStack>
      <Button
        className={`${colorMode == "dark" ? "moon-icon" : "sun-icon"}`}
        onClick={() => toggleColorMode()}
        bg={"#ff9e007d"}
        data-testid={"toggle-theme"}
      >
        {colorMode == "dark" ? <MoonIcon /> : <SunIcon />}
      </Button>
    </HStack>
  );
};

export default Navbar;
