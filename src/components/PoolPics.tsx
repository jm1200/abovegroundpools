import { Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { content } from "../data/content";

interface PoolPicsProps {}

export const PoolPics: React.FC<PoolPicsProps> = ({}) => {
  return (
    <SimpleGrid columns={[1, 1, 2, 3]} spacingX={2} spacingY={5}>
      {content.poolpics.map((pic, i) => {
        return (
          <Stack key={i}>
            <Text w="100%" color="black" fontWeight="bold" textAlign="center">
              {pic.desc}
            </Text>
            <Image
              //  boxSize="100px"
              // objectFit="cover"
              src={pic.src}
              alt={pic.desc}
              borderRadius="5px"
            />
          </Stack>
        );
      })}
    </SimpleGrid>
  );
};
