import React from "react";
import { AuthRoutes } from "./auth.routes";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { Box, useTheme } from "native-base";

export const Routes = () => {
  const theme = useTheme();
  const navigationTheme = DefaultTheme;
  navigationTheme.colors.background = theme.colors.gray[700];

  return (
    <Box flex={1} bg="gray.700">
      <NavigationContainer theme={navigationTheme}>
        <AuthRoutes />
      </NavigationContainer>
    </Box>
  );
};
