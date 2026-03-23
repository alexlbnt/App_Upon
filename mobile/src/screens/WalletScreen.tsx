import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { useWallet } from "../contexts/WalletContext";
import { colors } from "../theme/colors";

export default function WalletScreen() {
  const navigation = useNavigation<any>();
  const { items, removeCoupon, clearWallet, totalDiscountSaved } = useWallet();

  // Agrupar itens por Estabelecimento (storeName)
  const groupedItems = items.reduce((acc: any, item) => {
    if (!acc[item.storeName]) {
      acc[item.storeName] = [];
    }
    acc[item.storeName].push(item);
    return acc;
  }, {});

  const stores = Object.keys(groupedItems);

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Ionicons name="wallet-outline" size={24} color={colors.text} />
          <Text style={styles.title}>Minha Carteira</Text>
        </View>
      </View>

      {/* LISTA */}
      {items.length === 0 ? (
        <View style={styles.empty}>
          <Ionicons name="ticket-outline" size={48} color="#9CA3AF" />
          <Text style={styles.emptyTitle}>Nenhum cupom salvo</Text>
          <Text style={styles.emptyText}>
            Adicione cupons para utilizá-los no estabelecimento.
          </Text>
        </View>
      ) : (
        <>
          <FlatList
            data={stores}
            keyExtractor={(store) => store}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: 220,
            }}
            renderItem={({ item: storeName }) => (
              <View style={styles.storeGroup}>
                <View style={styles.storeHeader}>
                  <Ionicons name="storefront-outline" size={18} color={colors.primary} />
                  <Text style={styles.storeName}>{storeName}</Text>
                </View>

                {groupedItems[storeName].map((coupon: any) => (
                  <View key={coupon.id} style={styles.item}>
                    <View style={{ flex: 1 }}>
                      <Text style={styles.itemName}>{coupon.name}</Text>
                      {coupon.discountValue ? (
                        <Text style={styles.itemDiscount}>
                          Economia: R$ {coupon.discountValue.toFixed(2).replace(".", ",")}
                        </Text>
                      ) : (
                        <Text style={styles.itemPrice}>
                          R$ {coupon.price?.toFixed(2).replace(".", ",")}
                        </Text>
                      )}
                    </View>

                    <TouchableOpacity onPress={() => removeCoupon(coupon.id)}>
                      <Ionicons
                        name="trash-outline"
                        size={20}
                        color="#DC2626"
                      />
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            )}
          />

          {/* FOOTER FIXO */}
          <View style={styles.footer}>
            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>Descontos Acumulados</Text>
              <Text style={styles.totalValue}>
                R$ {totalDiscountSaved.toFixed(2).replace(".", ",")}
              </Text>
            </View>

            <TouchableOpacity
              style={styles.useButton}
              onPress={() => navigation.navigate("ValidateCoupons")}
              activeOpacity={0.9}
            >
              <Text style={styles.useText}>
                Exibir QR Code para Validação
              </Text>
            </TouchableOpacity>

            <Text style={styles.footerHint}>
              Apresente os cupons no caixa para garantir seus descontos.
            </Text>

            <TouchableOpacity
              style={styles.clearButton}
              onPress={clearWallet}
            >
              <Text style={styles.clearText}>Limpar Carteira</Text>
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
  },

  header: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
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
    paddingHorizontal: 40,
  },

  emptyTitle: {
    marginTop: 12,
    fontSize: 16,
    fontWeight: "600",
    color: colors.text,
  },

  emptyText: {
    marginTop: 6,
    fontSize: 13,
    color: "#6B7280",
    textAlign: "center",
  },

  storeGroup: {
    marginBottom: 20,
  },

  storeHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 8,
    gap: 6,
  },

  storeName: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.text,
  },

  item: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 14,
    marginHorizontal: 16,
    marginBottom: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderLeftWidth: 4,
    borderLeftColor: colors.primary,
  },

  itemName: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.text,
  },

  itemPrice: {
    fontSize: 13,
    color: colors.primary,
    marginTop: 4,
    fontWeight: "700",
  },

  itemDiscount: {
    fontSize: 12,
    color: "#16A34A",
    marginTop: 4,
    fontWeight: "700",
  },

  /* FOOTER FIXO */
  footer: {
    position: "absolute",
    bottom: 90, 
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    padding: 16,
    borderTopWidth: 1,
    borderColor: "#E5E7EB",
  },

  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },

  totalLabel: {
    fontSize: 15,
    fontWeight: "600",
    color: "#16A34A",
  },

  totalValue: {
    fontSize: 16,
    fontWeight: "800",
    color: "#16A34A",
  },

  useButton: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
  },

  useText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 14,
  },

  footerHint: {
    marginTop: 8,
    fontSize: 11,
    color: "#6B7280",
    textAlign: "center",
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
