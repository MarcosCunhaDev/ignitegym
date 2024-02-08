import { ExerciseCard } from "@components/ExerciseCard";
import { Group } from "@components/Group";
import { HomeHeader } from "@components/index";
import { Center, Text, VStack, HStack, FlatList, Heading } from "native-base";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const defaultGroups = ["Costas", "Ombro", "Bíceps", "tríceps"];
type GroupVatiations = keyof typeof defaultGroups;

export const Home = () => {
  const [groups, setGroups] = useState(defaultGroups);
  const [exercises, setExercises] = useState([
    "Puxada",
    "remada",
    "Levantamento",
    "Levantamento1",
    "Levantamento2",
    "Levantamento3",
  ]);
  const [selectedGroup, setSelectedGroup] = useState<GroupVatiations | null>(
    null
  );

  const handleSelectGroup = (group: GroupVatiations) => {
    setSelectedGroup(group);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <VStack flex={1}>
        <HomeHeader />
        <FlatList
          my={10}
          _contentContainerStyle={{ px: 8 }}
          maxH={10}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={groups}
          keyExtractor={(item) => item}
          renderItem={({ item }) => {
            return (
              <Group
                name={item}
                isActive={selectedGroup === item}
                onPress={() => handleSelectGroup(item)}
              />
            );
          }}
        />
        <VStack flex={1} px={8}>
          <HStack justifyContent={"space-between"} mb={4}>
            <Heading color={"gray.200"} fontSize={"md"}>
              Exercícios
            </Heading>
            <Text color={"gray.200"} fontSize={"sm"}>
              4
            </Text>
          </HStack>
          <FlatList
            _contentContainerStyle={{ paddingBottom: 15 }}
            showsVerticalScrollIndicator={false}
            data={exercises}
            keyExtractor={(item) => item}
            renderItem={({ item }) => {
              return <ExerciseCard title={item} description={item} />;
            }}
          />
        </VStack>
      </VStack>
    </SafeAreaView>
  );
};
