import { HistoryCard, ScreenHeader } from "@components/index";
import { Center, Text, VStack } from "native-base";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export const History = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <VStack flex={1}>
        <ScreenHeader title="Histórico de exercício" />
        <HistoryCard />
      </VStack>
    </SafeAreaView>
  );
};
