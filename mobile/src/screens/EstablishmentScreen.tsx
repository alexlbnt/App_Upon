import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

import { colors } from "../theme/colors";
import { useCart } from "../contexts/CartContext";
import { useFavorites } from "../contexts/FavoritesContext";

/* ================= TYPES ================= */

type Product = {
  id: number;
  name: string;
  price: number;
};

type RouteParams = {
  highlightProductId?: number;
};

/* ================= MOCK DATA ================= */

const PRODUCTS: Product[] = [
  { id: 1, name: "Peito de Frango", price: 12.9 },
  { id: 2, name: "Detergente", price: 2.99 },
  { id: 3, name: "Refrigerante 2L", price: 7.49 },
];

const ESTABLISHMENT = {
  id: 1,
  name: "Mercado do Zé",
  description:
    "Mercado tradicional do bairro com produtos frescos, ofertas semanais e cupons exclusivos para clientes do Upon.",
  image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38",
  distance: "1.2 km",
  isOpen: true,
};

/* ================= SCREEN ================= */

export default function EstablishmentScreen() {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const { addItem } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();

  const scrollRef = useRef<ScrollView>(null);
  const productPositions = useRef<Record<number, number>>({});

  const { highlightProductId } = route.params as RouteParams;

  useEffect(() => {
    if (
      highlightProductId &&
      productPositions.current[highlightProductId]
    ) {
      setTimeout(() => {
        scrollRef.current?.scrollTo({
          y: productPositions.current[highlightProductId] - 120,
          animated: true,
        });
      }, 300);
    }
  }, [highlightProductId]);

  function handleAddToCart(product: Product) {
    addItem(product);
    Alert.alert("Adicionado 🛒", `${product.name} foi adicionado ao carrinho`);
  }

  return (
    <ScrollView
      ref={scrollRef}
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* BANNER */}
      <Image source={{ uri: ESTABLISHMENT.image }} style={styles.banner} />

      {/* HEADER FLOAT */}
      <View style={styles.headerActions}>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={22} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => toggleFavorite(ESTABLISHMENT)}
        >
          <Ionicons
            name={isFavorite(ESTABLISHMENT.id) ? "heart" : "heart-outline"}
            size={22}
            color={isFavorite(ESTABLISHMENT.id) ? "#EF4444" : "#fff"}
          />
        </TouchableOpacity>
      </View>

      {/* INFO */}
      <View style={styles.info}>
        <Text style={styles.name}>{ESTABLISHMENT.name}</Text>
        <Text style={styles.description}>{ESTABLISHMENT.description}</Text>
      </View>

      {/* CATEGORIES */}
      <View style={styles.categories}>
        <Text style={styles.sectionTitle}>Categorias</Text>
        <View style={styles.tags}>
          <CategoryTag label="Frutas" />
          <CategoryTag label="Carnes" />
          <CategoryTag label="Limpeza" />
          <CategoryTag label="Bebidas" />
        </View>
      </View>

      {/* PRODUCTS */}
      <View style={styles.products}>
        <Text style={styles.sectionTitle}>Produtos em Destaque</Text>

        <View style={styles.productsGrid}>
          {PRODUCTS.map((product) => {
            const isHighlighted = product.id === highlightProductId;

            return (
              <View
                key={product.id}
                onLayout={(e) =>
                  (productPositions.current[product.id] =
                    e.nativeEvent.layout.y)
                }
                style={[
                  styles.productCard,
                  isHighlighted && styles.highlightedCard,
                ]}
              >
                <View style={styles.productImage}>
                  <Ionicons
                    name="image-outline"
                    size={28}
                    color="#9CA3AF"
                  />
                </View>

                <Text style={styles.productName}>{product.name}</Text>
                <Text style={styles.productPrice}>
                  R$ {product.price.toFixed(2).replace(".", ",")}
                </Text>

                <TouchableOpacity
                  style={styles.button}
                  onPress={() => handleAddToCart(product)}
                >
                  <Text style={styles.buttonText}>Adicionar à Lista</Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
}

/* ================= COMPONENTS ================= */

function CategoryTag({ label }: { label: string }) {
  return (
    <View style={styles.tag}>
      <Text style={styles.tagText}>{label}</Text>
    </View>
  );
}

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  banner: {
    width: "100%",
    height: 220,
  },
  headerActions: {
    position: "absolute",
    top: 50,
    left: 20,
    right: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  info: {
    padding: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: "700",
    color: colors.text,
  },
  description: {
    color: colors.muted,
    marginTop: 8,
    lineHeight: 20,
  },
  categories: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 10,
    color: colors.text,
  },
  tags: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  tag: {
    backgroundColor: "#E5E7EB",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
  },
  tagText: {
    fontSize: 12,
    fontWeight: "500",
  },
  products: {
    padding: 20,
  },
  productsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  productCard: {
    width: "48%",
    backgroundColor: "#F9FAFB",
    borderRadius: 16,
    padding: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "transparent",
  },
  highlightedCard: {
    borderColor: colors.primary,
    backgroundColor: "#ECFEFF",
  },
  productImage: {
    height: 100,
    backgroundColor: "#E5E7EB",
    borderRadius: 12,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  productName: {
    fontWeight: "600",
    fontSize: 14,
  },
  productPrice: {
    fontSize: 13,
    marginTop: 4,
    color: "#374151",
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 8,
    borderRadius: 10,
    marginTop: 8,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "600",
    fontSize: 12,
  },
});
