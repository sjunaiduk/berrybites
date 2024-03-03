import { HStack, Image, Text } from "@chakra-ui/react";
const Navbar = () => {
  return (
    <HStack justifyContent={"space-between"} px={3} py={3} bg={`#560085`}>
      <HStack spacing={0}>
        <Image src={"/berrybitelogo.svg"} />
        <Text color={"white"} fontWeight={600} fontSize={"x-large"}>
          BerryBites
        </Text>
      </HStack>
    </HStack>
  );
};

export default Navbar;
