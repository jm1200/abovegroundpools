import { Box, Flex, Img, Link, Stack, useTheme } from "@chakra-ui/react";
import { MdPhone, MdEmail } from "react-icons/md";
import { FaCanadianMapleLeaf } from "react-icons/fa";
import { IoMdCar } from "react-icons/io";
import { HeaderCardContainer } from "./HeaderCardContainer";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  const iconSize = 40;
  const textSize = "1.1em";
  return (
    <Box
      bgColor="white"
      w="100%"
      position={["relative", "relative", "relative", "fixed"]}
    >
      <Flex
        w={["100%", "100%", "97vw", "92vw"]}
        margin="auto"
        p={["20px", "10px", 0, 0]}
        direction={["column", "row", "column", "row"]}
        bgColor="white"
      >
        <Flex
          w="100%"
          align="center"
          justify={["center", "center", "center", "flex-start"]}
          margin="20px auto"
        >
          <Link href="http://www.completepool.ca/">
            <Img
              margin={["0 auto 20px auto", "0 auto"]}
              h={["30px", "30px", "30px", "30px"]}
              w={["90%", "90%", "80%", "80%"]}
              // objectFit="cover"
              src="/images/poolIcon.png"
              alt="Complete Pool Logo"
            />
          </Link>
        </Flex>

        <Box display="block" flexBasis={{ base: "100%", md: "auto" }}>
          <Stack
            justify="center"
            align="center"
            h="100%"
            spacing="20px"
            direction={["column", "column", "row", "row"]}
          >
            <HeaderCardContainer
              Component={MdPhone}
              text="(519) 636-3123"
              textColor="gray.900"
              textFontSize={textSize}
              iconColor="blue.800"
              iconSize={iconSize}
            />
            <HeaderCardContainer
              Component={MdEmail}
              text="completepool@rogers.com"
              textColor="gray.900"
              textFontSize={textSize}
              iconColor="green.800"
              iconSize={iconSize}
            />
            <HeaderCardContainer
              Component={FaCanadianMapleLeaf}
              text="Canada-Wide Shipping"
              textColor="gray.900"
              textFontSize={textSize}
              iconColor="red.700"
              iconSize={iconSize}
            />
            <HeaderCardContainer
              Component={IoMdCar}
              text="Curbside Pick Up Available"
              textColor="gray.900"
              textFontSize={textSize}
              iconColor="orange.500"
              iconSize={iconSize}
            />
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};
