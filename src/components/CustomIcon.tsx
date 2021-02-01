import { Flex, Icon } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";
import { IconType } from "react-icons/lib";
interface CustomIconProps {
  IconComponent: IconType;
  iconSize: number;
  color?: string;
}

export const CustomIcon: React.FC<CustomIconProps> = ({
  IconComponent,
  color,
  iconSize,
}) => {
  const theme = useTheme();

  let iconColor = color ? color : theme.colors.primary;
  return (
    <Flex
      // padding={4}
      borderWidth="3px"
      borderColor={iconColor}
      borderRadius={iconSize / 2 + "px"}
      w={iconSize + "px"}
      h={iconSize + "px"}
      justify="center"
      align="center"
    >
      <Icon
        as={IconComponent}
        boxSize={iconSize / 1.5 + "px"}
        color={iconColor}
      />
    </Flex>
  );
};
