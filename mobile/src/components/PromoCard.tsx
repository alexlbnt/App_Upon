import { View, Text, StyleSheet } from "react-native";
import { colors } from "../theme/colors";

export default function PromoCard() {
  return (
    <View style={styles.card}>
      <Text style={styles.small}>Semana Feliz</Text>
      <Text style={styles.title}>20% OFF</Text>
      <Text style={styles.desc}>Em produtos alimentícios</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.blue,
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 20,
    padding: 20,
  },
  small: {
    color: "#064E3B",
  },
  title: {
    fontSize: 26,
    fontWeight: "800",
    marginVertical: 5,
  },
  desc: {
    color: "#064E3B",
  },
});
