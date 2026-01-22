import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { useCart } from "../contexts/CartContext";
import { colors } from "../theme/colors";

export default function CartScreen() {
  const navigation = useNavigation<any>();
  const { items, removeItem, clearCart, total } = useCart();

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color={colors.text} />
        </TouchableOpacity>

        <Text style={styles.title}>Meu Carrinho</Text>

        <View style={{ width: 24 }} />
      </View>

      {/* LISTA */}
      {items.length === 0 ? (
        <View style={styles.empty}>
          <Ionicons name="cart-outline" size={48} color="#9CA3AF" />
          <Text style={styles.emptyText}>Seu carrinho está vazio</Text>
        </View>
      ) : (
        <>
          <FlatList
            data={items}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 16 }}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <View>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Text style={styles.itemPrice}>
                    R$ {item.price.toFixed(2)}
                  </Text>
                </View>

                <TouchableOpacity onPress={() => removeItem(item.id)}>
                  <Ionicons
                    name="trash-outline"
                    size={20}
                    color="#DC2626"
                  />
                </TouchableOpacity>
              </View>
            )}
          />

          {/* FOOTER */}
          <View style={styles.footer}>
            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>Total</Text>
              <Text style={styles.totalValue}>
                R$ {total.toFixed(2)}
              </Text>
            </View>

            <TouchableOpacity style={styles.checkoutButton}>
              <Text style={styles.checkoutText}>Finalizar Compra</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.clearButton}
              onPress={clearCart}
            >
              <Text style={styles.clearText}>Limpar Carrinho</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
}

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.text,
  },

  empty: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  emptyText: {
    marginTop: 12,
    fontSize: 14,
    color: "#6B7280",
  },

  item: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  itemName: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.text,
  },

  itemPrice: {
    fontSize: 13,
    color: "#6B7280",
    marginTop: 4,
  },

  footer: {
    marginTop: 10,
  },

  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },

  totalLabel: {
    fontSize: 16,
    fontWeight: "600",
  },

  totalValue: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.primary,
  },

  checkoutButton: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
  },

  checkoutText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 14,
  },

  clearButton: {
    marginTop: 10,
    alignItems: "center",
  },

  clearText: {
    color: "#DC2626",
    fontSize: 13,
    fontWeight: "600",
  },
});
