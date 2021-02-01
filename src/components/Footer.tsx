import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import { SocialIcon } from "react-social-icons";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <Box
      maxW="700px"
      margin="30px auto"
      bgColor="white"
      borderRadius="5px"
      boxShadow="lg"
      p="10px"
      w={["95%"]}
      color="black"
    >
      <Flex align="center" justify="center">
        <Text>This page brought to you by:</Text>
        <Link href="http://www.completepool.ca/">
          <Image src="/images/completeLogo-removebg-preview.png"></Image>
        </Link>
      </Flex>
      <Flex align="center" justify="center" direction="column">
        <Text>
          Check us out at{" "}
          <span style={{ color: "blue", textDecoration: "underline" }}>
            <a href="http://www.completepool.ca/">www.completepool.ca</a>
          </span>{" "}
          or on our social media page:
        </Text>
        <Box>
          <SocialIcon
            url="https://www.facebook.com/Complete-Pool-Spa-162572507132782/"
            style={{ height: 45, width: 45, marginTop: "10px" }}
          />
        </Box>
      </Flex>
    </Box>
  );
};
