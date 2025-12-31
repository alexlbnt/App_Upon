import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../theme/colors";

const categories = [
  { name: "Mercado", color: colors.blue },
  { name: "Padaria", color: colors.green },
  { name: "Açougue", color: colors.purple },
  { name: "Lanches", color: colors.brown },
];

export default function CategoryList() {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      {categories.map((item) => (
        <TouchableOpacity
          key={item.name}
          style={[styles.card, { backgroundColor: item.color }]}
          activeOpacity={0.8}
          onPress={() =>
            navigation.navigate("EstablishmentCategories", {
              category: item.name,
            })
          }
        >
          <Text style={styles.text}>{item.name}</Text>
          <Text style={styles.sub}>45 Itens</Text>
        </TouchableOpacity>
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
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 14,
  },
  sub: {
    color: "#fff",
    fontSize: 12,
    marginTop: 4,
  },
});
