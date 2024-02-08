import { ScreenHeader } from "@components/index";
import { Center, Text, VStack } from "native-base";
import React from "react";

export const History = () => {
  return (
    <VStack flex={1}>
      <ScreenHeader title="Histórico de exercício" />
    </VStack>
  );
};
