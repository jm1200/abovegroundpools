import { Flex, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";
import { PoolData } from "../data/content";

interface PriceTableProps {
  poolData: PoolData[];
  chartTitle: string;
}

export const PriceTable: React.FC<PriceTableProps> = ({
  poolData,
  chartTitle,
}) => {
  return (
    <Flex
      w="100%"
      // minWidth="280px"
      minH={["auto", "100%"]}
      display="block"
      bgColor="gray.800"
      borderTopRightRadius={["0"]}
      borderBottomRightRadius={["5px"]}
      borderTopLeftRadius={["0"]}
      borderBottomLeftRadius={["5px"]}
    >
      <Text
        w="100%"
        textAlign="center"
        color="white"
        p="5px"
        fontSize="18px"
        fontWeight="bold"
      >
        {chartTitle} Pools
      </Text>
      <Table w="100%" minH={["auto", "auto", "auto", "400px"]} size="sm">
        {/* <TableCaption>* Millivolt Standing Pilot Model</TableCaption> */}
        <Thead>
          <Tr>
            <Th color="gray.100" textAlign="center">
              Shape
            </Th>
            <Th color="gray.100" textAlign="center">
              Size
            </Th>
            <Th color="gray.100" textAlign="center">
              Price
            </Th>
          </Tr>
        </Thead>

        <Tbody color="gray.100">
          {poolData.map((pool) => (
            <Tr key={pool.size}>
              <Td textAlign="center">{pool.shape}</Td>
              <Td textAlign="center">{pool.size}</Td>
              <Td textAlign="center">{pool.price}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Flex>
  );
};
