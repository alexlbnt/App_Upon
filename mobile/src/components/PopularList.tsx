import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../theme/colors";

const DATA = [
  {
    id: "1",
    name: "Peito de Frango",
    discount: "5%",
    added: false,
  },
  {
    id: "2",
    name: "Xuxu",
    discount: "30%",
    added: true,
  },
  {
    id: "3",
    name: "Detergente",
    discount: "15%",
    added: true,
  },
  {
    id: "4",
    name: "Resfenol",
    discount: "5%",
    added: false,
  },
];

export default function PopularList() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Populares</Text>

      <FlatList
        data={DATA}
        numColumns={2}
        keyExtractor={(item) => item.id}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            {/* FAVORITO */}
            <TouchableOpacity style={styles.favorite}>
              <Ionicons
                name={item.added ? "heart" : "heart-outline"}
                size={20}
                color={item.added ? "#EF4444" : "#9CA3AF"}
              />
            </TouchableOpacity>

            {/* DESCONTO */}
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{item.discount} OFF</Text>
            </View>

            {/* IMAGEM (PLACEHOLDER) */}
            <View style={styles.image} />

            {/* INFO */}
            <Text style={styles.name}>{item.name}</Text>

            <View style={styles.discountRow}>
              <Ionicons name="pricetag" size={14} color={colors.primary} />
              <Text style={styles.discountText}>
                Disc. {item.discount} Off
              </Text>
            </View>

            <TouchableOpacity
              style={[
                styles.button,
                item.added && styles.buttonDisabled,
              ]}
            >
              <Text
                style={[
                  styles.buttonText,
                  item.added && styles.buttonTextDisabled,
                ]}
              >
                {item.added ? "Adicionado à Lista" : "Adicionar à Lista"}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 16,
    color: "#111827",
  },
  card: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 12,
    marginBottom: 16,
    elevation: 2,
  },
  image: {
    height: 90,
    backgroundColor: "#E5E7EB",
    borderRadius: 12,
    marginBottom: 8,
  },
  name: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 6,
  },
  discountRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 10,
  },
  discountText: {
    fontSize: 12,
    color: colors.primary,
  },
  button: {
    backgroundColor: "#1F2937",
    paddingVertical: 8,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonDisabled: {
    backgroundColor: "#D1FAE5",
  },
  buttonText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
  buttonTextDisabled: {
    color: "#065F46",
  },
  favorite: {
    position: "absolute",
    top: 8,
    left: 8,
    zIndex: 2,
  },
  badge: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "#EF4444",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
    zIndex: 2,
  },
  badgeText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "700",
  },
});
