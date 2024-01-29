import { StatusBar } from 'expo-status-bar';
import { Text, View } from "react-native";
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import { Loading } from "@components/Loading";
import { NativeBaseProvider, Box } from "native-base";
import { theme } from "src/theme";


export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <NativeBaseProvider theme={theme}>
      {!fontsLoaded ? (
        <Loading />
      ) : (
        <>
          <StatusBar style="light" backgroundColor="transparent" translucent />
          <Box justifyContent="center" alignItems="center" flex={1}>
            Hello world
          </Box>
        </>
      )}
    </NativeBaseProvider>
  );
}


