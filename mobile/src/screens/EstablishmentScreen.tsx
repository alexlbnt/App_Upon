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
import { useNavigation } from "@react-navigation/native";

import { colors } from "../theme/colors";
import { useFavorites } from "../contexts/FavoritesContext";
import CouponGrid from "../components/CouponGrid";
import { Coupon } from "../types/Coupon";

/* ================= MOCK DATA ================= */

const ESTABLISHMENT = {
  id: 1,
  name: "Mercado do Zé",
  description:
    "Mercado tradicional do bairro com produtos frescos, ofertas semanais e cupons exclusivos para clientes do Upon.",
  image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38",
  distance: "1.2 km",
  isOpen: true,
};

const COUPONS: Coupon[] = [
  {
    id: 1,
    title: "10% OFF em Frutas",
    discountType: "percentage",
    discountValue: 10,
    image:
      "https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a",
    establishmentId: 1,
    establishmentName: "Mercado do Zé",
    expiresAt: "30/03/2026",
  },
  {
    id: 2,
    title: "R$ 5 OFF em Carnes",
    discountType: "fixed",
    discountValue: 5,
    image:
      "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f",
    establishmentId: 1,
    establishmentName: "Mercado do Zé",
    expiresAt: "28/03/2026",
  },
  {
    id: 3,
    title: "20% OFF em Bebidas",
    discountType: "percentage",
    discountValue: 20,
    image:
      "https://images.unsplash.com/photo-1580910051074-3eb694886505",
    establishmentId: 1,
    establishmentName: "Mercado do Zé",
    expiresAt: "25/03/2026",
  },
];

/* ================= SCREEN ================= */

export default function EstablishmentScreen() {
  const navigation = useNavigation<any>();
  const { toggleFavorite, isFavorite } = useFavorites();

  return (
    <ScrollView
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
        <Text style={styles.description}>
          {ESTABLISHMENT.description}
        </Text>

        <View style={styles.metaRow}>
          <Ionicons
            name="location-outline"
            size={16}
            color={colors.muted}
          />
          <Text style={styles.metaText}>
            {ESTABLISHMENT.distance}
          </Text>

          <View style={styles.statusBadge}>
            <Text
              style={[
                styles.statusText,
                {
                  color: ESTABLISHMENT.isOpen
                    ? "#10B981"
                    : "#EF4444",
                },
              ]}
            >
              {ESTABLISHMENT.isOpen ? "Aberto" : "Fechado"}
            </Text>
          </View>
        </View>
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

      {/* CUPONS */}
      <View style={styles.coupons}>
        <Text style={styles.sectionTitle}>
          Cupons Disponíveis
        </Text>

        <CouponGrid coupons={COUPONS} />
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

  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: 10,
  },

  metaText: {
    fontSize: 12,
    color: colors.muted,
  },

  statusBadge: {
    marginLeft: 10,
  },

  statusText: {
    fontSize: 12,
    fontWeight: "600",
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

  coupons: {
    padding: 20,
  },
});