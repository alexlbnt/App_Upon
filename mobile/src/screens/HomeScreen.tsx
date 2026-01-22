import { useEffect, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";

import HomeHeader from "../components/HomeHeader";
import SearchInput from "../components/SearchInput";
import PromoCard from "../components/PromoCard";
import CategoryList from "../components/CategoryList";
import PopularList from "../components/PopularList";

import { api } from "../services/api";

export default function HomeScreen() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    loadCategories();
  }, []);

  async function loadCategories() {
    try {
      const response = await api.get("/categories");
      setCategories(response.data);
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
      <SearchInput />

      {/* CARD PROMOCIONAL */}
      <PromoCard />

      {/* CATEGORIAS (HORIZONTAL) */}
      <CategoryList data={categories} />

      {/* PRODUTOS POPULARES */}
      <PopularList />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    paddingHorizontal: 16,
  },
});
