import { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { api } from "../services/api";
import { colors } from "../theme/colors";

type Establishment = {
  id: number;
  name: string;
  description: string;
  image: string;
  distance: string;
  isOpen: boolean;
};

export default function EstablishmentsByCategoryScreen() {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const { categoryId, title } = route.params;

  const [establishments, setEstablishments] = useState<Establishment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get(`/establishments/by-category/${categoryId}`)
      .then((response) => {
        setEstablishments(response.data);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#111827" />
        </TouchableOpacity>

        <Text style={styles.title}>{title}</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Lista */}
      <FlatList
        data={establishments}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 24 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            activeOpacity={0.85}
            onPress={() =>
              navigation.navigate("Establishment", {
                establishmentId: item.id,
              })
            }
          >
            <Image source={{ uri: item.image }} style={styles.image} />

            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>

              <Text style={styles.description} numberOfLines={2}>
                {item.description}
              </Text>

              <View style={styles.row}>
                <View style={styles.row}>
                  <Ionicons
                    name="location-outline"
                    size={14}
                    color="#6B7280"
                  />
                  <Text style={styles.meta}>{item.distance}</Text>
                </View>

                <Text
                  style={[
                    styles.status,
                    { color: item.isOpen ? "#16A34A" : "#DC2626" },
                  ]}
                >
                  {item.isOpen ? "Aberto" : "Fechado"}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

/* ---------------- STYLES ---------------- */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
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
    fontWeight: "600",
    color: "#111827",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    marginBottom: 16,
    overflow: "hidden",
    elevation: 2,
  },
  image: {
    width: "100%",
    height: 140,
  },
  info: {
    padding: 14,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
    marginBottom: 4,
  },
  description: {
    fontSize: 13,
    color: "#6B7280",
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  meta: {
    fontSize: 12,
    color: "#6B7280",
    marginLeft: 4,
  },
  status: {
    fontSize: 12,
    fontWeight: "600",
  },
});
