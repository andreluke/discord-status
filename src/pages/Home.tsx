import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../routes/StackRoutes";
import { useNavigation } from "@react-navigation/native";
import { styles as home } from "../styles/home";

// Importando o SVG da logo
import DiscordLogo from "../assets/discord.svg";

type SplashScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Home"
>;

export const Home: React.FC = () => {
  const navigation = useNavigation<SplashScreenNavigationProp>();

  return (
    <View style={home.container}>
      <StatusBar style="light" />

      {/* Logo do Discord */}
      <DiscordLogo width={200} height={200} style={{ marginBottom: 30 }} />

      {/* Título e Botão */}
      <Text style={home.title}>Bem-vindo ao App StatusDiscord!</Text>
      <Text style={home.subtitle}>
        Conecte-se ao status de como está o discord e fique ligado!
      </Text>

      <TouchableOpacity
        style={home.button}
        onPress={() => navigation.navigate("Status")}
      >
        <Text style={home.buttonText}>Iniciar</Text>
      </TouchableOpacity>
    </View>
  );
};
