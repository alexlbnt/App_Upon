import { FlatList, View, StyleSheet } from "react-native";
import CouponCard from "./CouponCard";
import { Coupon } from "./../types/Coupon";

type Props = {
  coupons: Coupon[];
  scrollEnabled?: boolean;
};

export default function CouponGrid({
  coupons,
  scrollEnabled = false,
}: Props) {
  return (
    <FlatList
      data={coupons}
      numColumns={2}
      keyExtractor={(item) => item.id.toString()}
      scrollEnabled={scrollEnabled}
      columnWrapperStyle={{ gap: 12 }}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => (
        <CouponCard coupon={item} />
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 12,
  },
});