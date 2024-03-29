import { useNavigation } from "@react-navigation/native";
import {
  VStack,
  Image,
  Center,
  Text,
  Heading,
  Pressable,
  ScrollView,
} from "native-base";
import LogoSvg from "@assets/logo.svg";
import BackgroundImg from "@assets/background.png";
import { Input } from "@components/Input";
import { FontAwesome } from "@expo/vector-icons";
import { useTheme } from "native-base";
import { useState } from "react";
import { Button } from "@components/Button";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

export const SignIn = () => {
  const theme = useTheme();
  const [hidePassword, setHidePassword] = useState(false);
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} px={6}>
        <Image
          source={BackgroundImg}
          defaultSource={BackgroundImg}
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
        <Center>
          <Heading
            color="gray.100"
            fontFamily="heading"
            fontSize={"xl"}
            mb={"6"}
          >
            Acesse sua conta
          </Heading>
        </Center>
        <Input
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        {/* TODO: adicionar uma feature para controlar se o secureTextEntry é true or false   */}
        <Input
          placeholder="Senha"
          secureTextEntry={hidePassword}
          InputRightElement={
            <Pressable onPress={() => setHidePassword((prev) => !prev)} ml={4}>
              <FontAwesome
                name={hidePassword ? "eye" : "eye-slash"}
                size={24}
                color={theme.colors.gray[100]}
              />
            </Pressable>
          }
        />
        <Button title="Acessar" />
        <Center mt="24">
          <Text color="gray.100" fontSize="sm" mb={3} fontFamily={"body"}>
            Ainda não tem acesso?
          </Text>
          <Button
            title="Criar conta"
            variant="outline"
            onPress={() => navigation.navigate("signUp")}
          />
        </Center>
      </VStack>
    </ScrollView>
  );
};
