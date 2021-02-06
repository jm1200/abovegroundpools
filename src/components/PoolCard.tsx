import { Box, Image, Stack, Img } from "@chakra-ui/react";
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
    <Stack direction={"column"} spacing="0" boxShadow="lg" w="650px">
      <Img
        boxSize={["100%"]}
        objectFit="cover"
        src={src}
        alt={imgAltText}
        borderTopRightRadius={["5px"]}
        borderBottomRightRadius={["0"]}
        borderTopLeftRadius={["5px"]}
        borderBottomLeftRadius={["0"]}
      ></Img>
      <Box>
        <PriceTable poolData={poolData} chartTitle={chartTitle} />
      </Box>
    </Stack>
  );
};
