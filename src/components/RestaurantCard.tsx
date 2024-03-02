import {
  Heading,
  Text,
  Image,
  Box,
  Card,
  HStack,
  Flex,
  Tag,
  SimpleGrid,
} from "@chakra-ui/react";

import { StarIcon } from "@chakra-ui/icons";
interface Props {
  restaurant: Restaurant;
}
const RestaurantCard = ({ restaurant }: Props) => {
  return (
    <Card px={4} py={6} background={"#fff"} color={"#000"}>
      <HStack justifyContent={"space-around"} spacing={3}>
        <HStack>
          <Flex>
            <Image src={restaurant.logoUrl} width={"100%"} />
          </Flex>
          <Box ml={4}>
            <Heading size="lg" mb={7}>
              {restaurant.name}
            </Heading>

            <Flex mt={3} alignItems={"center"}>
              <StarIcon color={"orange"} mr={1} />{" "}
              {restaurant.rating.starRating} stars
            </Flex>

            <SimpleGrid
              mt={4}
              width={"fit-content"}
              spacing={1}
              templateColumns="repeat(3, max-content)"
            >
              {restaurant.cuisines.map((cuisine) => (
                <Tag size={"sm"} color={"gray"}>
                  {cuisine.name}
                </Tag>
              ))}
            </SimpleGrid>
          </Box>
        </HStack>

        <Flex flexDirection={"column"} mt={"3rem"}>
          <Text>{restaurant.address.firstLine}</Text>
          <Text>{restaurant.address.city}</Text>
          <Text>{restaurant.address.postalCode}</Text>
        </Flex>
      </HStack>
    </Card>
  );
};

export default RestaurantCard;
