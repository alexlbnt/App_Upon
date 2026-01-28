import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { useFavorites } from "../contexts/FavoritesContext";
import { colors } from "../theme/colors";

export default function FavoritesScreen() {
  const { favorites } = useFavorites();
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favoritos</Text>

      {favorites.length === 0 ? (
        <View style={styles.empty}>
          <Ionicons name="heart-outline" size={48} color="#9CA3AF" />
          <Text style={styles.emptyText}>
            Nenhum estabelecimento favoritado
          </Text>
        </View>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
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
                  <View style={styles.location}>
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
      )}
    </View>
  );
}



// Estilos

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 20,
  },
  empty: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    marginTop: 12,
    color: "#6B7280",
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
    marginBottom: 4,
  },
  description: {
    fontSize: 13,
    color: "#6B7280",
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
  },
  meta: {
    fontSize: 12,
    marginLeft: 4,
    color: "#6B7280",
  },
  status: {
    fontSize: 12,
    fontWeight: "600",
  },
});
