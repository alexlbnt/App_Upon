import { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { api } from "../services/api";

type Category = {
  id: number;
  name: string;
  color: string;
  icon: string;
  totalItems: number;
};

export default function CategoriesScreen() {
  const navigation = useNavigation<any>();
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    api.get("/categories").then((response) => {
      setCategories(response.data);
    });
  }, []);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#111827" />
        </TouchableOpacity>

        <Text style={styles.title}>Categorias</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Grid */}
      <FlatList
        data={categories}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 24 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.card, { backgroundColor: item.color }]}
            activeOpacity={0.85}
            onPress={() =>
              navigation.navigate("Establishments", {
                categoryId: item.id,
                title: item.name,
              })
            }
          >
            <Ionicons
              name={item.icon as any}
              size={36}
              color="#fff"
              style={{ marginBottom: 12 }}
            />

            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.items}>{item.totalItems} Estabelecimentos</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

/* ---------------- STYLES ---------------- */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F9FAFB",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "#111827",
  },
  card: {
    width: "48%",
    height: 160,
    borderRadius: 20,
    padding: 16,
    justifyContent: "flex-end",
    marginBottom: 16,
  },
  name: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  items: {
    color: "#E5E7EB",
    fontSize: 12,
    marginTop: 4,
  },
});
