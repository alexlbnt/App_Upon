import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../theme/colors";

export default function SearchInput() {
  return (
    <View style={styles.container}>
      <Ionicons
        name="search-outline"
        size={20}
        color={colors.muted}
        style={styles.icon}
      />

      <TextInput
        placeholder="Busque por produtos ou estabelecimentos"
        placeholderTextColor={colors.muted}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 16,
    paddingHorizontal: 16,
    height: 52,
    marginBottom: 18,

    // sombra iOS
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },

    // sombra Android
    elevation: 2,
  },

  icon: {
    marginRight: 10,
  },

  input: {
    flex: 1,
    fontSize: 14,
    color: colors.text,
  },
});
