import { StatusBar } from "expo-status-bar";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import Routes from "./src/routes/StackRoutes";
import React from "react";

// Personalize o tema com base no DefaultTheme
const CustomTheme = {
  ...DefaultTheme, // Ou use DarkTheme se preferir
  colors: {
    ...DefaultTheme.colors, // Preserve outras propriedades necessárias
    background: "#29293d", // Fundo cinza escuro
    text: "#b0b0cf", // Texto
    primary: "#6a82f1", // Cor primária
    card: "#29293d", // Cor do card
    border: "#383851", // Bordas
    notification: "#ff6f61", // Notificações
  },
};

export default function App() {
  return (
    <NavigationContainer theme={CustomTheme}>
      <StatusBar style="light" />
      <Routes />
    </NavigationContainer>
  );
}
