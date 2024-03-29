import { Text, Pressable, IPressableProps } from "native-base";
import React from "react";

interface Props extends IPressableProps {
  name: string;
  isActive: boolean;
}

export const Group = ({ name, isActive, ...rest }: Props) => {
  return (
    <Pressable
      mr={3}
      h={10}
      w={24}
      bg={"gray.600"}
      rounded={"md"}
      justifyContent={"center"}
      alignItems={"center"}
      overflow={"hidden"}
      isPressed={isActive}
      _pressed={{ borderColor: "green.500", borderWidth: 1 }}
      {...rest}
    >
      <Text
        color={isActive ? "green.500" : "gray.200"}
        textTransform={"uppercase"}
        fontSize={"xs"}
        fontWeight="bold"
      >
        {name}
      </Text>
    </Pressable>
  );
};
