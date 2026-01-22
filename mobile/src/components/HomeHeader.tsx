import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../theme/colors";

export default function HomeHeader() {
  return (
    <View style={styles.container}>
      {/* Nome do usuário */}
      <View>
        <Text style={styles.welcome}>Olá,</Text>
        <Text style={styles.name}>João Alberto</Text>
      </View>

      {/* Notificações */}
      <TouchableOpacity style={styles.notificationButton}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>6</Text>
        </View>
        <Ionicons name="notifications" size={22} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  welcome: {
    fontSize: 14,
    color: colors.muted,
  },

  name: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.text,
  },

  notificationButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },

  badge: {
    position: "absolute",
    top: -4,
    right: -4,
    backgroundColor: "#fff",
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },

  badgeText: {
    fontSize: 11,
    fontWeight: "700",
    color: colors.primary,
  },
});
