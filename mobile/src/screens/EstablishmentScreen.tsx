import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../theme/colors";

export default function EstablishmentScreen() {
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
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="arrow-back" size={22} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="heart-outline" size={22} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Informações do estabelecimento */}
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
            name="Peito de Frango"
            price="R$ 12,90"
            discount="5% OFF"
          />

          <ProductCard
            name="Detergente"
            price="R$ 2,99"
            discount="15% OFF"
          />

          <ProductCard
            name="Refrigerante 2L"
            price="R$ 7,49"
            discount="10% OFF"
          />
        </View>
      </View>
    </ScrollView>
  );
}

/* =======================
   COMPONENTES AUXILIARES
======================= */

function CategoryTag({ label }: { label: string }) {
  return (
    <View style={styles.tag}>
      <Text style={styles.tagText}>{label}</Text>
    </View>
  );
}

function ProductCard({
  name,
  price,
  discount,
}: {
  name: string;
  price: string;
  discount: string;
}) {
  return (
    <View style={styles.productCard}>
      <View style={styles.productImage}>
        <Ionicons name="image-outline" size={28} color="#9CA3AF" />
      </View>

      <Text style={styles.productName}>{name}</Text>
      <Text style={styles.productPrice}>{price}</Text>
      <Text style={styles.productDiscount}>{discount}</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Adicionar à Lista</Text>
      </TouchableOpacity>
    </View>
  );
}

/* =======================
   ESTILOS
======================= */

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
    marginBottom: 10,
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
    marginTop: 2,
  },

  productDiscount: {
    color: colors.primary,
    fontSize: 12,
    marginVertical: 4,
  },

  button: {
    backgroundColor: colors.primary,
    paddingVertical: 8,
    borderRadius: 10,
    marginTop: 6,
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "600",
    fontSize: 12,
  },
});
