import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { useCart } from "../contexts/CartContext";
import { colors } from "../theme/colors";

export default function UseCouponsScreen() {
  const navigation = useNavigation<any>();
  const { items } = useCart();

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color={colors.text} />
        </TouchableOpacity>

        <Text style={styles.title}>Usar Cupons</Text>

        <View style={{ width: 24 }} />
      </View>

      {/* INFO */}
      <View style={styles.infoBox}>
        <Ionicons name="information-circle" size={18} color={colors.primary} />
        <Text style={styles.infoText}>
          Apresente seus cupons ao atendente para garantir o desconto
        </Text>
      </View>

      {/* LISTA DE CUPONS */}
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 24 }}
        renderItem={({ item }) => (
          <View style={styles.couponCard}>
            <View style={styles.couponLeft}>
              <Text style={styles.couponName}>{item.name}</Text>
              <Text style={styles.couponStore}>
                Cupom válido no estabelecimento
              </Text>
            </View>

            <View style={styles.couponRight}>
              <Text style={styles.couponPrice}>
                R$ {item.price.toFixed(2).replace(".", ",")}
              </Text>
              <Text style={styles.couponDiscount}>DESCONTO</Text>
            </View>
          </View>
        )}
      />

      {/* BOTÃO QR CODE (FUTURO) */}
      <TouchableOpacity style={styles.qrButton} activeOpacity={0.9}>
        <Ionicons name="qr-code-outline" size={22} color="#fff" />
        <Text style={styles.qrText}>Mostrar QR Code</Text>
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

  header: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.text,
  },

  infoBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E0F2FE",
    marginHorizontal: 16,
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
  },

  infoText: {
    marginLeft: 8,
    fontSize: 12,
    color: "#0369A1",
    flex: 1,
  },

  couponCard: {
    backgroundColor: "#fff",
    marginHorizontal: 16,
    marginBottom: 12,
    padding: 14,
    borderRadius: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderLeftWidth: 5,
    borderLeftColor: colors.primary,
  },

  couponLeft: {
    flex: 1,
  },

  couponName: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.text,
  },

  couponStore: {
    fontSize: 11,
    color: "#6B7280",
    marginTop: 4,
  },

  couponRight: {
    alignItems: "flex-end",
  },

  couponPrice: {
    fontSize: 15,
    fontWeight: "800",
    color: colors.primary,
  },

  couponDiscount: {
    fontSize: 10,
    color: "#16A34A",
    fontWeight: "700",
    marginTop: 2,
  },

  qrButton: {
    position: "absolute",
    bottom: 100,
    left: 16,
    right: 16,
    backgroundColor: colors.primary,
    paddingVertical: 16,
    borderRadius: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },

  qrText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 14,
  },
});
