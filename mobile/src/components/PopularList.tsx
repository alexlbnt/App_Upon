import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { colors } from "../theme/colors";
import { useNavigation } from "@react-navigation/native";

type PopularItem = {
  id: number;
  name: string;
  image: string;
  price: number;
  discount?: number;
  establishmentId: number;
  establishmentName: string;
};

type Props = {
  data: PopularItem[];
};

export default function PopularList({ data }: Props) {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Populares perto de você</Text>

      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={{ paddingRight: 16 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            activeOpacity={0.85}
            onPress={() =>
              navigation.navigate("Establishment", {
                establishmentId: item.establishmentId,
              })
            }
          >
            {/* Imagem */}
            <Image source={{ uri: item.image }} style={styles.image} />

            {/* Info */}
            <View style={styles.info}>
              <Text style={styles.name} numberOfLines={2}>
                {item.name}
              </Text>

              <Text style={styles.price}>
                R$ {item.price.toFixed(2).replace(".", ",")}
              </Text>

              <Text style={styles.establishment}>
                {item.establishmentName}
              </Text>
            </View>

            {/* Badge desconto */}
            {item.discount && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{item.discount}% OFF</Text>
              </View>
            )}
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

/* =======================
   STYLES
======================= */

const styles = StyleSheet.create({
  container: {
    marginBottom: 28,
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.text,
    marginBottom: 12,
  },

  card: {
    width: 160,
    marginRight: 14,
    backgroundColor: "#fff",
    borderRadius: 18,
    overflow: "hidden",

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },

  image: {
    width: "100%",
    height: 100,
    backgroundColor: "#E5E7EB",
  },

  info: {
    padding: 12,
  },

  name: {
    fontSize: 13,
    fontWeight: "600",
    color: colors.text,
    marginBottom: 4,
  },

  price: {
    fontSize: 14,
    fontWeight: "700",
    color: colors.primary,
    marginBottom: 2,
  },

  establishment: {
    fontSize: 11,
    color: colors.muted,
  },

  badge: {
    position: "absolute",
    top: 8,
    left: 8,
    backgroundColor: colors.primary,
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 8,
  },

  badgeText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "700",
  },
});
