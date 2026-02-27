import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Coupon } from "./../types/Coupon";
import { colors } from "../theme/colors";

type Props = {
  coupon: Coupon;
};

export default function CouponCard({ coupon }: Props) {
  const navigation = useNavigation<any>();

  const discountLabel =
    coupon.discountType === "percentage"
      ? `${coupon.discountValue}% OFF`
      : `R$ ${coupon.discountValue} OFF`;

  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.85}
      onPress={() =>
        navigation.navigate("CouponDetails", {
          coupon,
        })
      }
    >
      <Image source={{ uri: coupon.image }} style={styles.image} />

      <View style={styles.discountBadge}>
        <Text style={styles.discountText}>
          {discountLabel}
        </Text>
      </View>

      <Text style={styles.title} numberOfLines={1}>
        {coupon.title}
      </Text>

      <Text style={styles.establishment} numberOfLines={1}>
        {coupon.establishmentName}
      </Text>

      <Text style={styles.expiration}>
        Válido até {coupon.expiresAt}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 10,
  },

  image: {
    width: "100%",
    height: 110,
    borderRadius: 12,
    marginBottom: 8,
    backgroundColor: "#E5E7EB",
  },

  discountBadge: {
    position: "absolute",
    top: 12,
    left: 12,
    backgroundColor: colors.primary,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },

  discountText: {
    color: "#fff",
    fontSize: 11,
    fontWeight: "700",
  },

  title: {
    fontSize: 14,
    fontWeight: "600",
    color: "#111827",
  },

  establishment: {
    fontSize: 11,
    color: "#6B7280",
    marginTop: 2,
  },

  expiration: {
    fontSize: 10,
    color: "#9CA3AF",
    marginTop: 4,
  },
});