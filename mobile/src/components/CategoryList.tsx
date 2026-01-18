import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

type Category = {
  id: number;
  name: string;
  color: string;
  icon: string;
  totalItems: number;
};

type Props = {
  data: Category[];
};

export default function CategoryList({ data }: Props) {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Estabelecimentos</Text>

        <TouchableOpacity
          onPress={() => navigation.navigate("EstablishmentCategories")}
        >
          <Ionicons name="chevron-forward" size={22} color="#9CA3AF" />
        </TouchableOpacity>
      </View>

      {/* Lista */}
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingRight: 16 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.card, { backgroundColor: item.color }]}
            activeOpacity={0.8}
            onPress={() =>
              navigation.navigate("Establishments", {
                categoryId: item.id,
                title: item.name,
              })
            }
          >
            <Ionicons
              name={item.icon as any}
              size={26}
              color="#fff"
              style={{ marginBottom: 6 }}
            />

            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.items}>{item.totalItems} Itens</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

/* ---------------- STYLES ---------------- */

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#111827",
  },
  card: {
    width: 120,
    height: 120,
    borderRadius: 16,
    padding: 14,
    justifyContent: "flex-end",
    marginRight: 12,
  },
  name: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
  items: {
    color: "#E5E7EB",
    fontSize: 12,
    marginTop: 2,
  },
});
