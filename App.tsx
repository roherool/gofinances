import "react-native-gesture-handler";
// import AsyncStorageLib from "@react-native-async-storage/async-storage";
import React from "react";
import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AppLoading from "expo-app-loading";
import { ThemeProvider } from "styled-components";
import "intl";
import "intl/locale-data/jsonp/pt-BR";

import { Routes } from "./src/routes";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import theme from "./src/global/styles/theme";

import { RootTabsParamList } from "./src/routes/app.routes";
import { AuthProvider, useAuth } from "./src/hooks/auth";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootTabsParamList {}
  }
}

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  const { isLoading } = useAuth();

  if (!fontsLoaded || isLoading) {
    return <AppLoading />;
  }

  // AsyncStorageLib.removeItem("@gofinances:transactions");

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <StatusBar barStyle="light-content" />
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
