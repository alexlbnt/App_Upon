import { SafeAreaView, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

import RootNavigator from "./navigation/RootNavigator";

import { AuthProvider } from "./contexts/AuthContext";
import { WalletProvider } from "./contexts/WalletContext";
import { FavoritesProvider } from "./contexts/FavoritesContext";

import { colors } from "./theme/colors";

export default function App() {
  return (
    <AuthProvider>
      <FavoritesProvider>
        <WalletProvider>
          <SafeAreaView style={styles.container}>
            <StatusBar style="dark" backgroundColor={colors.background} />
            <RootNavigator />
          </SafeAreaView>
        </WalletProvider>
      </FavoritesProvider>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
