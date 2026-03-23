import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import * as Location from "expo-location";

import HomeHeader from "../components/HomeHeader";
import SearchInput from "../components/SearchInput";
import PromoCard from "../components/PromoCard";
import CategoryList from "../components/CategoryList";
import PopularList from "../components/PopularList"; // Note: Inside it might say Popular Products, we should just keep using the component but rename header visually if we could, or just leave it for now but remove the 'Products' focus.

import { api } from "../services/api";
import { getPopularProducts } from "../services/popular.service";

export default function HomeScreen() {
  const [categories, setCategories] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState<Location.LocationObject | null>(null);

  useEffect(() => {
    loadCategories();
    requestLocation();
  }, []);

  async function requestLocation() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permissão de localização foi negada.');
      return;
    }
    let currentLocation = await Location.getCurrentPositionAsync({});
    setLocation(currentLocation);
  }

  async function loadCategories() {
    try {
      // Mock categories while backend is unavailable
      const mockCategories = [
        { id: 1, name: "Mercados", icon: "basket", color: "#4FC3D0", totalItems: 12 },
        { id: 2, name: "Farmácia", icon: "medkit", color: "#2563EB", totalItems: 8 },
        { id: 3, name: "Padarias", icon: "cafe", color: "#22C55E", totalItems: 5 },
      ];
      setCategories(mockCategories);
    } catch (error) {
      console.log("Erro ao buscar categorias:", error);
    }
  }

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* HEADER */}
      <HomeHeader />

      {/* BUSCA */}
      <SearchInput value={searchQuery} onChangeText={setSearchQuery} />

      {searchQuery.trim().length === 0 ? (
        <>
          {/* CARD PROMOCIONAL */}
          <PromoCard />

          {/* CATEGORIAS (HORIZONTAL) */}
          <CategoryList data={categories} />

          {/* ESTABELECIMENTOS EM DESTAQUE (VITRINE) */}
          <Text style={styles.sectionTitle}>Lojas e Estabelecimentos</Text>
          <PopularList />
        </>
      ) : (
        <>
          <Text style={styles.sectionTitle}>Resultados da Busca</Text>
          <PopularList searchQuery={searchQuery} />
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
    marginTop: 24,
    marginBottom: 12,
  },
});
