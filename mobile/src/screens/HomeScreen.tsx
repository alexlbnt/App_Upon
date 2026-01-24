import { useEffect, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";

import HomeHeader from "../components/HomeHeader";
import SearchInput from "../components/SearchInput";
import PromoCard from "../components/PromoCard";
import CategoryList from "../components/CategoryList";
import PopularList from "../components/PopularList";

import { api } from "../services/api";
import { getPopularProducts } from "../services/popular.service";

export default function HomeScreen() {
  const [categories, setCategories] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    loadCategories();
    loadPopularProducts();
  }, []);

  async function loadCategories() {
    try {
      const response = await api.get("/categories");
      setCategories(response.data);
    } catch (error) {
      console.log("Erro ao buscar categorias:", error);
    }
  }

  async function loadPopularProducts() {
    try {
      const data = await getPopularProducts();
      setPopularProducts(data);
    } catch (error) {
      console.log("Erro ao buscar produtos populares:", error);
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

      {/* PRODUTOS POPULARES (VITRINE) */}
      <PopularList data={popularProducts} />
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
