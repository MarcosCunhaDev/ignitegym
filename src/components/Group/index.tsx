import { Text, Pressable, IPressableProps } from "native-base";
import React from "react";

interface Props extends IPressableProps {
  name: string;
}

export const Group = ({ name, ...rest }: Props) => {
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
      _pressed={{ borderColor: "green.500", borderWidth: 1 }}
      {...rest}
    >
      <Text
        color={"gray.200"}
        textTransform={"uppercase"}
        fontSize={"xs"}
        fontWeight="bold"
      >
        {name}
      </Text>
    </Pressable>
  );
};
