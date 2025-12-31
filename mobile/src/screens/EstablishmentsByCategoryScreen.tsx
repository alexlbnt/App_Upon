import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { colors } from "../theme/colors";
import { useNavigation, useRoute } from "@react-navigation/native";

const establishments = [
  { id: "1", name: "Mercado do Zé" },
  { id: "2", name: "Mercado Central" },
  { id: "3", name: "Supermercado Prime" },
  { id: "4", name: "Mercado Preço Baixo" },
];

export default function EstablishmentsByCategoryScreen() {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();

  const { categoryName } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{categoryName}</Text>

      <FlatList
        data={establishments}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ gap: 16 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigation.navigate("Establishment", {
                establishmentId: item.id,
              })
            }
          >
            <Text style={styles.cardText}>{item.name}</Text>
            <Text style={styles.discount}>20% OFF</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 20,
  },
  card: {
    height: 110,
    borderRadius: 20,
    backgroundColor: "#9BD3E3",
    padding: 20,
    justifyContent: "center",
  },
  cardText: {
    fontSize: 18,
    fontWeight: "700",
  },
  discount: {
    marginTop: 8,
    color: colors.primary,
    fontWeight: "600",
  },
});
