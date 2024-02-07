import { Group } from "@components/Group";
import { HomeHeader } from "@components/index";
import { Center, Text, VStack } from "native-base";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <VStack flex={1}>
        <HomeHeader />
        <Group onPress={() => console.log("first")} name="Costas" />
      </VStack>
    </SafeAreaView>
  );
};
