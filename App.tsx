import { StatusBar } from 'expo-status-bar';
import { Text, View } from "react-native";
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import { Loading } from "@components/Loading";

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return !fontsLoaded ? (
    <Loading />
  ) : (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#202024",
      }}
    >
      <StatusBar style="light" backgroundColor="transparent" translucent />
      <Text style={{ fontFamily: "Roboto_700Bold", color: "#fff" }}>
        Hello World
      </Text>
    </View>
  );
}


