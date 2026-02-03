import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

import { colors } from "../theme/colors";
import { useAuth } from "../contexts/AuthContext";

export default function SplashScreen() {
  const navigation = useNavigation<any>();
  const { login } = useAuth();

  useEffect(() => {
    async function loadApp() {
      try {
        const userLogged = await AsyncStorage.getItem(
          "@upon:user"
        );

        if (userLogged) {
          login();
          navigation.reset({
            index: 0,
            routes: [{ name: "Tabs" }],
          });
        } else {
          navigation.reset({
            index: 0,
            routes: [{ name: "Login" }],
          });
        }
      } catch (error) {
        navigation.reset({
          index: 0,
          routes: [{ name: "Login" }],
        });
      }
    }

    loadApp();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>
        <Text style={styles.logoPrimary}>Up</Text>
        <Text style={styles.logoSecondary}>on</Text>
      </Text>

      <Text style={styles.subtitle}>App de Cupons</Text>

      <ActivityIndicator
        size="large"
        color={colors.primary}
        style={{ marginTop: 30 }}
      />
    </View>
  );
}

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1F3A4A",
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    fontSize: 48,
    fontWeight: "800",
  },

  logoPrimary: {
    color: colors.primary,
  },

  logoSecondary: {
    color: "#E5E7EB",
  },

  subtitle: {
    marginTop: 6,
    fontSize: 14,
    color: "#E5E7EB",
  },
});
