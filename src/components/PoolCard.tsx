import { Box, Image, Stack } from "@chakra-ui/react";
import React from "react";
import { PoolData } from "../data/content";
import { PriceTable } from "./PriceTable";

interface IPoolCardProps {
  src: string;
  imgAltText: string;
  poolData: PoolData[];
  chartTitle: string;
}

export const PoolCard: React.FC<IPoolCardProps> = ({
  src,
  imgAltText,
  poolData,
  chartTitle,
}) => {
  return (
    <Stack direction={["column", "column", "row"]} spacing="0">
      <Box
        w="500px"
        h="400px"
        backgroundColor="white"
        backgroundImage={`url(${src})`}
        backgroundPosition="bottom"
        backgroundRepeat="no-repeat"
        borderTopRightRadius={["5px", "0"]}
        borderBottomRightRadius={["0"]}
        borderTopLeftRadius={["5px"]}
        borderBottomLeftRadius={["0", "5px"]}
      ></Box>
      <Box w="500px">
        <PriceTable poolData={poolData} chartTitle={chartTitle} />
      </Box>
    </Stack>
  );
};
