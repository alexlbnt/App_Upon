import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../theme/colors";
import { useNavigation } from "@react-navigation/native";

const categories = [
  { id: "1", name: "Mercados", icon: "basket", color: "#4FC3D0" },
  { id: "2", name: "Farmácia", icon: "medkit", color: "#2563EB" },
  { id: "3", name: "Padarias", icon: "cafe", color: "#22C55E" },
  { id: "4", name: "Bebidas", icon: "wine", color: "#EC4899" },
  { id: "5", name: "Barbearia", icon: "cut", color: "#F59E0B" },
  { id: "6", name: "Papelaria", icon: "book", color: "#10B981" },
  { id: "7", name: "Ferragista", icon: "build", color: "#B45309" },
  { id: "8", name: "Açougue", icon: "restaurant", color: "#9333EA" },
];

export default function EstablishmentCategoriesScreen() {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Estabelecimentos</Text>

      <FlatList
        data={categories}
        numColumns={2}
        keyExtractor={(item) => item.id}
        columnWrapperStyle={{ gap: 16 }}
        contentContainerStyle={{ gap: 16 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.card, { backgroundColor: item.color }]}
            onPress={() =>
              navigation.navigate("EstablishmentsByCategory", {
                categoryId: item.id,
                categoryName: item.name,
              })
            }
          >
            <Ionicons name={item.icon as any} size={28} color="#fff" />
            <Text style={styles.cardTitle}>{item.name}</Text>
            <Text style={styles.cardSubtitle}>45 Itens</Text>
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
    flex: 1,
    height: 130,
    borderRadius: 20,
    padding: 16,
    justifyContent: "space-between",
  },
  cardTitle: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
  cardSubtitle: {
    color: "#fff",
    fontSize: 12,
  },
});
