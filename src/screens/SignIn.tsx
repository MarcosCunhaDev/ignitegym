import { VStack, Image, Center, Text } from "native-base";
import LogoSvg from "@assets/logo.svg";
import BackgroundImg from "@assets/background.png";

export const SignIn = () => {
  return (
    <VStack flex={1} bg="gray.700">
      <Image
        source={BackgroundImg}
        alt="Training people"
        resizeMode="contain"
        position="absolute"
      />
      <Center my={"24"}>
        <LogoSvg />
        <Text color="gray.100" fontSize="sm">
          Treine sua mente e seu corpo
        </Text>
      </Center>
    </VStack>
  );
};