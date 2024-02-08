import { Box, Center, Heading } from "native-base";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

interface Props {
  title: string;
}

export const ScreenHeader = ({ title }: Props) => {
  return (
    <Center bg={"gray.600"} pb={6} pt={10}>
      <Heading color="gray.200" fontSize={"xl"}>
        {title}
      </Heading>
    </Center>
  );
};
