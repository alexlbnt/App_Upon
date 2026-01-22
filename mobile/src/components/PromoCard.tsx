import { View, Text, StyleSheet } from "react-native";
import { colors } from "../theme/colors";

export default function PromoCard() {
  return (
    <View style={styles.container}>
      {/* Formas decorativas */}
      <View style={styles.circleSmall} />
      <View style={styles.circleLarge} />

      <Text style={styles.subtitle}>Semana Feliz</Text>
      <Text style={styles.title}>20% OFF</Text>
      <Text style={styles.description}>
        Em produtos alimentícios
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#8ECAD8",
    borderRadius: 20,
    padding: 20,
    height: 150,
    marginBottom: 24,
    justifyContent: "center",
    overflow: "hidden",

    // sombra iOS
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },

    // sombra Android
    elevation: 4,
  },

  subtitle: {
    fontSize: 13,
    color: "#1F2937",
    marginBottom: 4,
  },

  title: {
    fontSize: 32,
    fontWeight: "800",
    color: "#111827",
    marginBottom: 6,
  },

  description: {
    fontSize: 13,
    color: "#374151",
  },

  /* -------- FORMAS -------- */

  circleSmall: {
    position: "absolute",
    top: -20,
    right: -20,
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "rgba(255,255,255,0.25)",
  },

  circleLarge: {
    position: "absolute",
    bottom: -50,
    right: -30,
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: "rgba(255,255,255,0.15)",
  },
});
