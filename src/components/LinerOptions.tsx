import { Box, Stack, Text, Img, Flex } from "@chakra-ui/react";

interface LinerOptionsProps {}

export const LinerOptions: React.FC<LinerOptionsProps> = ({}) => {
  return (
    <Box>
      <Text
        w="70%"
        margin="auto"
        textAlign="center"
        color="black"
        fontSize="28px"
        fontWeight="bold"
        py={4}
      >
        Available Liner Patterns:
      </Text>
      <Stack direction="row" justifyContent="center" spacing={10} color="black">
        <Flex direction="column">
          <Img w="200px" h="300px" src="/images/lakota_OL.jpg" />
          <Text textAlign="center">Lakota Overlap</Text>
        </Flex>
        <Flex direction="column">
          <Img w="200px" h="300px" src="/images/bluemarbleclassic.jpg" />

          <Text textAlign="center">Blue Marble Overlap</Text>
        </Flex>
      </Stack>
    </Box>
  );
};
