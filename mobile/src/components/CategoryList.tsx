import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../theme/colors";

type Category = {
  id: number;
  name: string;
  icon: string;
  color: string;
  totalItems?: number;
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
          <Ionicons name="chevron-forward" size={20} color={colors.muted} />
        </TouchableOpacity>
      </View>

      {/* Lista horizontal */}
      <FlatList
        data={data}
        horizontal
        keyExtractor={(item) => String(item.id)}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingRight: 16 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.card, { backgroundColor: item.color }]}
            activeOpacity={0.85}
            onPress={() =>
              navigation.navigate("EstablishmentsByCategory", {
                categoryId: item.id,
                categoryName: item.name,
              })
            }
          >
            <Ionicons name={item.icon as any} size={26} color="#fff" />

            <Text style={styles.cardTitle}>{item.name}</Text>

            <Text style={styles.cardSubtitle}>
              {item.totalItems ?? 45} Itens
            </Text>
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
    marginBottom: 24,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.text,
  },

  card: {
    width: 130,
    height: 110,
    borderRadius: 18,
    padding: 14,
    marginRight: 14,
    justifyContent: "space-between",
  },

  cardTitle: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 14,
  },

  cardSubtitle: {
    color: "#E5E7EB",
    fontSize: 12,
  },
});
