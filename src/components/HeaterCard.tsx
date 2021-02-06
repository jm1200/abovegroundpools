import {
  Box,
  Image,
  Stack,
  Img,
  Text,
  Flex,
  Thead,
  Table,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import React from "react";
import { content } from "../data/content";

interface IHeaterCardProps {}

export const HeaterCard: React.FC<IHeaterCardProps> = ({}) => {
  const { additionalProducts } = content;
  return (
    <Stack direction={["column", "column"]} spacing="0" boxShadow="lg">
      <Img
        boxSize={["100%"]}
        objectFit="cover"
        src="/images/HeatersTooCard.jpg"
        alt="Above Ground Pool Heater picture"
        borderTopRightRadius={["5px", "0"]}
        borderBottomRightRadius={["0"]}
        borderTopLeftRadius={["5px"]}
        borderBottomLeftRadius={["0", "5px"]}
      ></Img>
      <Box>
        <Flex
          w="100%"
          // minWidth="280px"
          minH={["auto", "100%"]}
          display="block"
          bgColor="gray.800"
          borderTopRightRadius={["0", "5px"]}
          borderBottomRightRadius={["5px"]}
          borderTopLeftRadius={["0"]}
          borderBottomLeftRadius={["5px", "0"]}
        >
          <Text
            w="100%"
            textAlign="center"
            color="white"
            p="5px"
            fontSize="18px"
            fontWeight="bold"
          >
            Additional Products
          </Text>
          <Table w="100%" minH={["auto", "auto", "auto", "400px"]} size="sm">
            {/* <TableCaption>* Millivolt Standing Pilot Model</TableCaption> */}
            <Thead>
              <Tr>
                <Th color="gray.100" textAlign="center">
                  Product
                </Th>
                <Th color="gray.100" textAlign="center">
                  Info
                </Th>
                <Th color="gray.100" textAlign="center">
                  Price
                </Th>
              </Tr>
            </Thead>

            <Tbody color="gray.100">
              {additionalProducts.map((prod) => {
                return (
                  <Tr key={prod.name}>
                    <Td textAlign="center">{prod.name}</Td>
                    <Td textAlign="center">{prod.detail}</Td>
                    <Td textAlign="center">{prod.price}</Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </Flex>
      </Box>
    </Stack>
  );
};
