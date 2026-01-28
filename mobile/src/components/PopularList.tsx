import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from "react-native";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { getPopularProducts } from "../services/popular.service";
import { colors } from "../theme/colors";

type PopularProduct = {
  id: number;
  name: string;
  price: number;
  image: string;
  establishmentId: number;
  establishmentName: string;
};

export default function PopularList() {
  const [products, setProducts] = useState<PopularProduct[]>([]);
  const navigation = useNavigation<any>();

  useEffect(() => {
    loadPopular();
  }, []);

  async function loadPopular() {
    const data = await getPopularProducts();
    setProducts(data);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Populares</Text>

      <FlatList
        data={products}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        scrollEnabled={false} // 🔥 Home faz o scroll, não a lista
        columnWrapperStyle={{ gap: 12 }}
        contentContainerStyle={{ gap: 12 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            activeOpacity={0.8}
            onPress={() =>
              navigation.navigate("Establishment", {
                establishmentId: item.establishmentId,
                highlightProductId: item.id, // ⭐ PRODUTO DESTACADO
              })
            }
          >
            <Image source={{ uri: item.image }} style={styles.image} />

            <Text style={styles.name} numberOfLines={1}>
              {item.name}
            </Text>

            <Text style={styles.price}>
              R$ {item.price.toFixed(2).replace(".", ",")}
            </Text>

            <Text style={styles.establishment} numberOfLines={1}>
              {item.establishmentName}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

/* =======================
   STYLES
======================= */

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 12,
    color: "#111827",
  },
  card: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 10,
  },
  image: {
    width: "100%",
    height: 110,
    borderRadius: 12,
    backgroundColor: "#E5E7EB",
    marginBottom: 8,
  },
  name: {
    fontSize: 14,
    fontWeight: "600",
    color: "#111827",
  },
  price: {
    fontSize: 13,
    fontWeight: "700",
    color: colors.primary,
    marginTop: 2,
  },
  establishment: {
    fontSize: 11,
    color: "#6B7280",
    marginTop: 2,
  },
});
