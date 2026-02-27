import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";

import { colors } from "../theme/colors";

export default function CouponDetailsScreen() {
  const route = useRoute<any>();
  const { coupon } = route.params;

  const discountLabel =
    coupon.discountType === "percentage"
      ? `${coupon.discountValue}% OFF`
      : `R$ ${coupon.discountValue} OFF`;

  return (
    <ScrollView style={styles.container}>
      {/* IMAGEM */}
      <Image
        source={{
          uri:
            coupon.image ||
            "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
        }}
        style={styles.image}
      />

      {/* CONTEÚDO */}
      <View style={styles.content}>
        {/* LOJA */}
        <Text style={styles.storeName}>
          {coupon.storeName}
        </Text>

        {/* DESCONTO */}
        <View style={styles.discountCard}>
          <Text style={styles.discountText}>
            {discountLabel}
          </Text>
        </View>

        {/* TÍTULO */}
        <Text style={styles.title}>
          {coupon.title}
        </Text>

        {/* DESCRIÇÃO */}
        <Text style={styles.description}>
          {coupon.description}
        </Text>

        {/* VALIDADE */}
        <View style={styles.infoRow}>
          <Ionicons
            name="time-outline"
            size={18}
            color={colors.primary}
          />
          <Text style={styles.infoText}>
            Válido até {coupon.expiresAt}
          </Text>
        </View>

        {/* CATEGORIA */}
        {coupon.category && (
          <View style={styles.infoRow}>
            <Ionicons
              name="pricetag-outline"
              size={18}
              color={colors.primary}
            />
            <Text style={styles.infoText}>
              Categoria: {coupon.category}
            </Text>
          </View>
        )}

        {/* BOTÃO USAR */}
        <TouchableOpacity style={styles.useButton}>
          <Text style={styles.useButtonText}>
            USAR CUPOM
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  image: {
    width: "100%",
    height: 220,
  },

  content: {
    padding: 20,
  },

  storeName: {
    fontSize: 14,
    color: colors.muted,
  },

  discountCard: {
    marginVertical: 16,
    backgroundColor: colors.primary,
    paddingVertical: 18,
    borderRadius: 18,
    alignItems: "center",
  },

  discountText: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "800",
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.text,
    marginBottom: 8,
  },

  description: {
    fontSize: 14,
    color: colors.muted,
    marginBottom: 20,
    lineHeight: 20,
  },

  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 10,
  },

  infoText: {
    fontSize: 13,
    color: colors.text,
  },

  useButton: {
    marginTop: 30,
    backgroundColor: colors.primary,
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: "center",
  },

  useButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "800",
  },
});
