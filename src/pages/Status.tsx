import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  Animated,
  Easing,
} from "react-native";
import { useDiscord } from "../hooks/useDiscord";
import { styles as status } from "../styles/status";
import { dateFormatter } from "../utils/dateFormatter";
import { capitalizeFirstLetter } from "../utils/capitalizeLetter";
import { formatTimezone } from "../utils/formatTimezone";

export const Status: React.FC = () => {
  const { loading, error, data } = useDiscord();
  const [animatedColor] = useState(new Animated.Value(0));

  useEffect(() => {
    if (data) {
      const statusNotOperational = data.status.indicator !== "operational";
      Animated.timing(animatedColor, {
        toValue: statusNotOperational ? 1 : 0,
        duration: 500,
        easing: Easing.ease,
        useNativeDriver: false,
      }).start();
    }
  }, [data]);

  const animatedBackgroundColor = animatedColor.interpolate({
    inputRange: [0, 1],
    outputRange: ["#29293d", "#3e1e1e"], // De cinza escuro a vermelho escuro
  });

  const animatedTextColor = animatedColor.interpolate({
    inputRange: [0, 1],
    outputRange: ["#b0b0cf", "#ff6f61"], // De cinza claro a vermelho claro
  });

  if (loading) {
    return (
      <View style={status.center}>
        <ActivityIndicator size="large" color="#6a82f1" />
      </View>
    );
  }

  if (error || !data) {
    return (
      <View style={status.center}>
        <Text style={status.errorText}>{error || "Erro ao carregar os dados"}</Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={status.container}
      contentContainerStyle={{ paddingBottom: 24, paddingTop: 24 }}
    >
      <View style={status.statusContainer}>
        <Text style={status.title}>Status da Página</Text>
        {data.page.name && <Text style={status.text}>{data.page.name}</Text>}
        {data.page.url && <Text style={status.text}>{data.page.url}</Text>}
        {data.page.time_zone && (
          <Text style={status.text}>{formatTimezone(data.page.time_zone)}</Text>
        )}
        {data.page.updated_at && (
          <Text style={status.text}>{dateFormatter(data.page.updated_at)}</Text>
        )}

        <Text style={status.title}>Descrição do Status</Text>
        {data.status.description && (
          <Text style={status.text}>{data.status.description}</Text>
        )}
        {data.status.indicator && (
          <Animated.Text
            style={[status.text, { color: animatedTextColor }]}
          >
            {data.status.indicator}
          </Animated.Text>
        )}
      </View>

      <View style={status.componentsContainer}>
        <Text style={status.title}>Componentes</Text>
        {data.components.map((component) => {
          const isOperational = component.status === "operational";
          return (
            <View
              key={component.id}
              style={[
                status.componentItem,
                { backgroundColor: isOperational ? "#383851" : "#3e1e1e" },
              ]}
            >
              <Text style={status.name}>{component.name}</Text>
              <Text style={[status.text, { color: isOperational ? "#b0b0cf" : "#ff6f61" }]}>
                {capitalizeFirstLetter(component.status)}
              </Text>
              {component.description && (
                <Text style={status.text}>{component.description}</Text>
              )}
              <Text style={status.text}>
                {dateFormatter(component.updated_at)}
              </Text>
            </View>
          );
        })}
      </View>

      <View style={status.incidentsContainer}>
        <Text style={status.title}>Incidentes</Text>
        {data.incidents && data.incidents.length > 0 ? (
          data.incidents.map((incident) => (
            <View key={incident.id} style={status.incidentItem}>
              <Text style={status.name}>{incident.name}</Text>
              <Text style={[status.text, { color: "#ff6f61" }]}>
                {incident.status}
              </Text>
              <Text style={status.text}>{incident.impact}</Text>
              <Text style={status.text}>{dateFormatter(incident.created_at)}</Text>
              <Text style={status.text}>
                {incident.resolved_at || "Não resolvido"}
              </Text>
            </View>
          ))
        ) : (
          <Text style={status.noIncidentsText}>
            Não há incidentes no momento.
          </Text>
        )}
      </View>

      <View style={status.maintenancesContainer}>
        <Text style={status.title}>Manutenções Agendadas</Text>
        {data.scheduled_maintenances && data.scheduled_maintenances.length > 0 ? (
          data.scheduled_maintenances.map((maintenance) => (
            <View key={maintenance.id} style={status.maintenanceItem}>
              <Text style={status.name}>{maintenance.name}</Text>
              <Text style={[status.text, { color: "#ff6f61" }]}>
                {maintenance.status}
              </Text>
              <Text style={status.text}>{dateFormatter(maintenance.created_at)}</Text>
              <Text style={status.text}>
                {maintenance.resolved_at || "Ainda em andamento"}
              </Text>
            </View>
          ))
        ) : (
          <Text style={status.noMaintenancesText}>
            Não há manutenções agendadas.
          </Text>
        )}
      </View>
    </ScrollView>
  );
};
