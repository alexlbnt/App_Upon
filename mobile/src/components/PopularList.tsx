import { View, Text, StyleSheet } from "react-native";
import { useEffect, useState } from "react";

import CouponGrid from "../components/CouponGrid";
import { Coupon } from "../types/Coupon";

export default function PopularList() {
  const [coupons, setCoupons] = useState<Coupon[]>([]);

  useEffect(() => {
    loadPopular();
  }, []);

  function loadPopular() {
    const mock: Coupon[] = [
      {
        id: 1,
        title: "20% OFF em Bebidas",
        discountType: "percentage",
        discountValue: 20,
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886505",
        establishmentId: 1,
        establishmentName: "Mercado do Zé",
        expiresAt: "25/03/2026",
      },
      {
        id: 2,
        title: "R$ 10 OFF em Compras acima de R$100",
        discountType: "fixed",
        discountValue: 10,
        image: "https://images.unsplash.com/photo-1542838132-92c53300491e",
        establishmentId: 2,
        establishmentName: "Supermercado Central",
        expiresAt: "27/03/2026",
      },
    ];

    setCoupons(mock);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Populares</Text>
      <CouponGrid coupons={coupons} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 12,
    color: "#111827",
  },
});