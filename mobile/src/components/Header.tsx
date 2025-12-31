import { View, Text, StyleSheet } from "react-native";
import { colors } from "../theme/colors";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>João Alberto</Text>

      <View style={styles.notification}>
        <Text style={styles.badge}>6</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 50,
  },
  name: {
    fontSize: 22,
    fontWeight: "700",
    color: colors.text,
  },
  notification: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  badge: {
    color: "#fff",
    fontWeight: "700",
  },
});
