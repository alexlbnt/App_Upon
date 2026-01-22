import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { colors } from "../theme/colors";

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
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={24} color="#111827" />
        </TouchableOpacity>

        <Text style={styles.title}>Estabelecimentos</Text>

        {/* Placeholder para centralizar título */}
        <View style={{ width: 24 }} />
      </View>

      {/* GRID DE CATEGORIAS */}
      <FlatList
        data={categories}
        numColumns={2}
        keyExtractor={(item) => item.id}
        columnWrapperStyle={{ gap: 16 }}
        contentContainerStyle={{ gap: 16, paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.card, { backgroundColor: item.color }]}
            activeOpacity={0.85}
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

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 12,
    backgroundColor: colors.background,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    color: colors.text,
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
