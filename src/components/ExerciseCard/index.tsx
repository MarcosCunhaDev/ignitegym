import { HStack, Image, VStack, Text, Heading, Icon } from "native-base";
import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
interface Props extends TouchableOpacityProps {}
import { Entypo } from "@expo/vector-icons";

export function ExerciseCard({ ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <HStack
        bg={"gray.500"}
        p={2}
        pr={4}
        rounded={"md"}
        mb={3}
        alignItems={"center"}
      >
        <Image
          source={{
            uri: "https://conteudo.imguol.com.br/c/entretenimento/0c/2019/12/03/remada-unilateral-com-halteres-1575402100538_v2_300x200.jpg",
          }}
          alt="image do exercício"
          w={16}
          h={16}
          rounded={"md"}
        />
        <VStack marginLeft={4} flexShrink={1} flex={1}>
          <Heading color={"white"} fontSize={"lg"}>
            Puxada frontal
          </Heading>
          <Text color={"gray.200"} fontSize={"sm"} mt={1} numberOfLines={2}>
            3 séries x 12 repetições
          </Text>
        </VStack>
        <Icon as={Entypo} name="chevron-thin-right" color={"gray.300"} />
      </HStack>
    </TouchableOpacity>
  );
}
