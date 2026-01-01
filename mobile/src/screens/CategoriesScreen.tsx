import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

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
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#111827" />
        </TouchableOpacity>

        <Text style={styles.title}>Categorias</Text>

        <View style={{ width: 24 }} />
      </View>

      {/* GRID */}
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
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
              size={34}
              color="#fff"
              style={{ marginBottom: 10 }}
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
    backgroundColor: "#F9FAFB",
    paddingHorizontal: 16,
  },
  header: {
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#111827",
  },
  card: {
    width: "48%",
    height: 150,
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
