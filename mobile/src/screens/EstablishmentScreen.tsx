import React from "react";
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
import { useNavigation } from "@react-navigation/native";

import { colors } from "../theme/colors";
import { useCart } from "../contexts/CartContext";

type Product = {
  id: number;
  name: string;
  price: number;
};

export default function EstablishmentScreen() {
  const navigation = useNavigation<any>();
  const { addItem } = useCart();

  function handleAddToCart(product: Product) {
    addItem(product);
    Alert.alert("Adicionado 🛒", `${product.name} foi adicionado ao carrinho`);
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Banner */}
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1587049352846-4a222e784d38",
        }}
        style={styles.banner}
      />

      {/* Header flutuante */}
      <View style={styles.headerActions}>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={22} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="heart-outline" size={22} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Informações */}
      <View style={styles.info}>
        <Text style={styles.name}>Mercado do Zé</Text>
        <Text style={styles.description}>
          Mercado tradicional do bairro com produtos frescos, ofertas semanais
          e cupons exclusivos para clientes do Upon.
        </Text>
      </View>

      {/* Categorias */}
      <View style={styles.categories}>
        <Text style={styles.sectionTitle}>Categorias</Text>

        <View style={styles.tags}>
          <CategoryTag label="Frutas" />
          <CategoryTag label="Carnes" />
          <CategoryTag label="Limpeza" />
          <CategoryTag label="Bebidas" />
        </View>
      </View>

      {/* Produtos */}
      <View style={styles.products}>
        <Text style={styles.sectionTitle}>Produtos em Destaque</Text>

        <View style={styles.productsGrid}>
          <ProductCard
            product={{ id: 1, name: "Peito de Frango", price: 12.9 }}
            onAdd={handleAddToCart}
          />

          <ProductCard
            product={{ id: 2, name: "Detergente", price: 2.99 }}
            onAdd={handleAddToCart}
          />

          <ProductCard
            product={{ id: 3, name: "Refrigerante 2L", price: 7.49 }}
            onAdd={handleAddToCart}
          />
        </View>
      </View>
    </ScrollView>
  );
}

/* ================= COMPONENTES ================= */

function CategoryTag({ label }: { label: string }) {
  return (
    <View style={styles.tag}>
      <Text style={styles.tagText}>{label}</Text>
    </View>
  );
}

function ProductCard({
  product,
  onAdd,
}: {
  product: Product;
  onAdd: (product: Product) => void;
}) {
  return (
    <View style={styles.productCard}>
      <View style={styles.productImage}>
        <Ionicons name="image-outline" size={28} color="#9CA3AF" />
      </View>

      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productPrice}>
        R$ {product.price.toFixed(2)}
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => onAdd(product)}
      >
        <Text style={styles.buttonText}>Adicionar à Lista</Text>
      </TouchableOpacity>
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
