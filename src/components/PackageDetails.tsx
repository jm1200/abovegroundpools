import {
  Box,
  ListItem,
  Stack,
  Table,
  TableCaption,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  UnorderedList,
} from "@chakra-ui/react";
import { features } from "process";
import React from "react";
import { content } from "../data/content";

interface PackageDetailsProps {}

export const PackageDetails: React.FC<PackageDetailsProps> = ({}) => {
  const { included, optional } = content.packageDetails;

  return (
    <Stack
      direction={["column", "column", "column", "row"]}
      justifyContent="center"
    >
      <Box w="100%">
        <Text
          w="70%"
          margin="auto"
          textAlign="center"
          color="black"
          fontSize="28px"
          fontWeight="bold"
          py={4}
        >
          Your Compete Pool Above Ground package includes:
        </Text>
        <Table
          size="md"
          bgColor="gray.800"
          p={5}
          borderRadius="5px"
          color="white"
        >
          <Thead color="white">
            <Tr>
              <Th fontSize="16px" fontWeight="bold">
                Product
              </Th>
              <Th fontSize="16px" fontWeight="bold">
                price
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {included.map((feature) => {
              return (
                <Tr key={feature.feature}>
                  <Td fontWeight="bold" fontSize="16px">
                    {feature.feature}
                  </Td>
                  <Td fontSize="16px">{feature.price}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </Box>
      <Box p={5}>
        <Text
          w="70%"
          margin="auto"
          textAlign="center"
          color="black"
          fontSize="28px"
          fontWeight="bold"
          py={4}
        >
          Your Compete Pool Above Ground Optional Add-Ons:
        </Text>
        <Table
          size="md"
          bgColor="blue.800"
          p={5}
          borderRadius="5px"
          color="white"
        >
          <Thead color="white">
            <Tr>
              <Th fontSize="16px" fontWeight="bold">
                Product
              </Th>
              <Th fontSize="16px" fontWeight="bold">
                price
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {optional.map((feature) => {
              return (
                <Tr key={feature.feature}>
                  <Td fontWeight="bold" fontSize="18px">
                    {feature.feature}
                  </Td>
                  <Td fontSize="18px">{feature.price}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </Box>
    </Stack>
  );
};
