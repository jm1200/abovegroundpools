import { Box, Flex, Text } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";
import { CustomIcon } from "./CustomIcon";
import { IconType } from "react-icons";
interface HeaderCardContainerProps {
  Component: IconType;
  iconColor?: string;
  iconSize?: number;
  text: string;
  textFontSize?: string;
  textColor?: string;
  ml?: string;
}

export const HeaderCardContainer: React.FC<HeaderCardContainerProps> = ({
  Component,
  text,
  iconColor = "white",
  textColor = "gray.900",
  ml = "0px",
  textFontSize = "1.2em",
  iconSize = 30,
}) => {
  const theme = useTheme();
  return (
    <Flex
      w={["100%"]}
      justify={["space-between", "space-between", "start"]}
      align="center"
      ml={ml}
    >
      <CustomIcon
        IconComponent={Component}
        color={iconColor}
        iconSize={iconSize}
      />
      <Text
        whiteSpace="nowrap"
        color={textColor}
        fontSize={textFontSize}
        ml={1}
      >
        {text}
      </Text>
    </Flex>
  );
};
