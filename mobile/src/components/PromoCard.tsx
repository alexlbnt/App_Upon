import { View, Text, StyleSheet, FlatList, Dimensions } from "react-native";
import { useEffect, useRef, useState } from "react";

const { width } = Dimensions.get("window");

type PromoItem = {
  id: number;
  title: string;
  subtitle?: string;
  description: string;
  backgroundColor: string;
};

const PROMOS: PromoItem[] = [
  {
    id: 1,
    title: "Semana Feliz",
    subtitle: "20% OFF",
    description: "Em produtos alimentícios",
    backgroundColor: "#9BD3E0",
  },
  {
    id: 2,
    title: "Atenção Empresário",
    subtitle: "Cadastre seu negócio",
    description:
      "Possui um estabelecimento e deseja cadastrar no Upon?\nEntre em contato conosco:\n(62) 99610-6767",
    backgroundColor: "#fda2a2",
  },
  {
    id: 3,
    title: "Volta às Aulas",
    subtitle: "10% OFF",
    description: "Em materiais escolares",
    backgroundColor: "#cbfcb5",
  },
];

export default function PromoCard() {
  const flatListRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const next =
        currentIndex === PROMOS.length - 1 ? 0 : currentIndex + 1;

      flatListRef.current?.scrollToIndex({
        index: next,
        animated: true,
      });

      setCurrentIndex(next);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <View style={styles.container}>
      {/* CARROSSEL */}
      <FlatList
        ref={flatListRef}
        data={PROMOS}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        pagingEnabled
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        getItemLayout={(_, index) => ({
          length: width,
          offset: width * index,
          index,
        })}
        renderItem={({ item }) => (
          <View style={styles.page}>
            <View
              style={[
                styles.card,
                { backgroundColor: item.backgroundColor },
              ]}
            >
              <Text style={styles.title}>{item.title}</Text>

              {item.subtitle && (
                <Text style={styles.subtitle}>{item.subtitle}</Text>
              )}

              <Text style={styles.description}>{item.description}</Text>
            </View>
          </View>
        )}
      />

      {/* INDICADOR DE PÁGINAS */}
      <View style={styles.dotsContainer}>
        {PROMOS.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              index === currentIndex && styles.activeDot,
            ]}
          />
        ))}
      </View>
    </View>
  );
}

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },

  page: {
    width,
    paddingHorizontal: 26,
  },

  card: {
    height: 125, // 🔥 mantido
    right: 15,
    borderRadius: 20,
    padding: 18,
    justifyContent: "center",
  },

  title: {
    fontSize: 14,
    fontWeight: "600",
    color: "#065F73",
  },

  subtitle: {
    fontSize: 20,
    fontWeight: "800",
    marginTop: 2,
    color: "#0F172A",
  },

  description: {
    fontSize: 13,
    marginTop: 8,
    color: "#0F172A",
    lineHeight: 18,
  },

  /* ===== INDICADOR ===== */

  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#CBD5E1",
    marginHorizontal: 4,
  },

  activeDot: {
    backgroundColor: "#0F172A",
    width: 10,
    height: 10,
  },
});
