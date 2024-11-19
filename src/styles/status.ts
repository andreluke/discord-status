import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  // Container principal da tela
  container: {
    flex: 1,
    backgroundColor: "#1e1e2f", // Fundo escuro para criar contraste
    padding: 16,
    paddingTop: 24, // Espaçamento no topo
    paddingBottom: 24, // Espaçamento no final
  },

  // Centraliza o conteúdo
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1e1e2f",
  },

  // Estilo de título (para seções)
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff", // Texto claro para destaque
    marginBottom: 12,
    textAlign: "center",
  },

  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff", // Texto claro
    marginBottom: 8,
  },

  // Texto de erro
  errorText: {
    fontSize: 18,
    color: "#ff6f61", // Vermelho chamativo para erros
    textAlign: "center",
    marginTop: 20,
  },

  // Container de status
  statusContainer: {
    backgroundColor: "#29293d", // Fundo diferenciado para status
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    marginTop: 20,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 6, // Sombra no Android
  },

  // Container de componentes
  componentsContainer: {
    backgroundColor: "#29293d",
    padding: 12,
    borderRadius: 12,
    marginBottom: 16,
  },

  // Item do componente
  componentItem: {
    backgroundColor: "#383851", // Fundo intermediário para itens
    padding: 14,
    borderRadius: 10,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },

  // Container de incidentes
  incidentsContainer: {
    backgroundColor: "#29293d",
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
  },

  // Item de incidente
  incidentItem: {
    backgroundColor: "#383851",
    padding: 14,
    borderRadius: 10,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },

  // Container de manutenções
  maintenancesContainer: {
    backgroundColor: "#29293d",
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
  },

  // Item de manutenção
  maintenanceItem: {
    backgroundColor: "#383851",
    padding: 14,
    borderRadius: 10,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },

  // Estilo de texto genérico
  text: {
    fontSize: 16,
    color: "#b0b0cf", // Texto suave para maior legibilidade
    marginBottom: 8,
  },

  // Estilo para status (indicador de status)
  indicatorText: {
    fontSize: 14,
    fontStyle: "italic",
    color: "#a0a0c0", // Texto sutil para indicadores
    marginBottom: 4,
  },

  noIncidentsText: {
    fontSize: 18,
    color: "#a0a0c0", // Cor sutil para mensagens sem incidentes
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10
  },

  // Estilo para a mensagem personalizada de sem manutenções
  noMaintenancesText: {
    fontSize: 18,
    color: "#a0a0c0", // Cor sutil para mensagens sem manutenção
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10
  },
});
