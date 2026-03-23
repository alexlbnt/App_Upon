import { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../theme/colors";
import { api } from "../../services/api";

export default function AdminCouponsScreen() {
  const navigation = useNavigation<any>();
  const [coupons, setCoupons] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCoupons();
  }, []);

  async function loadCoupons() {
    try {
      const response = await api.get("/coupons");
      setCoupons(response.data);
    } catch (err) {
      console.log("Erro ao buscar os cupons", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color={colors.text} />
        </TouchableOpacity>
        <Text style={styles.title}>Meus Cupons</Text>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add" size={24} color={colors.primary} />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.list}>
        {loading ? (
          <ActivityIndicator size="large" color={colors.primary} style={{ marginTop: 40 }} />
        ) : coupons.length === 0 ? (
          <View style={styles.emptyState}>
            <Ionicons name="pricetags-outline" size={48} color="#D1D5DB" />
            <Text style={styles.emptyText}>Você ainda não criou nenhum cupom.</Text>
          </View>
        ) : (
          coupons.map((coupon) => (
            <View key={coupon.id} style={styles.card}>
              <View style={styles.cardHeader}>
                <View style={styles.badgeWrapper}>
                  <Text style={styles.badgeText}>
                    {coupon.discountType === "percentage" ? `${coupon.discountValue}%` : `R$ ${coupon.discountValue}`} OFF
                  </Text>
                </View>
                <Text style={styles.dateText}>Até {coupon.expiresAt}</Text>
              </View>
              <Text style={styles.cardTitle}>{coupon.title}</Text>
              <Text style={styles.cardSubtitle}>Loja: {coupon.establishment?.name || "Desconhecida"}</Text>
              
              <View style={styles.cardFooter}>
                <TouchableOpacity style={styles.actionButton}>
                  <Ionicons name="pencil" size={16} color={colors.primary} />
                  <Text style={styles.actionText}>Editar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton}>
                  <Ionicons name="trash" size={16} color="#DC2626" />
                  <Text style={[styles.actionText, { color: "#DC2626" }]}>Excluir</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))
        )}
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
  },
  backButton: {
    padding: 4,
  },
  addButton: {
    padding: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.text,
  },
  list: {
    padding: 20,
  },
  emptyState: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
  },
  emptyText: {
    marginTop: 12,
    fontSize: 14,
    color: colors.muted,
  },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    borderLeftWidth: 4,
    borderLeftColor: colors.primary,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  badgeWrapper: {
    backgroundColor: "#E0E7FF",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  badgeText: {
    color: colors.primary,
    fontWeight: "800",
    fontSize: 12,
  },
  dateText: {
    fontSize: 12,
    color: colors.muted,
    fontWeight: "500",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.text,
  },
  cardSubtitle: {
    fontSize: 13,
    color: colors.muted,
    marginTop: 4,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 16,
    borderTopWidth: 1,
    borderTopColor: "#F3F4F6",
    paddingTop: 12,
    marginTop: 16,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    padding: 4,
  },
  actionText: {
    fontSize: 13,
    fontWeight: "600",
    color: colors.primary,
  },
});
