import UserPhoto from "@components/UserPhoto";
import { MaterialIcons } from "@expo/vector-icons";
import { HStack, Heading, Icon, Text, VStack } from "native-base";
import { TouchableOpacity } from "react-native";

export const HomeHeader = () => {
  return (
    <HStack
      bg={"gray.600"}
      pt={16}
      px={4}
      pb={5}
      alignItems="center"
      borderColor={"gray.100"}
      w={"full"}
    >
      <UserPhoto
        source={{ uri: "https://github.com/MarcosCunhaDev.png" }}
        alt="user profile photo"
        size={16}
      />

      <VStack pl={4} flex={1}>
        <Text color={"gray.100"}>Olá</Text>
        <Heading color={"gray.100"} fontSize={"md"}>
          Marcos
        </Heading>
      </VStack>
      <TouchableOpacity
        onPress={() => {
          console.log("clicou pra sair");
        }}
      >
        <Icon as={MaterialIcons} name="logout" color={"gray.200"} size={7} />
      </TouchableOpacity>
    </HStack>
  );
};
