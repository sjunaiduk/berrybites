import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../../assets/berrybitelogo.svg";
const Navbar = () => {
  return (
    <HStack justifyContent={"space-between"} px={3} py={3} bg={`#560085`}>
      <HStack spacing={0}>
        <Image src={logo} />
        <Text color={"white"} fontWeight={600} fontSize={"x-large"}>
          BerryBite
        </Text>
      </HStack>
    </HStack>
  );
};

export default Navbar;
