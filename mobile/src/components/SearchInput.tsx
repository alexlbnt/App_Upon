import { View, TextInput, StyleSheet } from "react-native";

export default function SearchInput() {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Busque" style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  input: {
    backgroundColor: "#F3F4F6",
    height: 50,
    borderRadius: 12,
    paddingHorizontal: 15,
    fontSize: 16,
  },
});
