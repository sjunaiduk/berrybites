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
  VStack,
  Stack,
} from "@chakra-ui/react";

import { StarIcon } from "@chakra-ui/icons";
interface Props {
  restaurant: Restaurant;
}
const RestaurantCard = ({ restaurant }: Props) => {
  return (
    <Card minW={"320px"} px={4} py={6} background={"#fff"} color={"#000"}>
      <SimpleGrid
        gap={{
          base: 2,
          sm: 10,
        }}
        templateColumns={{
          base: "1fr",
          sm: "auto 1fr",
        }}
      >
        <Flex id="image" alignItems={"center"}>
          <Image src={restaurant.logoUrl} />
        </Flex>
        <Stack id="content" width={"100%"}>
          <Heading size="lg" mb={7}>
            {restaurant.name}
          </Heading>
          <SimpleGrid
            templateColumns={{
              base: "1fr",
              sm: "auto 1fr",
            }}
          >
            <VStack alignItems={"left"}>
              <Flex alignItems={"center"}>
                <StarIcon color={"orange"} mr={1} />{" "}
                <Text fontWeight={"bold"} className="star-rating">
                  {restaurant.rating.starRating}
                </Text>
              </Flex>

              <SimpleGrid
                mt={{
                  base: 2,
                  sm: 4,
                }}
                width={"fit-content"}
                spacing={1}
                templateColumns="repeat(3, max-content)"
              >
                {restaurant.cuisines.map((cuisine, index) => (
                  <Tag key={index} size={"sm"} color={"gray"}>
                    {cuisine.name}
                  </Tag>
                ))}
              </SimpleGrid>
            </VStack>

            <Flex
              alignItems={{
                base: "auto",
                sm: "flex-end",
              }}
              mt={{
                base: 4,
                sm: 0,
              }}
              width={"100%"}
              flexDirection={"column"}
            >
              <Box
                mr={{
                  sm: 7,
                }}
              >
                {" "}
                <Flex
                  flexDirection={{
                    base: "row",
                    sm: "column",
                  }}
                  gap={1}
                  wrap={"wrap"}
                  fontSize={"sm"}
                  color={"grey"}
                >
                  <Text>{restaurant.address.firstLine}</Text>
                  <Text>{restaurant.address.city}</Text>
                  <Text>{restaurant.address.postalCode}</Text>
                </Flex>
              </Box>
            </Flex>
          </SimpleGrid>
        </Stack>
      </SimpleGrid>
    </Card>
  );
};

export default RestaurantCard;
