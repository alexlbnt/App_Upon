import { View, Text, StyleSheet } from "react-native";
import { colors } from "../theme/colors";

const categories = [
  { name: "Mercado", color: colors.blue },
  { name: "Padaria", color: colors.green },
  { name: "Açougue", color: colors.purple },
  { name: "Lanches", color: colors.brown },
];

export default function CategoryList() {
  return (
    <View style={styles.container}>
      {categories.map((item) => (
        <View key={item.name} style={[styles.card, { backgroundColor: item.color }]}>
          <Text style={styles.text}>{item.name}</Text>
          <Text style={styles.sub}>45 Itens</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 20,
    marginTop: 20,
    gap: 12,
  },
  card: {
    flex: 1,
    borderRadius: 16,
    padding: 12,
  },
  text: {
    color: "#fff",
    fontWeight: "700",
  },
  sub: {
    color: "#fff",
    fontSize: 12,
  },
});
