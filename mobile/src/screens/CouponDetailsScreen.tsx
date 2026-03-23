import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Alert } from "react-native";

import { colors } from "../theme/colors";
import { useWallet } from "../contexts/WalletContext";

export default function CouponDetailsScreen() {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();
  const { coupon } = route.params;
  const { addCoupon } = useWallet();

  const discountLabel =
    coupon.discountType === "percentage"
      ? `${coupon.discountValue}% OFF`
      : `R$ ${coupon.discountValue} OFF`;

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
      {/* HEADER FLOATING */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#111827" />
        </TouchableOpacity>
      </View>

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

        {/* BOTÃO SALVAR */}
        <TouchableOpacity
          style={styles.useButton}
          onPress={() => {
            addCoupon({
              id: coupon.id || new Date().getTime(),
              name: coupon.title,
              discountValue: coupon.discountType === "percentage" ? null : coupon.discountValue,
              price: coupon.price || null,
              image: coupon.image || "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
              storeName: coupon.storeName || "Estabelecimento Parceiro",
            });
            Alert.alert("Sucesso", "Cupom salvo na sua Carteira!", [
              { text: "Ver Carteira", onPress: () => navigation.navigate("Wallet") },
              { text: "Continuar" }
            ]);
          }}
        >
          <Text style={styles.useButtonText}>
            SALVAR CUPOM NA CARTEIRA
          </Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  header: {
    position: "absolute",
    top: 50, // respect status bar approximately
    left: 20,
    zIndex: 10,
  },

  backButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
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
